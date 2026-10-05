# Red Dragon — Design Source of Truth

## 1. Brand direction

Red Dragon should communicate:

- premium seed quality
- gardening expertise
- trust
- natural growth
- British/UK garden retail character
- strong product discovery
- editorial-quality photography
- approachable but premium commerce

The visual language combines:

- near-black photographic hero and footer areas
- warm off-white content backgrounds
- strong red calls to action
- natural green accents
- white cards with subtle shadows
- high-quality food/seed/garden photography
- uppercase, compact labels
- generous section spacing

## 2. Typography

### Primary font

Use **Poppins** throughout the UI.

Recommended hierarchy:

- body: 14–16px
- small metadata: 10–12px
- section eyebrow/label: 10–12px, uppercase
- section heading: 22–32px depending on viewport
- hero heading: 38–64px depending on viewport
- product title: 13–16px
- price: 18–24px, bold

Use font weights intentionally:

- 400: body
- 500: labels
- 600: buttons/product titles
- 700: major headings
- 800: hero emphasis

Do not use many font sizes or arbitrary weights. Define typography tokens centrally.

## 3. Approximate color system

These are working design tokens inferred from the supplied screenshot. Keep them editable rather than scattering literal values through component CSS.

```css
:root {
  --color-brand-red: #db1f2f;
  --color-brand-red-dark: #b91827;
  --color-brand-green: #2d8a4a;
  --color-green-dark: #173a1d;
  --color-ink: #111411;
  --color-black: #090b09;
  --color-white: #ffffff;
  --color-surface: #f6f1e8;
  --color-surface-2: #eee9df;
  --color-border: #ded8ce;
  --color-muted: #77766f;
  --color-rating: #e5a514;
}
```

Do not treat these hex values as immutable. The important rule is centralized theming.

## 4. Homepage section order

The homepage should be structured in this order:

### A. Utility / announcement bar

Dark, compact strip at the very top.

Reference content includes:

- 450+ varieties
- non-GMO seeds
- family owned & run
- fast UK dispatch
- rating/review indicator

Requirements:

- horizontally organized on desktop
- collapses gracefully on tablet/mobile
- no text wrapping that creates excessive height
- hide lower-priority messages first on small screens if necessary

### B. Main header

Contains:

- Red Dragon logo
- large search input
- search button
- My Account
- Wishlist
- Basket/cart with value
- mobile menu trigger on smaller screens

Desktop should feel compact and balanced.

Mobile should switch to:

- logo
- search/icon area
- menu button
- account/cart controls as space allows

### C. Primary navigation

Categories shown include concepts such as:

- Chilli Seeds
- Vegetable Seeds
- Herb Seeds
- Flower Seeds
- Collections & Tins
- New Arrivals
- Growing Guides

Desktop:

- horizontal navigation
- dropdown-ready structure

Mobile:

- drawer/off-canvas menu
- expandable submenu items

### D. Hero

This is the strongest visual section.

Reference characteristics:

- dark photographic background
- vegetables / produce photography
- strong left-aligned headline
- red emphasis on the second line
- supporting text
- two CTA buttons
- right-side chilli product/content block
- image-driven visual composition

Content hierarchy:

```text
GROW SOMETHING
EXTRAORDINARY

supporting copy

[ SHOP VEGETABLE SEEDS ] [ EXPLORE CHILLI SEEDS ]
```

Hero must not become unreadable on mobile.

Use separate content and image layers so background art can change without changing HTML structure.

### E. Trust / feature strip

Six compact value propositions.

Examples:

- Non-GMO
- Family Owned & Operated
- Fresh Stock
- Fast UK Dispatch
- Germination Tested
- Gardeners' Choice

Use consistent icon + title + supporting text pattern.

### F. Shop by Category

Light background section.

Reference behavior:

- section title centered
- thin decorative line extending left and right
- circular category images
- category label underneath
- horizontal carousel behavior on smaller screens

Category cards should be reusable.

### G. Explore Our Collections

Five visual collection tiles.

Reference content themes:

