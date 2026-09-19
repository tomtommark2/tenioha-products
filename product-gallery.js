'use strict';
(() => {
  const grammarSlides = [
    {file:'home-20260919.png',alt:'英文図解のホーム。1文の無料体験と、文法や用語を調べる参考ツール。',caption:'まず1文を体験。気になる文法も、ここから。'},
    {file:'structure-20260919.png',alt:'無料体験の例文を、主語・動詞・補語のまとまりに分けた構造図。',caption:'長い英文も、まとまりに分けると骨組みが見える。'},
    {file:'reading-20260919.png',alt:'無料体験の読み方解説。thatを目印に英文のまとまりを見つける手順。',caption:'なぜそこで区切るのか。読む手順を一つずつ確認。'}
  ];
  const vocabSlides = [
    {file:'answer-classification-20260919.png',alt:'apologiseと意味を表示した回答後の画面。苦手の分類に1語が反映されています。',caption:'回答するだけで、苦手・得意を自動分類。'},
    {file:'demo-study-cat-cute.png',alt:'猫のイラストを「かわいい」の注釈と矢印で紹介するcatの学習画面。',caption:'かわいいイラストで、意味もイメージしやすく。'}
  ];
  document.querySelectorAll('.product-gallery').forEach(gallery => {
  const isVocab = gallery.dataset.gallery === 'vocab';
  const slides = isVocab ? vocabSlides : grammarSlides;
  const folder = isVocab ? 'vocabulary-app' : 'sentence-diagram';
  const image = gallery.querySelector('img');
  const buttons = [...gallery.querySelectorAll('[data-slide]')];
  buttons.forEach(button => button.addEventListener('click', () => {
    const slide = slides[Number(button.dataset.slide)];
    image.src = `./assets/pr/${folder}/${slide.file}`;
    image.alt = slide.alt;
    gallery.querySelector('figcaption').textContent = slide.caption;
    gallery.querySelector('.gallery-expand').href = image.src;
    buttons.forEach(item => item.setAttribute('aria-pressed',String(item === button)));
  }));
  gallery.querySelector('.gallery-controls').hidden = false;
  });
})();
