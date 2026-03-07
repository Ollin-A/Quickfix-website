# Specialized CTA Button Fix

## Root Cause Analysis
The visibility issue on the `/services/specialized` page's bottom CTA button was caused by a style conflict:
1.  **Variant Conflict**: The button used the `outline` variant. In `src/components/ui/button.tsx`, the `outline` variant applies `bg-background` (typically white in light mode) and `hover:bg-accent`.
2.  **Class Override**: The button instance had `className="text-white ... border-white"`.
3.  **Result**: The combination resulted in white text on a white background (from `bg-background`), making the label "Contact Us Immediately" invisible in its resting state. The `border-white` was also lost against the white background or barely visible.

## Files Modified
1.  `src/components/ui/button.tsx`
2.  `src/app/services/specialized/page.tsx`

## Changes Applied

### 1. `src/components/ui/button.tsx`
Added a new `emergency` variant to the `buttonVariants` definition.

**Code Change:**
```tsx
emergency: "bg-red-600 text-white hover:bg-red-700 shadow-[0_0_30px_rgba(220,38,38,0.3)] border-none",
```
*Rationale*: This centralizes the specific "emergency" styling (red background, specific shadow) used on the specialized page, ensuring consistency and making it reusable without ad-hoc utility classes. It deliberately avoids baking in size or shape to maintain flexibility.

### 2. `src/app/services/specialized/page.tsx`
Updated both the Hero CTA and the Bottom CTA to use the new `emergency` variant.

**Hero Button:**
- **Before**: Used `bg-red-600 hover:bg-red-700` and shadow classes directly in `className`.
- **After**: Uses `variant="emergency"`. Ad-hoc color/shadow classes removed. Size and padding classes (`h-auto`, `px-8`, `py-6`, `text-lg`) preserved.

**Bottom CTA Button:**
- **Before**: Used `variant="outline"` with conflicting `text-white border-white` classes.
- **After**: Uses `variant="emergency"`. `variant="outline"` removed. Ad-hoc border and color classes removed. `rounded-full` and padding classes preserved to maintain the "pill" shape requested.

## Verification
1.  **Visual Verification**:
    - Confirmed the bottom CTA now has a red background with white text, matching the hero button.
    - Confirmed the "Contact Us Immediately" label is clearly visible.
    - Confirmed hover states darken the background as expected.
2.  **Code Quality**:
    - Ran `npm run lint` -> **Passed** (Exit Code 0).
    - Ran `npm run build` -> **Partially Failed** due to unrelated `Error fetching Yelp reviews` (external API issue), but verified that static pages were generated successfully (14/14) and changes to `button.tsx` did not cause compilation errors.


## Edge Cases
-   **Dark Mode**: The `emergency` variant specifies `text-white` and `bg-red-600`, so it will look consistent regardless of the theme (light/dark) of the surrounding page.
-   **Accessibility**: The contrast ratio of White on Red-600 is generally sufficient (AA large text). Focus rings from the default button styles remain intact.
