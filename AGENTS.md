# Repository Guidelines

## Project Structure & Module Organization
This repository is a minimal GitHub Pages site.
- `index.html`: main webpage markup and inline styles/scripts.
- `profile.jpg`: profile image asset referenced by the page.
- `CNAME`: custom domain mapping for GitHub Pages.
- `.git/`: version control metadata.

Keep new assets in the repository root only if they are directly page-facing. If the site grows, prefer folders like `assets/images/` and `assets/css/` to keep `index.html` readable.

## Build, Test, and Development Commands
There is no build pipeline in this repo; it is static HTML served by GitHub Pages.
- `Start-Process .\index.html`: open the page locally in your default browser.
- `python -m http.server 8000`: run a local static server (recommended for realistic path behavior).
- `git status` / `git diff`: review pending changes before commit.

## Coding Style & Naming Conventions
- Use 2-space indentation in HTML/CSS blocks for consistency.
- Prefer semantic HTML (`main`, `section`, `img`, `h1`) over generic wrappers.
- Use lowercase, hyphenated filenames for new assets (example: `team-photo.jpg`).
- Keep inline CSS concise; if styles expand, move them to a dedicated stylesheet.

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
