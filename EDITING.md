# Editing your website

Your site is built from this repository: https://github.com/cendekia-airlangga/cendekia-airlangga.github.io

Every change follows the same three steps:

1. **Open or create a file on GitHub.** Open the repo, click into the folder, then either click a file and the ✏️ pencil icon to edit it, or use **Add file → Create new file** or **Add file → Upload files**.
2. **Click "Commit changes"** (top right). The defaults are fine; commit straight to `main`.
3. **Wait about 2 minutes.** The **Actions** tab shows a "Deploy site" run. When it turns green, refresh https://cendekia-airlangga.github.io (use a hard refresh, Cmd+Shift+R or Ctrl+Shift+R, if you still see the old version).

If a run turns red, open it, scroll to the failed step and read the error. It is almost always a typo in the file you just edited, such as a missing `---`, a missing quote or comma in a `.bib` entry, or a wrong indent in a `.yml` file.

> Tip: pressing `.` on the repo page opens a full editor in your browser (github.dev), which is handy for editing several files in one commit.

---

## 1. Writing a blog post

Blog posts live in the **`_posts/`** folder. Each post is one Markdown file.

### Steps

1. Go to `_posts/` and click **Add file → Create new file**.
2. Name the file **`YYYY-MM-DD-short-title.md`**, for example `2026-11-02-why-mamba-forgets.md`. The date in the name sets the post date, and the short title becomes the URL (`/blog/2026/why-mamba-forgets/`).
3. Paste this header at the very top, then write your post below it:

```markdown
---
layout: post
title: Why Mamba forgets the middle
date: 2026-11-02 10:00:00+0400
description: A one-line summary shown on the blog page.
tags: interpretability mamba
categories: research
related_posts: false
---

Your text starts here. Write in normal Markdown.
```

4. Commit. The post appears on `/blog/` and under **Latest Posts** on the home page.

### Markdown basics

```markdown
## Section heading
### Smaller heading

**bold**, _italic_, `inline code`, [a link](https://example.com)

- bullet point
- another one

1. numbered item
2. another one

> A quote

![Alt text](/assets/img/blog/my-figure.png)
```

For images, upload the file to `assets/img/blog/` first (**Add file → Upload files**), then reference it as shown above.

Code blocks get syntax highlighting:

````markdown
```python
import torch
x = torch.randn(4, 8)
```
````

### Writing LaTeX

Math is rendered with MathJax, so normal LaTeX works.

**Inline math:** wrap the expression in `$...$` (or `$$...$$`) inside a sentence.

```markdown
The hidden state $h_t = \bar{A} h_{t-1} + \bar{B} x_t$ is updated at every step.
```

**Display math:** put `$$` on their own lines, with a blank line before and after.

```markdown
Some text.

$$
\mathrm{Attention}(Q, K, V) = \mathrm{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right) V
$$

More text.
```

**Numbered equations with references:**

```markdown
\begin{equation}
\label{eq:ssm}
h_t = \bar{A} h_{t-1} + \bar{B} x_t
\end{equation}

As shown in Equation \eqref{eq:ssm}, ...
```

`align`, `\mathbb`, `\mathcal`, `\operatorname` and the other usual commands all work.

Two things to watch for:
- If an underscore or `*` inside math gets turned into italics, it's being read as Markdown. Write `\_` or `\ast`, or move the math into its own display block.
- To show a literal dollar sign (like a price), write `\$`.

**TikZ diagrams:** add `tikzjax: true` to the post header, then:

```html
<script type="text/tikz">
\begin{tikzpicture}
  \draw[->] (0,0) -- (2,0) node[right] {$x$};
\end{tikzpicture}
</script>
```

### Keeping a post as a draft

Add `published: false` to the header. The file stays in the repo but doesn't appear on the site. Remove the line, or change it to `true`, when you're ready to publish.

The sample post `_posts/2026-10-15-hello-world.md` is a working example you can copy, or delete once you have real posts.

---

## 2. Updating your photo

The photo is **`assets/img/profile.jpg`**.

1. Rename your photo on your computer to exactly **`profile.jpg`**. A portrait (taller than wide) around 600×750 px or larger looks best.
2. In the repo, open the `assets/img/` folder and click **Add file → Upload files**.
3. Drag in `profile.jpg`. It replaces the placeholder because the name is the same.
4. Commit.

Options in `_pages/about.md`, under `profile:`:

