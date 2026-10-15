---
layout: post
title: Hello, world
date: 2026-10-15 10:00:00+0400
description: A first post, and a template for writing new ones.
tags: research
categories: notes
giscus_comments: false
related_posts: false
---

Welcome to my blog! This is a sample post. Replace it with your own writing, or keep it as a template.

### How to write a new post

Create a new file in the `_posts` folder named `YYYY-MM-DD-your-title.md`, copy the header block (the lines between the `---` markers) from this file, and write your post below it in Markdown. When you push the file to GitHub, the site rebuilds and the post appears on the blog page.

### What you can use

You can write **bold** and _italic_ text, [links](https://cendekia-airlangga.github.io), lists, and quotes:

> Interpretability is the study of what a model has learned, not only what it outputs.

Code blocks are highlighted:

```python
import torch

# mean activation of one attention head over a batch
head_mean = attn[:, layer, head].mean(dim=0)
```

And math is rendered with MathJax, for example the logit lens projection $$\hat{y}_\ell = W_U \, \mathrm{LN}(h_\ell)$$, or as a display equation:

$$
\mathrm{Attention}(Q, K, V) = \mathrm{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right) V
$$
