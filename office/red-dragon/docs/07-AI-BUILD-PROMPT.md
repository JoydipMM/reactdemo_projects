# Red Dragon — Master AI Build Prompt

Copy the prompt below into any AI coding editor or website-building AI.

---

## MASTER PROMPT

You are a senior frontend architect and UI engineer.

Build a production-quality responsive e-commerce website/theme called **Red Dragon** from the supplied visual reference.

### Technology constraints

Use only:

- HTML5
- Vanilla CSS
- Vanilla JavaScript
- jQuery
- Poppins font

Do NOT use:

- React
- Vue
- Angular
- Next.js
- Tailwind CSS
- Bootstrap
- Material UI
- component libraries
- utility CSS frameworks

The output must be real, maintainable source code rather than a screenshot, canvas drawing, or fake static image recreation.

### Core requirement

Create a **scalable, reusable, themeable HTML template**.

The theme must be easy to integrate later into a CMS or backend such as WordPress, PHP, Laravel, Node.js or another server-rendered system.

Do not build a one-off page with duplicated markup.

### Source-of-truth instruction

Before coding, read and follow:

- `01-DESIGN-SOURCE-OF-TRUTH.md`
- `02-HTML-ARCHITECTURE.md`
- `03-CSS-THEMING-SYSTEM.md`
- `04-JS-JQUERY-INTERACTIONS.md`
- `05-RESPONSIVE-SPEC.md`
- `06-ACCESSIBILITY-SEO-PERFORMANCE.md`
- `08-HTML-WORK-CHECKLIST.md`

The screenshot is the visual reference. The markdown files define the engineering rules.

### Design interpretation

Reproduce the supplied Red Dragon visual direction:

- premium gardening/seed store
- dark photographic hero
- warm cream/off-white sections
- red primary CTA
- natural green secondary accent
- Poppins typography
- compact uppercase labels
- subtle borders and shadows
- editorial photographic cards
- premium product-grid presentation
- strong section headings with decorative horizontal lines

Do not turn this into a generic Shopify-style template.

### Homepage section order

Implement the homepage in this order:

1. Utility/announcement bar
2. Main header
3. Primary navigation
4. Hero
5. Trust/value strip
6. Shop by Category
7. Explore Our Collections
8. Best Sellers
9. Seasonal "Sow in September" editorial section
10. "Home of 450+ Chilli Varieties" promotional section
11. New Arrivals
12. Why Choose / Customer Reviews / Newsletter
13. Service benefits bar
14. Footer

### Semantic HTML

Use semantic HTML5.

Use:

- header
- nav
- main
- section
- article
- footer
- form
- button
- lists

Use exactly one homepage H1.

Do not use div/span elements as interactive controls.

### Class system

Prefix all project classes with `rd-`.

Use a predictable BEM-style approach:

- `rd-product-card`
- `rd-product-card__media`
- `rd-product-card__body`
- `rd-product-card--featured`

Use `data-*` attributes for JS hooks.

Example:

```html
<button
  type="button"
  data-menu-toggle
  aria-expanded="false"
  aria-controls="rd-mobile-nav">
  Menu
</button>
```

### CSS architecture

Create:

```text
css/
  theme.css
  reset.css
  base.css
  layout.css
  components.css
  utilities.css
  responsive.css
```

Put all brand values into CSS custom properties.

Example:

```css
:root {
  --color-brand-red: #db1f2f;
  --color-brand-green: #2d8a4a;
  --color-black: #090b09;
  --color-surface: #f6f1e8;
  --color-white: #fff;
}
```

Never scatter brand colors throughout the CSS.

### Responsive requirements

The website must work from 320px through 1920px.

Test at:

320, 360, 390, 430, 576, 768, 834, 1024, 1280, 1440, 1536 and 1920px.

Use CSS Grid and Flexbox.

Use `clamp()` for major responsive typography.

Avoid fixed-width hacks and absolute positioning for entire page layouts.

### Header behavior

Desktop:

- utility bar
- logo
- search field
- account
- wishlist
- basket/cart
- horizontal nav

