# Red Dragon — Responsive Specification

## 1. Goal

The site must adapt naturally from small phones to large desktop monitors.

Target testing widths:

- 320px
- 360px
- 390px
- 430px
- 576px
- 768px
- 834px
- 1024px
- 1280px
- 1440px
- 1536px
- 1920px

These are test points, not hard-coded layout widths.

## 2. Mobile-first behavior

### Header

Mobile:

- compact top utility content
- logo remains visible
- search becomes full-width row or icon-triggered field
- main nav becomes drawer
- account/wishlist/cart may use icon-only presentation

Desktop:

- full search field
- account/wishlist/cart labels
- horizontal nav

### Hero

Mobile:

- stack or carefully crop image
- text remains readable
- CTA buttons stack or wrap
- right-side promo becomes below-hero content or simplified image block
- no text over visually noisy areas without an overlay

Tablet:

- reduce hero height
- rebalance content/image proportions

Desktop:

- two- or three-zone composition matching reference

### Trust strip

Mobile:

- two-column grid or horizontal scroll
- each item stays compact

Desktop:

- single horizontal row

### Category section

Mobile:

- horizontal scroll/carousel
- show partial next item where visually useful

Desktop:

- horizontal category rail

### Collection section

Mobile:

- one column
- then two columns on wider small screens if cards remain legible

Desktop:

- five-column composition

### Product sections

Mobile:

- 2-column grid where card text remains readable
- avoid cards becoming too narrow
- image aspect ratio stays consistent

Tablet:

- 3-column or 4-column

Desktop:

- 4–6 columns depending on available width

### Seasonal editorial section

Mobile:

- editorial intro first
- tiles stacked or horizontal scroll
- text must not be hidden by images

### Chilli promo banner

Mobile:

- vertical stack
- badge below main content
- proof points become compact list/grid

Desktop:

- horizontal hero-style layout

### Social proof

Mobile:

- stacked cards
- newsletter full width

Desktop:

- three-column layout

### Footer

Mobile:

- accordion link groups
- payment icons wrap
- legal/copyright wraps naturally

Desktop:

- multi-column footer

## 3. Responsive typography

Avoid large jumps.

Use `clamp()` for major headings:

```css
font-size: clamp(2rem, 4vw, 4rem);
```

Do not use viewport units alone.

## 4. Touch targets

Interactive controls should generally provide a touch target of at least approximately 44×44 CSS pixels.

## 5. Horizontal overflow

The page must not produce unintended horizontal scrolling.

Use:

```css
html,
body {
  overflow-x: clip;
}
```

only after validating that the layout has no real content overflow that should remain accessible.

Do not use overflow clipping to hide broken layouts.

## 6. Orientation

Landscape phone layouts must be tested, especially:

- hero
- navigation drawer
- category carousel
- product grid

## 7. Images

Use responsive image sizing so mobile devices do not download unnecessarily large desktop assets.

Prefer:

```html
<img
  src="/assets/images/hero/hero-768.jpg"
  srcset="
    /assets/images/hero/hero-768.jpg 768w,
    /assets/images/hero/hero-1280.jpg 1280w,
    /assets/images/hero/hero-1920.jpg 1920w"
  sizes="100vw"
  alt="Fresh garden vegetables">
```

## 8. Responsive acceptance test

At no viewport may:

- important text be cropped
- buttons overlap
- cards exceed their containers
- navigation become inaccessible
- footer content collide
- product prices wrap awkwardly
- images distort
- horizontal page scrolling appear accidentally
