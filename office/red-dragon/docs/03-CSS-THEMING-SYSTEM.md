# Red Dragon — CSS and Theming System

## 1. Architecture

Split CSS by responsibility:

```text
css/
├── theme.css
├── reset.css
├── base.css
├── layout.css
├── components.css
├── utilities.css
└── responsive.css
```

### `theme.css`

Contains:

- colors
- typography
- spacing
- radii
- shadows
- transitions
- z-index scale
- container width

### `reset.css`

Normalize browser inconsistencies.

### `base.css`

Contains:

- body
- links
- buttons
- forms
- headings
- images

### `layout.css`

Contains:

- containers
- sections
- grids
- site header/footer layout
- reusable wrappers

### `components.css`

Contains:

- product cards
- category cards
- collection cards
- buttons
- badges
- rating
- hero
- search
- trust items
- newsletter card

### `utilities.css`

Small helpers only.

### `responsive.css`

Breakpoint-specific changes.

Do not create a separate stylesheet for every tiny component.

## 2. Theme tokens

Use CSS custom properties.

```css
:root {
  --font-family-base: "Poppins", sans-serif;

  --color-brand-red: #db1f2f;
  --color-brand-red-dark: #b91827;
  --color-brand-green: #2d8a4a;
  --color-green-dark: #173a1d;

  --color-black: #090b09;
  --color-ink: #151815;
  --color-white: #ffffff;

  --color-surface: #f6f1e8;
  --color-surface-2: #eee9df;
  --color-border: #ded8ce;
  --color-muted: #77766f;

  --shadow-card: 0 6px 22px rgb(0 0 0 / 8%);
  --shadow-card-hover: 0 10px 30px rgb(0 0 0 / 12%);

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-pill: 999px;

  --container-max: 1440px;

  --transition-fast: 160ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}
```

## 3. Naming convention

Use the project prefix `rd-`.

Recommended BEM-style structure:

```text
rd-product-card
rd-product-card__media
rd-product-card__body
rd-product-card__title
rd-product-card--featured
```

For generic reusable components:

```text
rd-button
rd-button--primary
rd-button--outline

rd-section
rd-section__heading
rd-section__content
```

Avoid generic class names such as:

```text
.card
.title
.wrapper
.box
.left
.right
```

## 4. Responsive strategy

Use a desktop-first or mobile-first system consistently. Prefer mobile-first for long-term scalability.

Recommended breakpoints:

```css
@media (min-width: 576px) { ... }
@media (min-width: 768px) { ... }
@media (min-width: 1024px) { ... }
@media (min-width: 1280px) { ... }
@media (min-width: 1536px) { ... }
```

Do not build only for these widths. CSS should naturally interpolate between them.

## 5. Grid rules

Prefer:

```css
grid-template-columns: repeat(auto-fit, minmax(...));
```

where appropriate.

For fixed editorial layouts where the reference is intentionally controlled, use explicit desktop columns and responsive changes.

Product grid example:

```css
.rd-product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .rd-product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .rd-product-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .rd-product-grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}
```

## 6. Buttons

Primary:

- red background
- white text
- compact uppercase label
- subtle hover darkening
- visible focus state

Outline:

- transparent/dark or light border depending on context
- hover state must preserve contrast

Do not use gradients unless specifically required by the design.

## 7. Images

Use:

```css
img {
  display: block;
  max-width: 100%;
}
```

Product media should maintain consistent aspect ratio.

Example:

```css
.rd-product-card__media {
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
```

Do not rely on random image heights.

## 8. Motion

Use restrained motion:

- button hover
- card image zoom
- menu slide/fade
- accordion expand
- carousel movement

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

## 9. Theme extensibility

A second brand theme should be possible by changing variables rather than rewriting components.

Example:

```html
<body data-theme="red-dragon">
```

Future theme:

```html
<body data-theme="brand-b">
```

Component CSS should consume semantic variables, never assume brand colors in every selector.

## 10. Avoid

- `!important` except exceptional utility overrides
- giant selectors
- deep nesting
- inline styles for reusable UI
- JavaScript-generated CSS strings
- viewport-specific pixel hacks
- duplicated CSS for identical cards
- fixed desktop widths that overflow mobile