Mobile:

- compact header
- responsive search
- menu trigger
- accessible off-canvas/drawer navigation

Mobile navigation must:

- update `aria-expanded`
- support Escape
- support keyboard navigation
- prevent accidental body scrolling while open
- restore focus when closed

### Hero

Create a reusable hero component with:

- H1
- supporting text
- primary CTA
- secondary CTA
- responsive imagery
- right-side chilli promotional content

Do not put everything into one CSS background-image rule if that makes responsive image control difficult.

### Product system

Create one reusable product-card component used by:

- Best Sellers
- New Arrivals
- future category pages

Product properties should be data-driven.

Support:

- badge
- title
- variety metadata
- rating
- review count
- price
- image
- link

### Carousel behavior

Category rail should support touch/swipe on mobile and controlled navigation on desktop where useful.

Do not use a carousel merely because the screenshot shows horizontal content. Prefer normal responsive layout when it provides a better UX.

### Footer

Desktop:

- multi-column links
- brand area
- social links
- payment methods

Mobile:

- collapsible footer groups

Footer accordion state must use accessible ARIA attributes.

### Forms

Newsletter:

- semantic form
- labeled email field
- validation-ready markup
- submit state hook
- accessible error/success placeholders

Do not implement fake API success. Use a clear placeholder/event hook.

### Images

Use real `<img>` elements for content imagery.

Use:

- lazy loading for below-the-fold content
- `width` and `height` attributes where practical
- `aspect-ratio`
- object-fit
- responsive `srcset`/`sizes` when assets permit

Do not stretch or distort product imagery.

### Accessibility

Ensure:

- keyboard usability
- visible focus states
- logical heading hierarchy
- meaningful alt attributes
- labels for forms
- sufficient color contrast
- reduced-motion support
- accessible carousel controls
- accessible mobile navigation

### JavaScript

Use a single bootstrapping entry point:

```text
js/app.js
```

Feature modules may include:

```text
navigation.js
carousel.js
accordion.js
product-card.js
newsletter.js
```

jQuery should be used for interaction orchestration, not as a substitute for semantic HTML/CSS.

No inline `onclick`.

### Code quality

Do not:

- duplicate components unnecessarily
- create huge files
- use random class naming
- overuse absolute positioning
- use arbitrary pixel values everywhere
- use `!important` as a normal layout strategy
- hide overflow to cover broken layouts
- use fragile nth-child selectors for JS
- inject untrusted content with `.html()`

### Build process

Work in these phases:

#### Phase 1 — Foundation
Create:
- folder structure
- theme variables
- reset/base
- container
- typography
- buttons
- utility classes

#### Phase 2 — Header
Create:
- utility bar
- main header
- search
- account/wishlist/cart
- desktop navigation
- mobile drawer

#### Phase 3 — Homepage
Implement all sections in the exact source-of-truth order.

#### Phase 4 — Responsive
Test all target widths.
Fix:
- overflow
- wrapping
- image cropping
- tap targets
- spacing
- navigation
- footer

#### Phase 5 — Interaction
Implement:
- menu
- submenus
- category carousel
- footer accordion
- newsletter validation hooks

#### Phase 6 — Quality
Audit:
- semantic HTML
- accessibility
- SEO
- performance
- unused CSS
- console errors
- invalid HTML

### Output expectations

Return complete working files, not pseudo-code.

When generating or editing code:

1. Inspect existing files before changing them.
2. Preserve working functionality.
3. Change only what is necessary.
4. Follow the markdown source-of-truth rules.
5. After each major section, verify structure and responsive behavior.
6. Do not leave console errors.
7. Keep the implementation reusable for future pages.

### Final acceptance

The website is complete only when:

- desktop visually follows the reference
- mobile is intentionally redesigned rather than simply shrunk
- no horizontal overflow exists
- navigation is usable with keyboard
- product cards are reusable
- CSS variables control the visual theme
- JS hooks are stable
- footer works on mobile
- markup is semantic
- page is ready for backend/CMS integration

---
