# Red Dragon — Accessibility, SEO and Performance

## Accessibility

### Keyboard

All of these must work with keyboard:

- nav links
- menu toggle
- submenu toggle
- search
- category carousel controls
- product links
- CTA buttons
- newsletter form
- footer accordions

### Focus

Never remove browser focus without replacement.

Use a visible style:

```css
:focus-visible {
  outline: 3px solid var(--color-brand-red);
  outline-offset: 3px;
}
```

### Images

Meaningful images need useful `alt`.

Decorative images should use:

```html
alt=""
```

### Forms

Every input must have a label.

Placeholder text is not a substitute for a label.

### Color

Do not rely on color alone for:

- rating information
- stock state
- badges
- validation messages

### Reduced motion

Respect `prefers-reduced-motion`.

## SEO

Use:

- one `<h1>`
- logical heading hierarchy
- descriptive `<title>`
- meta description
- canonical URL placeholder
- semantic links
- descriptive image alt text
- meaningful internal links
- structured content hierarchy

Suggested homepage title:

```text
Red Dragon Seeds | Premium Vegetable, Chilli, Herb & Flower Seeds
```

Suggested description:

```text
Discover premium vegetable, chilli, herb and flower seeds from Red Dragon. Explore 450+ chilli varieties, best sellers, new arrivals and growing guides.
```

These are draft values and can be changed later.

## Performance

### Images

- compress images
- use modern formats such as WebP/AVIF when supported by the deployment pipeline
- serve appropriate sizes
- lazy-load below-the-fold images
- prioritize the hero image

### CSS

- keep selectors shallow
- avoid excessive CSS duplication
- remove unused styles before production

### JavaScript

- defer scripts
- avoid render-blocking scripts
- initialize only components actually present
- avoid repeated DOM queries where practical

### Layout stability

Reserve media dimensions using:

- width/height attributes
- aspect-ratio
- fixed media containers

Avoid layout jumps when images load.

### Fonts

Use only the weights actually required.

Prefer local font hosting when the project has a controlled asset pipeline.

## Security-minded frontend behavior

Never inject unsanitized user-provided HTML using `.html()`.

Prefer `.text()` when inserting text.

Treat newsletter/search/product data as untrusted when it comes from APIs.
