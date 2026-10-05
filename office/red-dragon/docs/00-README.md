# Red Dragon — Scalable HTML Theme Blueprint

## Project

**Project name:** Red Dragon  
**Goal:** Build a production-ready, scalable, responsive e-commerce homepage/theme from the supplied desktop reference screenshot.

### Required technology

- HTML5
- Vanilla CSS
- Vanilla JavaScript
- jQuery
- Poppins font
- No React
- No Vue
- No Angular
- No Tailwind
- No Bootstrap
- No component framework

jQuery may be used for DOM interactions, sliders/carousels, accordion behavior, and event delegation. Do not use jQuery where native JavaScript is simpler.

## Primary design reference

The supplied screenshot is the visual source for the homepage. It is a **design reference**, not a requirement to copy the screenshot literally at every pixel.

The implementation must preserve the visual hierarchy, spacing rhythm, dark/light section contrast, imagery, card proportions, red/green brand accents, and premium seed/gardening e-commerce feel.

## Quality target

The final implementation must feel like a real production theme rather than a screenshot recreation.

It must be:

- semantic
- accessible
- responsive
- maintainable
- reusable
- themeable
- data-ready
- SEO-friendly
- performant
- easy for another developer or AI editor to extend

## Source-of-truth documents

Read these documents before changing the code:

1. `01-DESIGN-SOURCE-OF-TRUTH.md`
2. `02-HTML-ARCHITECTURE.md`
3. `03-CSS-THEMING-SYSTEM.md`
4. `04-JS-JQUERY-INTERACTIONS.md`
5. `05-RESPONSIVE-SPEC.md`
6. `06-ACCESSIBILITY-SEO-PERFORMANCE.md`
7. `07-AI-BUILD-PROMPT.md`
8. `08-HTML-WORK-CHECKLIST.md`

When a conflict exists:

**Design source of truth → architecture → theming → responsive behavior → implementation detail.**

## Suggested production file structure

```text
red-dragon/
├── index.html
├── pages/
│   ├── category.html
│   ├── product.html
│   ├── cart.html
│   └── checkout.html
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── css/
│   ├── theme.css
│   ├── reset.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── utilities.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── navigation.js
│   ├── carousel.js
│   ├── product-card.js
│   ├── accordion.js
│   └── newsletter.js
└── docs/
    └── *.md
```

## Important implementation principle

Do not create a giant `style.css` or a giant `app.js`.

Keep global concerns, layout, components, theme tokens, and page-specific behavior separated so that the theme can later be integrated into PHP, WordPress, Laravel, Node, or another backend without rewriting the visual system.
