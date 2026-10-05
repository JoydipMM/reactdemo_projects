# Red Dragon — JavaScript and jQuery Interaction Specification

## 1. Principles

JavaScript should manage behavior, not presentation.

CSS owns:

- layout
- color
- spacing
- transitions
- visibility classes

JavaScript owns:

- state
- event handling
- dynamic content
- accessibility state
- filtering/search UI
- carousel position

## 2. Entry point

Use one application entry:

```text
js/app.js
```

Load feature modules where practical:

```text
navigation.js
carousel.js
accordion.js
product-card.js
newsletter.js
```

## 3. DOM-ready

Use one predictable bootstrap:

```js
$(function () {
  initNavigation();
  initCarousels();
  initAccordions();
  initNewsletter();
});
```

Avoid many scattered `$(document).ready()` blocks.

## 4. Mobile navigation

Requirements:

- open/close menu
- toggle submenu
- `aria-expanded`
- Escape to close
- outside click where appropriate
- body scroll lock
- focus restoration
- no duplicate event handlers

Use event delegation for dynamic elements.

Example pattern:

```js
$(document).on('click', '[data-menu-toggle]', function () {
  const isOpen = $(this).attr('aria-expanded') === 'true';

  $(this).attr('aria-expanded', String(!isOpen));
  $('body').toggleClass('rd-menu-open', !isOpen);
});
```

## 5. Carousels

Carousels needed for:

- Shop by Category
- potentially product rails on small screens
- any content row that intentionally overflows horizontally

Requirements:

- touch/swipe support
- mouse/trackpad friendly
- keyboard accessible controls
- disabled previous/next state
- no infinite loop unless explicitly required
- no horizontal page overflow
- responsive item sizing

Do not implement a carousel when a normal responsive grid is the better experience.

A lightweight vanilla/jQuery implementation is acceptable. A third-party plugin is unnecessary unless specifically approved later.

## 6. Footer accordions

Only activate accordion behavior below the mobile breakpoint.

Requirements:

- one open/close state per group
- `aria-expanded`
- smooth transition
- keyboard support
- preserve desktop expanded state

## 7. Search

Search UI should:

- submit with Enter
- submit with the button
- preserve the query
- optionally support live suggestion later without changing the HTML contract

Do not require autocomplete functionality for the first HTML/CSS milestone.

## 8. Product interactions

Prepare hooks for future:

- Add to cart
- Quick view
- Wishlist
- compare
- quantity changes

For the initial homepage, visual/product-card implementation is the priority. Keep interaction hooks ready without pretending that backend functionality exists.

## 9. Sticky header

A sticky header may be implemented after the core page is correct.

Avoid aggressive shrinking/hiding that makes navigation difficult.

## 10. Loading and state classes

Use predictable states:

```text
is-active
is-open
is-loading
is-disabled
is-hidden
is-sticky
```

Do not use random state class names across modules.

## 11. Error handling

Do not allow JavaScript errors to break the entire page.

Feature initialization should safely exit when an optional component is not present.

Example:

```js
function initAccordions() {
  const $items = $('[data-accordion]');
  if (!$items.length) return;

  // ...
}
```

## 12. No inline event attributes

Never write:

```html
<button onclick="openMenu()">...</button>
```

Use delegated or bound event handlers.

## 13. External dependencies

Keep dependencies minimal.

Required:

- jQuery

Avoid adding a large UI library just to implement:

- menu
- accordion
- tabs
- basic carousel
- modal

The theme must remain lightweight.
