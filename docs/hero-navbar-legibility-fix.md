# Hero/Navbar Legibility Fix Documentation

## Overview
This document details the fix for the UI legibility issue where the white Navbar text was unreadable against the light page background at the top of the Home page. The solution involves switching the Navbar to a `fixed` position, ensuring global layout safety with CSS variables, and adding a subtle gradient "scrim" for guaranteed contrast.

## Problem Description
- **Issue**: At `scrollY === 0`, the Navbar was `sticky` and sat *above* the Hero section in the document flow. This caused the area behind the transparent Navbar to be the default `body` background (white).
- **Result**: White text on a white background (illegible).
- **Constraint**: The user requested to "Extend the hero background behind the navbar" and/or "Add a subtle top scrim", while ensuring content on other pages is not hidden.

## Solution Architecture
The fix employs a "Breakout Hero" strategy with Global Safety:
1.  **Fixed Navbar**: The Navbar is removed from flow (`fixed top-0`) to allow the Hero to slide underneath it.
2.  **Global Offset**: To prevent content on *other* pages (About, Contact, etc.) from sliding under and being hidden, the `main` container has `padding-top: var(--nav-height)`.
3.  **Hero Breakout**: On the Home page, the Hero section explicitly effectively "undoes" this global padding outcome by applying a negative top margin (`mt-[calc(var(--nav-height)*-1)]`), pulling itself back to the very top of the viewport to sit behind the Navbar.
4.  **Contrast Scrim**: A subtle generated gradient (`black/50` to `transparent`) is added to the Navbar to ensure text is legible even if the Hero image is light.

## detailed File Changes

### 1. `src/app/globals.css`
- **Change**: Added CSS variables for Navbar height.
- **Reason**: To avoid magic numbers and ensure consistency across `layout`, `Navbar`, and `Hero`.
```css
:root {
  --nav-height: 4rem; /* Mobile */
}
@media (min-width: 768px) {
  :root {
    --nav-height: 5rem; /* Desktop */
  }
}
```

### 2. `src/app/layout.tsx`
- **Change**: Added `pt-[var(--nav-height)]` to the `main` tag.
- **Reason**: Global safety. Ensures that by default, all page content starts *below* the fixed header.

### 3. `src/components/layout/Navbar.tsx`
- **Change**: 
    - `sticky` -> `fixed`.
    - Added explicit `h-[var(--nav-height)]`.
    - Added a "Scrim" `div` with `bg-gradient-to-b from-black/50 to-transparent`.
- **Reason**: `fixed` allows overlay. Scrim provides contrast safety.

### 4. `src/components/home/Hero.tsx`
- **Change**: 
    - Added `mt-[calc(var(--nav-height)*-1)]`.
    - Increased `pt` from `32` (8rem) to `calc(var(--nav-height)+4rem)`.
- **Reason**: 
    - Negative margin pulls the Hero up behind the Navbar (satisfying "Option A").
    - Increased padding ensures the text *inside* the Hero is positioned correctly relative to the new top edge.

## Verification
- **Build**: `npm run build` passed.
- **Lint**: `npm run lint` passed.
- **Visual Logic Check**:
    - **Home**: Hero pulls up (-80px), Navbar sits on top (+80px height). Net result: Hero background is at `y=0`. Scrim ensures contrast.
    - **Other Pages**: Main has padding (+80px). Content starts at `y=80px`. No content hidden.
- **Browser Note**: Automated browser verification was not possible due to environment limitations. Manual code analysis confirms the logic.

## Troubleshooting & Build Fixes
During the verification phase, the build failed due to a missing dependency `radix-ui/react-radio-group` which was imported in `src/components/features/ContactForm.tsx` but not present in `package.json` or `src/components/ui/radio-group.tsx`.
- **Action**: Installed `@radix-ui/react-radio-group` and created `src/components/ui/radio-group.tsx` to restore the missing component.
- **Issue**: Multiple files contained unescaped quotes (`"`, `'`), unused imports, or lint errors (`src/app/about/page.tsx`, `src/app/services/remodeling/page.tsx`, `src/app/services/specialized/page.tsx`, `src/components/features/MaintenancePageClient.tsx`, `src/components/home/Evolution.tsx`, `src/components/home/MaintenanceTeaser.tsx`, `src/components/home/ReviewCarousel.tsx`, `src/sanity/lib/image.ts`).
- **Action**: Systematically replaced all unescaped quotes with HTML entities (`&quot;`, `&apos;`), removed unused imports, and addressed lint warnings.
- **Outcome**: Build passed successfully.
