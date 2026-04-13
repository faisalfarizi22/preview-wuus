# Design System Strategy: The Shadowed Salon

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Shadowed Salon."** 

Luxury fine dining is as much about what is hidden as what is revealed. This system rejects the "flatness" of modern SaaS interfaces in favor of a digital experience that mimics a dimly lit, high-end interior. We are moving away from rigid, centered grids and toward **Editorial Asymmetry**. By utilizing overlapping elements, expansive white space (or "dark space"), and high-contrast typography, we create an interface that feels curated rather than templated.

The goal is to evoke the tactile sensation of a heavy, linen-paper menu and the shimmering warmth of candlelight against dark wood.

---

## 2. Colors & Atmospheric Depth
This palette is rooted in high-contrast sophistication. The interplay between `background` (#131313) and `primary` (#e9c176) represents the glow of gold leaf in a dark room.

### The "No-Line" Rule
To maintain a premium feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries between content areas must be defined exclusively through background color shifts. 
*   A hero section might use the base `surface` (#131313).
*   A secondary feature section should transition into `surface_container_low` (#1c1b1b).
*   Interactive elements should rest on `surface_container_high` (#2a2a2a).

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create "nested" depth. 
*   **Recessed:** Use `surface_container_lowest` (#0e0e0e) for input fields or inset content to create a sense of carved-out space.
*   **Elevated:** Use `surface_container_highest` (#353534) for floating elements.

### The Glass & Gradient Rule
To add "soul" to the interface:
*   **Glassmorphism:** Navigation bars and floating action cards should use `surface_container_low` at 80% opacity with a `20px` backdrop blur.
*   **Signature Gradients:** For primary Call-to-Actions (CTAs), use a subtle linear gradient from `primary` (#e9c176) to `primary_container` (#c5a059) at a 135-degree angle. This mimics the way light hits polished brass.

---

## 3. Typography: Editorial Authority
We utilize **Manrope** across all scales. Its clean, geometric nature provides a modern edge to the luxury aesthetic.

*   **Display Scales (`display-lg`, `display-md`):** These are your "statement" pieces. Use them with tight letter-spacing (-0.02em) and generous leading. Break the grid—allow display text to overlap imagery or "bleed" off-center.
*   **Headline & Title:** Use `headline-lg` for section headers. Always pair these with `label-md` "eyebrow" text in `on_tertiary` (#363022) to establish a hierarchy that feels like a printed lookbook.
*   **Body Text:** `body-lg` should be the standard for descriptions. Ensure a line height of at least 1.6 to convey a sense of "breathing room" and exclusivity.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "digital." In this design system, we use light and shadow to mimic physical environments.

*   **The Layering Principle:** Instead of shadows, stack surface tiers. Place a `surface_container_high` card on a `surface` background. The subtle 2-3% shift in lightness is enough to define the object without cluttering the visual field.
*   **Ambient Shadows:** If a floating element (like a reservation modal) requires a shadow, it must be extra-diffused. Use a 40px blur with 6% opacity, using a tinted version of `surface_container_lowest` rather than pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` (#4e4639) at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** A solid fill of the gold gradient (`primary` to `primary_container`). Use `lg` (0.5rem) roundedness. Text is `on_primary` (#412d00), all caps, with 1px letter spacing.
*   **Secondary:** No fill. A "Ghost Border" of `outline` (#9a8f80) at 30% opacity. Upon hover, the background fills with a 5% opacity of `primary`.
*   **Tertiary:** Text-only using `label-md`. Underlined with a 1px `primary` stroke that sits 4px below the baseline.

### Cards & Lists
*   **Forbid Divider Lines:** Never use a horizontal rule to separate list items. Use 32px of vertical white space or a subtle shift to `surface_container_low`.
*   **Card Styling:** Cards should have no borders. Use `surface_container_medium` and the `lg` (0.5rem) corner radius. Imagery within cards should have a subtle `0.5px` inner glow to mimic the edge of a polished wood surface.

### Input Fields
*   **Styling:** Use the "Recessed" look. Background set to `surface_container_lowest`. The label should be `label-sm` in `on_surface_variant`, floating above the field.
*   **States:** On focus, the bottom border "grows" from the center using the `primary` gold color.

### Signature Component: The Sensory Hero
A full-bleed component combining a `display-lg` headline with a high-resolution video or image background. Apply a `surface_dim` gradient overlay (from 60% opacity at the bottom to 0% at the top) to ensure typography remains legible while the imagery feels integrated into the dark charcoal environment.

---

## 6. Do's and Don'ts

### Do
*   **Do** use intentional asymmetry. Place a small image against a large block of `display-lg` text.
*   **Do** prioritize high-quality photography of textures (velvet, steam, dark wood).
*   **Do** use `primary` (gold) sparingly. It is a highlighter, not a primary surface color.

### Don'ts
*   **Don't** use standard "Material" blue or bright white for any interactive state.
*   **Don't** use sharp 0px corners. Even the most "exclusive" brand needs the softness of the `sm` (0.125rem) or `md` (0.375rem) roundedness.
*   **Don't** crowd the interface. If you feel you need a divider line, you actually need 24px more padding.