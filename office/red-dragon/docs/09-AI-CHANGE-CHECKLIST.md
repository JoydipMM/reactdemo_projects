# Red Dragon — AI Editor Change Checklist

Use this whenever an AI coding assistant changes the project.

## Before changing code

- [ ] Read the relevant markdown source-of-truth files
- [ ] Inspect the existing HTML/CSS/JS
- [ ] Identify the existing component/section rather than creating a duplicate
- [ ] Check whether the requested behavior already exists
- [ ] Preserve the `rd-` naming convention
- [ ] Preserve existing data attributes unless there is a strong reason to change them

## During changes

- [ ] Prefer semantic HTML
- [ ] Use CSS variables for brand values
- [ ] Reuse components
- [ ] Keep JS behavior separated from styling
- [ ] Do not introduce a framework
- [ ] Do not add a dependency for a trivial interaction
- [ ] Keep responsive behavior in mind
- [ ] Keep keyboard accessibility in mind
- [ ] Do not use arbitrary `nth-child()` selectors for behavior
- [ ] Do not use inline event handlers
- [ ] Do not use `!important` casually
- [ ] Do not hide overflow to conceal layout problems

## After changes

- [ ] Run/preview the page
- [ ] Check browser console
- [ ] Test desktop
- [ ] Test mobile
- [ ] Test keyboard interaction
- [ ] Test menu open/close
- [ ] Test carousel controls
- [ ] Test footer accordions
- [ ] Test forms
- [ ] Check horizontal overflow
- [ ] Check image proportions
- [ ] Check heading hierarchy
- [ ] Update documentation when implementation behavior changes

## AI completion report

Every meaningful AI change should finish with:

```text
Changed:
- ...

Files:
- ...

Responsive impact:
- ...

Accessibility impact:
- ...

JavaScript impact:
- ...

Potential follow-up:
- ...
```

Do not claim a test was passed unless the project was actually executed or inspected.
