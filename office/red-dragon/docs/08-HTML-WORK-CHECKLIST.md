# Red Dragon — HTML Work Checklist

Use this checklist as the implementation gate. Do not mark an item complete without testing it.

## A. Project foundation

- [ ] HTML5 doctype exists
- [ ] `<html lang="en">` exists
- [ ] UTF-8 charset exists
- [ ] responsive viewport meta tag exists
- [ ] title exists
- [ ] meta description exists
- [ ] CSS files load in correct order
- [ ] jQuery loads before scripts that depend on it
- [ ] JavaScript uses `defer` where appropriate
- [ ] no console errors on initial load

## B. Semantic document structure

- [ ] skip link exists
- [ ] one `<header>` for site chrome
- [ ] one primary `<nav>`
- [ ] one `<main>`
- [ ] homepage has exactly one `<h1>`
- [ ] each major visual section uses `<section>`
- [ ] repeated product items use `<article>`
- [ ] site uses a `<footer>`
- [ ] headings follow a logical hierarchy
- [ ] no unnecessary heading levels are skipped

## C. Utility bar

- [ ] utility bar exists
- [ ] promotional messages are accessible
- [ ] rating/review summary is understandable without color alone
- [ ] low-priority content can collapse/hide responsively
- [ ] no layout overflow at mobile widths

## D. Header

- [ ] Red Dragon logo has an accessible name
- [ ] logo links to homepage
- [ ] search is a `<form>`
- [ ] search input has a label
- [ ] search has a submit button
- [ ] account link exists
- [ ] wishlist link exists
- [ ] cart link exists
- [ ] cart value/badge is separate from the accessible name where needed
- [ ] mobile menu button exists
- [ ] mobile menu button uses `aria-expanded`
- [ ] mobile menu button uses `aria-controls`

## E. Navigation

- [ ] primary nav is inside `<nav>`
- [ ] navigation is represented as a list
- [ ] dropdown/accordion triggers use `<button>`
- [ ] menu links use `<a>`
- [ ] submenu IDs are unique
- [ ] keyboard access works
- [ ] Escape behavior works for mobile drawer
- [ ] focus is restored after closing mobile navigation

## F. Hero

- [ ] exactly one H1
- [ ] supporting copy is semantic paragraph text
- [ ] primary CTA is a link
- [ ] secondary CTA is a link
- [ ] hero image has correct alt text
- [ ] decorative imagery is marked decorative where appropriate
- [ ] important text is not embedded inside images
- [ ] hero remains usable at 320–430px widths
- [ ] CTA buttons have comfortable touch targets

## G. Trust strip

- [ ] trust items use a reusable pattern
- [ ] icons have accessible handling
- [ ] descriptive text exists for each benefit
- [ ] icon-only meaning is not required
- [ ] mobile layout is tested

## H. Category section

- [ ] heading is H2
- [ ] categories are links
- [ ] image and text are associated
- [ ] carousel controls are buttons
- [ ] controls have accessible labels
- [ ] disabled controls use disabled semantics where appropriate
- [ ] swipe/scroll behavior does not cause page-level horizontal overflow

## I. Collections

- [ ] five initial collection items exist
- [ ] each item has heading/title
- [ ] each item has supporting text
- [ ] each item has a link/CTA
- [ ] image overlay does not hide readable text
- [ ] cards are keyboard accessible
- [ ] structure is reusable for other collections

## J. Product cards

- [ ] a single reusable HTML pattern is used
- [ ] product image has alt text
- [ ] product title is a link
- [ ] metadata is separate from title
- [ ] rating is semantically understandable
- [ ] review count exists where supplied
- [ ] price has a clear accessible reading order
- [ ] badge is optional
- [ ] badge does not overlap essential product content
- [ ] product cards work with different title lengths
- [ ] product cards work with missing badges/reviews

## K. Seasonal editorial section

- [ ] editorial heading exists
- [ ] supporting text exists
- [ ] CTA exists
- [ ] seasonal tiles are reusable
- [ ] text remains readable over imagery
- [ ] mobile stacking/horizontal behavior works

## L. Chilli promotional banner

- [ ] promotional heading exists
- [ ] 450+ variety message is text, not image-only
- [ ] badge has accessible meaning
- [ ] proof points are structured list items
- [ ] CTA is a link
- [ ] mobile stacking works

## M. New Arrivals

- [ ] same product-card component as Best Sellers
- [ ] New badge supported
- [ ] Best Seller badge supported
- [ ] rating/review fields supported
- [ ] price formatting consistent
- [ ] responsive grid tested

## N. Reviews / newsletter

- [ ] "Why choose" benefits are list-based
- [ ] testimonials have identifiable structure
- [ ] newsletter is a semantic form
- [ ] email input has a label
- [ ] email type is `email`
- [ ] autocomplete is appropriate
- [ ] submit button exists
- [ ] success/error containers are prepared
- [ ] validation does not rely only on color

## O. Benefits strip

- [ ] all service-benefit items have text
- [ ] icons are decorative or labeled correctly
- [ ] layout wraps appropriately

## P. Footer

- [ ] footer uses `<footer>`
- [ ] company information is readable
- [ ] social links have accessible names
- [ ] link groups are lists
- [ ] each group has a heading
- [ ] mobile accordion triggers are buttons
- [ ] `aria-expanded` updates
- [ ] payment methods have meaningful alternative text
- [ ] copyright exists
- [ ] delivery statement does not collide with other content

## Q. HTML validation

- [ ] no duplicate IDs
- [ ] all `for`/`id` label relationships work
- [ ] buttons have correct `type`
- [ ] links have valid destinations/placeholders
- [ ] interactive elements are not nested incorrectly
- [ ] no invalid HTML nesting
- [ ] images have width/height or controlled aspect-ratio where practical
- [ ] no inline `onclick`
- [ ] no layout-critical content exists only in JavaScript
- [ ] no hidden text is accidentally exposed to screen readers

## R. Responsive checks

- [ ] 320px tested
- [ ] 360px tested
- [ ] 390px tested
- [ ] 430px tested
- [ ] 576px tested
- [ ] 768px tested
- [ ] 834px tested
- [ ] 1024px tested
- [ ] 1280px tested
- [ ] 1440px tested
- [ ] 1536px tested
- [ ] 1920px tested
- [ ] no unintended horizontal scrolling
- [ ] no clipped CTAs
- [ ] no overlapping text
- [ ] no distorted images
- [ ] footer remains usable

## S. Final QA gate

- [ ] page visually follows source-of-truth screenshot
- [ ] mobile is intentionally designed
- [ ] typography uses Poppins
- [ ] theme tokens are centralized
- [ ] components are reusable
- [ ] JS selectors use stable `data-*` hooks
- [ ] console is clean
- [ ] HTML is valid
- [ ] accessibility basics pass
- [ ] images are optimized
- [ ] no unnecessary dependencies were introduced
- [ ] documentation remains synchronized with implementation

**Rule:** A section is "done" only when its HTML, CSS, JavaScript behavior, responsive behavior, and accessibility all pass together.
