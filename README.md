# Somnath Jana: academic website

A one-page academic website in plain HTML, CSS and JavaScript, hosted free on GitHub Pages.

## Files

```
index.html            All the content: Home, Research, Education, Teaching, Contact
404.html              "Page not found" page
css/style.css         Colours, fonts and layout (dark by default, light mode switch)
js/main.js            Menu highlighting and light/dark switch (no need to edit)
assets/cv/cv.pdf      Placeholder CV: replace with your own
assets/images/        Photo (profile.svg placeholder) and tab icon
robots.txt, sitemap.xml   Help search engines find the site
```

## Editing

Unzip the folder first, then right-click `index.html` → Open with → Notepad.
Double-click `index.html` to preview it in your browser.

- New paper: copy one `<li class="card paper"> … </li>` block in Research and edit it.
- New course: copy one `<li class="card row"> … </li>` block in Teaching and put it at the top.
- Photo: put `profile.jpg` in `assets/images/` and change `profile.svg` to `profile.jpg` in index.html.
- CV: put your CV in `assets/cv/` as `cv.pdf`, then follow the note in the hidden CV section of index.html.

## Publishing

Repository name: `somnathjanamath.github.io` (public). Upload everything inside this folder,
then Settings → Pages → Deploy from a branch → main → / (root) → Save.
The site appears at https://somnathjanamath.github.io/

## Updating the CV

The CV section shows pictures of the CV pages. When you change your CV, replace three files in `assets/cv/`:
`cv.pdf`, `cv-page-1.png` and `cv-page-2.png` (pictures of page 1 and page 2), or send the new PDF to Claude to make them.
