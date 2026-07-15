---
title: Naya Jawab Kaise Add Karein
---

<section class="page-hero">
  <div class="container narrow">
    <span class="eyebrow">Simple Workflow</span>
    <h1>Naya sawal sirf ek Markdown file se add karein</h1>
    <p class="lead">HTML aur CSS dobara likhne ki zaroorat nahi. Template copy karein, content change karein aur GitHub par push kar dein.</p>
  </div>
</section>

<section class="container narrow guide prose">

## 1. Image folder mein rakhein

Misal:

```text
assets/images/question-3/reference.jpg
```

## 2. Nayi Markdown file banayein

```text
_answers/03-new-question.md
```

## 3. Ye template copy karein

```markdown
---
layout: answer
title: "Aap ka sawal yahan"
number: 3
category: "Aqeedah"
summary: "Ek line ka mukhtasar khulasa"
featured_image: "/assets/images/question-3/reference.jpg"
---

## Mukhtasar Jawab

Yahan seedha jawab likhein.

## Ahm Points

1. Pehla point
2. Doosra point
3. Teesra point

## Daleel

![Reference image](/assets/images/question-3/reference.jpg)

Image ka context yahan likhein.

## Natija

Final conclusion yahan likhein.
```

## 4. GitHub par push karein

GitHub Pages automatically site rebuild kar dega aur naya sawal home page par aa jayega.

> Sirf image folder mein rakhne se page automatic nahi banta, kyun ke website ko title, order aur explanation chahiye hota hai. Chhoti Markdown file zaroori hai.

</section>