- Vegetable Seeds
- Herb Seeds
- Flower Seeds
- Chilli Seeds
- Growing Guides

Each tile has:

- image
- dark overlay
- title
- short description
- button

The image should remain visible underneath the overlay.

### H. Best Sellers

Product-grid section.

Reference card pattern:

- product image
- optional badge
- product title
- short variety/type metadata
- rating
- review count
- price

Desktop reference shows six compact cards in a row.

Do not hard-code six as the only valid count. The layout should support 4, 5, 6, or responsive wrapping depending on the page.

### I. Seasonal editorial block

Reference message:

**SOW IN SEPTEMBER**

A large editorial card followed by seasonal crop tiles such as:

- Leafy Greens
- Radishes
- Salad Leaves
- Winter Veg

This should be implemented as a reusable editorial/collection component.

### J. Chilli varieties promotional banner

Dark promotional section.

Core message:

**HOME OF 450+ CHILLI VARIETIES**

Contains:

- supporting paragraph
- CTA
- circular 450+ badge
- supporting proof points

Example proof-point themes:

- Mild to Superhot
- Expertly Sourced
- Heat Levels Explained
- Fresh UK Stock

### K. New Arrivals

Same reusable product-card system as Best Sellers.

Different badge state can indicate `NEW` or `BEST SELLER`.

### L. Social proof / newsletter

Three-column desktop composition:

1. Why choose Red Dragon?
2. Customer reviews/testimonials
3. Newsletter signup

Mobile becomes stacked cards.

Newsletter card includes:

- heading
- supporting text
- email field
- submit button
- privacy/marketing note

### M. Benefits bar

Dark horizontal strip with service promises:

- 4.9/5 rating
- premium quality
- UK based
- gardeners' choice
- secure checkout

### N. Footer

Large dark footer with:

- brand/logo
- short company statement
- social icons
- Shop links
- Help & Info links
- About Us links
- secure payment marks
- copyright
- delivery/dispatched messaging

On mobile, footer link groups should behave as accordions.

## 5. Section design grammar

Every major section should follow a repeatable structure:

```html
<section class="rd-section rd-section--light">
  <div class="rd-container">
    <header class="rd-section-heading">
      ...
    </header>

    <div class="rd-section__content">
      ...
    </div>
  </div>
</section>
```

Decorative lines should be CSS, not images.

## 6. Product card grammar

Use one product-card HTML pattern for the entire theme.

```html
<article class="rd-product-card">
  <a class="rd-product-card__media" href="#">
    <span class="rd-badge rd-badge--new">New</span>
    <img ...>
  </a>

  <div class="rd-product-card__body">
    <h3 class="rd-product-card__title">
      <a href="#">Product Name</a>
    </h3>
    <p class="rd-product-card__meta">Variety information</p>

    <div class="rd-rating" aria-label="Rated 4.8 out of 5">
      ...
    </div>

    <p class="rd-product-card__price">£2.49</p>
  </div>
</article>
```

Do not create separate, incompatible HTML structures for every product section.

## 7. Image rules

Use image assets intentionally.

- Use `object-fit: cover` for editorial tiles.
- Use `object-fit: contain` where product packaging needs to remain fully visible.
- Give every meaningful image useful `alt` text.
- Decorative background images should not duplicate content already presented in text.
- Use responsive image sources where appropriate.
- Lazy-load below-the-fold imagery.
- Reserve image dimensions to reduce layout shift.

## 8. Spacing

Use a spacing scale rather than arbitrary values.

Recommended base scale:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

Use a smaller vertical rhythm on mobile.

## 9. Container

Recommended:

```css
.rd-container {
  width: min(100% - 32px, 1440px);
  margin-inline: auto;
}
```

On very small screens, reduce side padding carefully.

## 10. Visual acceptance criteria

The page should visually match the reference in:

- section order
- overall proportions
- dark/light rhythm
- headline hierarchy
- red/green brand accents
- card density
- image prominence
- button treatment
- spacing consistency
- footer composition

Do not make the page look like a generic e-commerce starter template.
