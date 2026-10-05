# Red Dragon — HTML Architecture

## 1. Semantic-first rule

Use semantic HTML5 first.

Preferred elements:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- `<figure>`
- `<form>`
- `<button>`
- `<ul>` / `<ol>`
- `<h1>`–`<h6>`

Do not use `<div>` for everything.

## 2. Page skeleton

```html
<body>
  <a class="rd-skip-link" href="#main-content">Skip to content</a>

  <header class="rd-site-header">
    <div class="rd-utility-bar">...</div>
    <div class="rd-header-main">...</div>
    <nav class="rd-primary-nav" aria-label="Primary navigation">...</nav>
  </header>

  <main id="main-content">
    <section class="rd-hero">...</section>
    <section class="rd-trust-strip">...</section>
    <section class="rd-category-section">...</section>
    <section class="rd-collections-section">...</section>
    <section class="rd-product-section">...</section>
    <section class="rd-seasonal-section">...</section>
    <section class="rd-chilli-promo">...</section>
    <section class="rd-product-section">...</section>
    <section class="rd-social-proof">...</section>
  </main>

  <footer class="rd-site-footer">...</footer>
</body>
```

## 3. Heading hierarchy

Homepage:

- exactly one `<h1>` in the hero
- each major content section gets an `<h2>`
- product names use `<h3>` when they are standalone cards
- avoid skipping heading levels solely for visual appearance

Example:

```html
<h1>Grow Something <span>Extraordinary</span></h1>
<h2>Shop by Category</h2>
<h2>Explore Our Collections</h2>
<h2>Best Sellers</h2>
<h2>New Arrivals</h2>
```

CSS should control visual sizing. Do not use incorrect heading levels to achieve font sizes.

## 4. Navigation HTML

Use a real `<nav>`.

```html
<nav class="rd-primary-nav" aria-label="Primary navigation">
  <ul class="rd-nav-list">
    <li class="rd-nav-item">
      <a href="#">Chilli Seeds</a>
    </li>

    <li class="rd-nav-item rd-nav-item--has-children">
      <button
        class="rd-nav-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="rd-submenu-vegetable-seeds">
        Vegetable Seeds
      </button>

      <div id="rd-submenu-vegetable-seeds" class="rd-submenu">
        ...
      </div>
    </li>
  </ul>
</nav>
```

Do not make clickable navigation items rely on `<div onclick="">`.

## 5. Search form

Use a form and label it accessibly.

```html
<form class="rd-search" role="search" action="/search" method="get">
  <label class="sr-only" for="site-search">Search products</label>

  <input
    id="site-search"
    name="q"
    type="search"
    autocomplete="off"
    placeholder="Search chilli seeds, vegetables, herbs, flowers & more…">

  <button type="submit" aria-label="Search">
    <span aria-hidden="true">...</span>
  </button>
</form>
```

## 6. Buttons vs links

Use:

- `<a>` for navigation
- `<button>` for actions that modify UI/state
- `<input type="submit">` or `<button type="submit">` for forms

Examples:

Correct:
```html
<a href="/vegetable-seeds">Shop Vegetable Seeds</a>
<button type="button" data-menu-toggle>Open menu</button>
```

Incorrect:
```html
<div onclick="openMenu()">Open menu</div>
```

## 7. Reusable data attributes

Use stable `data-*` attributes for JavaScript hooks.

Examples:

```html
<button type="button" data-menu-toggle></button>
<button type="button" data-accordion-trigger></button>
<div data-accordion-panel></div>
<div data-carousel></div>
```

Do not make JavaScript depend on fragile selectors such as:

```js
$('.header > div:nth-child(3) > span')
```

## 8. Product data readiness

The HTML should be compatible with server-generated or JSON-generated product data.

Recommended product properties:

```js
{
  id: 101,
  title: "Tomato Seeds",
  category: "Vegetable Seeds",
  variety: "Tumip Tops",
  price: "£2.49",
  currency: "GBP",
  rating: 4.8,
  reviewCount: 124,
  badge: "Best Seller",
  image: "/assets/images/products/tomato.jpg",
  href: "/product/tomato-seeds"
}
```

Do not duplicate large blocks of markup when only product data changes.

## 9. Accessibility structure

Every interactive module must have:

- visible or screen-reader-accessible naming
- keyboard interaction
- focus visibility
- appropriate ARIA state only where native HTML is insufficient

Avoid ARIA overuse.

## 10. Mobile navigation

Implement a proper button-triggered navigation drawer.

Required state:

```text
closed → open
```

When open:

- update `aria-expanded="true"`
- show the drawer
- prevent background scroll where appropriate
- allow Escape to close
- restore focus to the trigger
- ensure menu content remains keyboard reachable

## 11. Footer accordion

Desktop:

- columns open
- no accordion interaction required

Mobile:

- each footer heading behaves like a button
- `aria-expanded` reflects state
- linked list is hidden/shown
- use smooth CSS animation

Do not animate `display: none` directly. Animate a height/max-height or grid-based wrapper.
