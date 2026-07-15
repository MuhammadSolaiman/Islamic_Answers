# Islamic Sawalat aur Jawabat

GitHub Pages ready Jekyll static website.

## Local run

1. Ruby aur Bundler install karein.
2. Project folder mein:

```bash
bundle install
bundle exec jekyll serve
```

3. Browser: `http://localhost:4000`

## GitHub Pages deploy

1. Is folder ko GitHub repository mein push karein.
2. Repository Settings > Pages kholen.
3. Source mein **Deploy from a branch** select karein.
4. Branch `main` aur folder `/ (root)` select karein.
5. Save karein.

## Naya sawal add karna

- `_answers/` mein existing `.md` file copy karein.
- `title`, `number`, `category`, `summary` aur content change karein.
- Image `assets/images/question-X/` mein rakhein.
- GitHub par push karein.

## Apni images replace karna

Sample SVG ko apni JPG/PNG/WebP image se replace kar sakte hain. Markdown front matter mein correct path dena na bhoolain.
