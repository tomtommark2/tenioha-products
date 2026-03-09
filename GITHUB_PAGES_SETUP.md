# GitHub Pages Setup

## 1. Push this folder to GitHub
- Create a new repository.
- Put `index.html` at the repository root.
- Commit and push the files.

## 2. Enable GitHub Pages
- Open the repository on GitHub.
- Go to `Settings` -> `Pages`.
- Set `Source` to `Deploy from a branch`.
- Select the main branch and `/ (root)`.

## 3. Add your GA4 measurement ID
- Open [index.html](/Users/warut/codex_project/codex相談/index.html).
- Replace `G-XXXXXXXXXX` in the `ga4-measurement-id` meta tag with your real GA4 measurement ID.

## 4. What is tracked
- Page views via the normal GA4 page load.
- Product button clicks:
  - `open_vocab_app`
  - `open_visual_dictionary`
  - `open_youtube`
  - `open_note`

## 5. Recommended next checks
- Confirm the public URL opens correctly.
- Confirm clicks appear in GA4 Realtime.
- If needed, add a custom domain later.
