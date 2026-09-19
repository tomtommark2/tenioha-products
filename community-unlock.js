'use strict';

function communityView(data, now = new Date()) {
  const fallback = {count:'—', goal:'', value:0, max:100, known:false,
    status:'開放状況を確認できません', remaining:'最新の状況は案内ページでご確認ください。',
    updated:'',
    action:'案内ページで確認する', href:'https://grammar-zukan.web.app/support', track:'open_community_support'};
  const month = new Intl.DateTimeFormat('sv-SE', {timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit'}).format(now);
  const checkedAge = now.getTime() - Date.parse(data?.checkedAt);
  if (!data || data.enabled !== true || typeof data.unlocked !== 'boolean' ||
      data.month !== month || !Number.isFinite(checkedAge) || checkedAge < -60000 || checkedAge > 600000 ||
      !Number.isSafeInteger(data.threshold) || data.threshold < 1) return fallback;
  const view = {...fallback, goal:`/ 目標${data.threshold}件`, max:data.threshold};
  const date = new Date(data.fetchedAt);
  const validDate = data.fetchedAt && Number.isFinite(date.getTime());
  const age = validDate ? now.getTime() - date.getTime() : Infinity;
  view.known = data.health === 'ok' && Number.isSafeInteger(data.total) && data.total >= 0 && age >= -60000 && age <= 7200000;
  if (view.known) {
    view.count = String(data.total);
    view.value = Math.min(data.total, data.threshold);
  }
  if (validDate) view.updated = new Intl.DateTimeFormat('ja-JP', {timeZone:'Asia/Tokyo',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'}).format(date) + '時点（約1時間ごとに集計）';
  if (data.provisional === true) {
    view.status = '開放状況を確認中';
    view.remaining = data.unlocked ? '直前の無料開放を暫定継続中です。詳しくは案内ページへ。' : fallback.remaining;
  } else if (data.unlocked) {
    view.status = '今月は全編無料開放中';
    view.remaining = view.known && data.total < data.threshold ? `${data.threshold}件を下回っても、今月末まで開放を継続` : '今月末まで、誰でも全編無料';
    view.action = '無料で英文図解を使う';
    view.href = 'https://grammar-zukan.web.app';
    view.track = 'open_community_textbook';
  } else if (view.known) {
    view.status = '今月の応援';
    view.remaining = data.total < data.threshold ? `全編無料開放まで、あと${data.threshold-data.total}件` : '開放状況は案内ページでご確認ください。';
    view.action = 'Primeで応援する';
  }
  return view;
}

if (typeof module !== 'undefined' && module.exports) module.exports = {communityView};

if (typeof document !== 'undefined' && document.querySelector('#community-unlock')) {
  const element = id => document.getElementById(`community-${id}`);
  function render(data) {
    const view = communityView(data);
    for (const key of ['count','goal','status','remaining','updated']) element(key).textContent = view[key];
    const meter = element('meter');
    meter.hidden = !view.known;
    meter.max = view.max;
    meter.value = view.value;
    meter.setAttribute('aria-valuetext', view.known ? `${view.count}件、目標${view.max}件` : '件数を確認できません');
    const link = element('primary');
    link.textContent = `${view.action} ↗`;
    link.href = view.href;
    link.dataset.track = view.track;
  }
  let pending = false;
  async function refresh() {
    if (pending) return;
    pending = true;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch('https://grammar-zukan.web.app/api/community-status', {cache:'no-store',credentials:'omit',signal:controller.signal});
      if (!response.ok) throw new Error('Unavailable');
      render(await response.json());
    } catch { render(null); }
    finally { clearTimeout(timer); pending = false; }
  }
  void refresh();
  setInterval(() => { if (!document.hidden) void refresh(); }, 300000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) void refresh(); });
}