```yaml
profile:
  align: right          # put the photo on the left or right
  image: profile.jpg    # change this if you use a different file name or a .png
  image_circular: false # true crops it into a circle
  more_info: >          # optional lines shown under the photo
    <p>Abu Dhabi, UAE</p>
```

---

## 3. Updating publications and news

### Add a publication

Publications live in **`_bibliography/papers.bib`**. Open it, click ✏️, and paste a BibTeX entry at the top. Copying one from Google Scholar or the ACL Anthology is fine; then add the extra fields below.

```bibtex
@inproceedings{airlangga2027example,
  title     = {Your Paper Title},
  author    = {Airlangga, Muhammad Cendekia and Inui, Kentaro},
  booktitle = {Proceedings of ACL 2027},
  year      = {2027},
  abbr      = {ACL},
  selected  = {true},
  arxiv     = {2701.01234},
  pdf       = {https://arxiv.org/pdf/2701.01234},
  code      = {https://github.com/cendekia-airlangga/your-repo},
  html      = {https://aclanthology.org/...},
  bibtex_show = {true}
}
```

What the extra fields do:

| Field | Effect |
| --- | --- |
| `abbr` | Venue badge on the left (e.g. ACL, EMNLP, Interspeech) |
| `selected = {true}` | Also shows the paper under **Selected Publications** on the home page |
| `arxiv`, `pdf`, `code`, `html`, `poster`, `slides`, `video`, `blog` | Adds a button that links there |
| `bibtex_show = {true}` | Adds a **Bib** button that reveals the BibTeX |
| `abstract = {...}` | Adds an **Abs** button that shows the abstract |
| `award = {Best Paper Award}` and `award_name = {Best Paper}` | Adds the award badge |

Your name is underlined automatically whenever the author list contains "Airlangga, Muhammad Cendekia". Papers are grouped by year on the Publications page.

To give a new venue badge its own color, add it to **`_data/venues.yml`**:

```yaml
"ACL":
  url: https://2027.aclweb.org/
  color: "#00369f"
```

To update a paper (for example, when the Interspeech paper gets co-authors and a link), edit its existing entry in `papers.bib`.

### Add a news item

News items live in **`_news/`**, one small file each. They show in the News table on the home page, newest first.

1. Go to `_news/` and click **Add file → Create new file**.
2. Name it, for example, `2027-01-15-acl-accepted.md`.
3. Paste:

```markdown
---
layout: post
date: 2027-01-15
inline: true
related_posts: false
---

Our paper [**"Your Paper Title"**](https://arxiv.org/abs/2701.01234) has been accepted at **ACL 2027**! 🎉
```

4. Commit. The `date:` line sets the date shown in the table.

---

## 4. Updating the profile on the home page

| What | File |
| --- | --- |
| Bio text, research interests, subtitle under your name | `_pages/about.md` |
| Your name | `_config.yml` (`first_name`, `middle_name`, `last_name`) |
| Social icons (email, Scholar, LinkedIn, X, ORCID) | `_data/socials.yml` |
| CV page content | `_data/cv.yml` |
| CV PDF button link | `_pages/cv.md` (`cv_pdf:`) |

### Edit your bio

Open **`_pages/about.md`** and click ✏️.
- The **subtitle** under your name is the `subtitle:` line in the header.
- Everything **below** the second `---` is your bio, written in Markdown. Edit it freely.
- `selected_papers`, `announcements` (news) and `latest_posts` in the header turn those home-page sections on or off (`true` or `false`).

### Add social links

Open **`_data/socials.yml`**. Find the line you want, remove the `#` at its start, and fill in your value:

```yaml
email: you@mbzuai.ac.ae
github_username: cendekia-airlangga
scholar_userid: AbCdEfGhIjK      # the part after user= in your Scholar URL
linkedin_username: your-handle    # the part after linkedin.com/in/
x_username: your_handle
orcid_id: 0000-0000-0000-0000
```

The icons appear in the top-left of the navbar on the home page. To also show them at the bottom of the home page, set `social: true` in `_pages/about.md`.

### Update your CV page

Open **`_data/cv.yml`**. Each block is a section (Education, Experience, Honors and Awards). Copy an existing entry and edit it, keeping the same indentation (spaces, not tabs):

```yaml
    - title: Research Intern
      institution: Some Lab, City, Country
      year: Jun - Aug 2026
      description:
        - What you worked on
```

The PDF button on the CV page links to the `cv_pdf:` value in `_pages/cv.md`. Update it when you have a new CV.
