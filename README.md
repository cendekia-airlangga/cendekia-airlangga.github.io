# cendekia-airlangga.github.io

Personal academic website of Muhammad Cendekia Airlangga, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme (MIT license).

## Publish on GitHub Pages
1. Create a **public** repository named exactly `cendekia-airlangga.github.io` under the GitHub account `cendekia-airlangga`.
2. Push everything in this folder to the `main` branch (include the hidden `.github` folder).
3. The **Deploy site** workflow in the Actions tab builds the site and pushes the result to a `gh-pages` branch. Wait for it to turn green.
4. In the repo, open **Settings > Pages**, set Source to "Deploy from a branch", branch `gh-pages`, folder `/ (root)`.
5. The site is live at https://cendekia-airlangga.github.io a minute later. Every later push to `main` rebuilds it.

If the workflow fails with a permissions error, open **Settings > Actions > General > Workflow permissions** and choose "Read and write permissions".

## Where things live
| What | File |
| --- | --- |
| Bio on the home page | `_pages/about.md` |
| Profile photo | `assets/img/profile.jpg` (replace the placeholder, keep the name) |
| News items | `_news/` (one file per item) |
| Publications | `_bibliography/papers.bib` (`selected = {true}` shows a paper on the home page) |
| Venue badge colors | `_data/venues.yml` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| CV page | `_data/cv.yml` |
| Social links (navbar icons) | `_data/socials.yml` |
| Name, site URL, blog title | `_config.yml` |

## Writing a blog post
Copy `_posts/2026-10-15-hello-world.md` to a new file named with the date and a short title, edit the header (title, date, description, tags), and write the post in Markdown below it. Push to `main` and the post appears on `/blog/`. Math (`$$ ... $$`) and code blocks are supported.

## Run locally (optional)
With Docker installed: `docker compose pull && docker compose up`, then open http://localhost:8080. See `INSTALL.md` for other options.
