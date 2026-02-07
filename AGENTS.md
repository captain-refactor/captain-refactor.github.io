# Repository Guidelines

## Project Structure & Module Organization
This repository is a static GitHub Pages site with feature-split CSS/JS.
- `index.html`: main webpage markup and asset imports.
- `assets/css/base.css`: global layout primitives.
- `assets/css/background.css`: animated background and background-layer styles.
- `assets/css/card.css`: profile card and responsive card styles.
- `assets/js/main.js`: ES module entrypoint and bootstrap.
- `assets/js/particles.js`: particle canvas feature module.
- `assets/js/codewords.js`: floating codeword feature module.
- `assets/js/utils.js`: shared helpers.
- `profile.jpg`: profile image asset referenced by the page.
- `CNAME`: custom domain mapping for GitHub Pages.

Keep `index.html` focused on structure. Add new visual/behavior features in dedicated files under `assets/css/` and `assets/js/`.

## Build, Test, and Development Commands
There is no build pipeline in this repo; it is static HTML served by GitHub Pages.
- `Start-Process .\index.html`: open the page locally in your default browser.
- `python -m http.server 8000`: run a local static server (recommended for realistic path behavior).
- `git status` / `git diff`: review pending changes before commit.

## Coding Style & Naming Conventions
- Use 2-space indentation in HTML/CSS blocks for consistency.
- Prefer semantic HTML (`main`, `section`, `img`, `h1`) over generic wrappers.
- Use lowercase, hyphenated filenames for new assets (example: `team-photo.jpg`).
- Keep CSS and JS external (no inline `<style>` or inline `<script>` blocks for features).
- Use ES modules for JavaScript (`export`/`import`) with `assets/js/main.js` as the single page entrypoint.
- Keep feature boundaries clear: one file per feature where practical.

## Testing Guidelines
No automated test framework is configured.
- Manually verify layout and links in at least one desktop and one mobile viewport.
- Confirm image paths load correctly when served via `python -m http.server`.
- For content changes, check for HTML validity and obvious console errors in browser DevTools.

## Commit & Pull Request Guidelines
Git history uses short, imperative commit messages (examples: `no border`, `profile picture`).
- Keep commit subjects brief and action-focused (e.g., `update hero layout`).
- One logical change per commit.

For pull requests:
- Add a clear summary of what changed and why.
- Link related issues when applicable.
- Include before/after screenshots for visual changes.
- Verify the page renders correctly before requesting review.
