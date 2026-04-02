# High-End Editorial Design System

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

Moving away from the generic "app-like" appearance of many book trackers, this system treats digital space like a high-end literary journal. It draws inspiration from the authoritative clarity of *Stack Overflow*, the breathing room of *Medium*, and the community-centric soul of *The StoryGraph*. We break the standard grid through intentional asymmetry—using large typography offsets and overlapping elements—to create a "signature" look that feels premium, professional, and bespoke.

---

## 2. Colors
Our palette balances a professional teal base with an intellectual violet, accented by high-energy editorial tones.

| Token | Hex | Role |
| :--- | :--- | :--- |
| `primary` | `#006b5f` | Brand authority and main navigation. |
| `primary-container` | `#00a896` | High-visibility elements and active states. |
| `secondary` | `#633dd3` | Interactive secondary actions and metadata accents. |
| `secondary-container`| `#7e5bef` | Soft highlights and category backgrounds. |
| `tertiary` | `#7d5800` | Warning states and curation highlights. |
| `error` | `#ba1a1a` | Critical alerts and "Success" counter-points. |
| `surface` | `#f5fbf8` | The "Paper": main background. |

### The "No-Line" Rule
**Strict Prohibition:** Designers are prohibited from using 1px solid borders to section off content. In an editorial context, lines create visual noise.
- **Tonal Boundaries:** Define sections solely through background color shifts. A `surface-container-low` section sitting on a `surface` background provides all the separation the eye needs.
- **Glass & Gradient:** For floating navigation or CTA buttons, utilize a subtle gradient (from `primary` to `primary-container`) to provide "soul" and depth.

---

## 3. Typography
We utilize a sophisticated pairing of **Newsreader** for a "literary" serif feel in displays and **Work Sans** for high-performance functional reading. **Noto Sans JP** is reserved for technical metadata and micro-labels to add a global, precise character.

*   **Display (Newsreader):** Large, bold, and slightly offset. Use for book titles and section headers to establish an authoritative editorial voice.
*   **Body (Work Sans):** Optimized for long-form reading with generous line-height (1.6) to mimic the experience of a physical book.
*   **Labels (Public Sans / Noto Sans JP):** Uppercase, letter-spaced labels for categories and tags, providing a "technical" contrast to the organic serif headers.

---

## 4. Elevation & Depth
In this system, depth is a result of **Tonal Layering**, not structural scaffolding.

### The Layering Principle
Hierarchy is achieved by "stacking" surface tiers. 
- **Base:** `surface` (#f5fbf8)
- **Sections:** `surface-container-low` (#eff5f2)
- **Floating Cards:** `surface-container-lowest` (#ffffff)
This creates a soft, natural lift where the content feels integrated into the page rather than "stuck" on top.

### Ambient Shadows
When a physical "lift" is required (e.g., a book card), use the following "Ambient Shadow" to mimic natural light:
`box-shadow: 0 12px 32px -8px rgba(23, 29, 27, 0.06);`
The shadow must be a tinted version of the `on-surface` color, never a flat neutral grey.

### Glassmorphism
For headers or floating filter bars, use:
`background: rgba(245, 251, 248, 0.8); backdrop-filter: blur(12px);`
This allows colors to bleed through the UI, softening edges and creating an expensive, tactile feel.

---

## 5. Components

### Cards & Lists
*   **The Divider Forfeit:** Forbid the use of divider lines. Separate list items using `spacing-4` (1.4rem) of white space or subtle background shifts.
*   **Asymmetric Cards:** Use `rounded-lg` (0.5rem) but consider "Editorial Offsets" where the image of the book cover slightly overlaps the card boundary to break the container box.

### Buttons
*   **Primary:** Solid `primary` background. Typography weight **500**. No border.
*   **Secondary:** `surface-container-highest` background with `on-surface` text.
*   **Tertiary (Ghost):** No background. Use a "Ghost Border" (outline-variant at 15% opacity) only on hover.

### Category Chips
Use **Solid Color Blocks** as requested.
- Categories should use the `secondary-container` or `tertiary-fixed` tokens. 
- Typography: `label-sm` in weight **600** for high-end legibility.

### Input Fields
*   Avoid the "box" look. Use a `surface-container-low` background with a bottom-only `primary` stroke (2px) that appears only on focus.

---

## 6. Do's and Don'ts

### Do
*   **DO** use the 8px grid system religiously to maintain editorial alignment.
*   **DO** allow for "dead space." Generous margins (using `spacing-16` and `20`) are what separate professional design from "app templates."
*   **DO** use `Noto Sans JP` for metadata like ISBNs, page counts, or dates to add a layer of professional precision.

### Don'ts
*   **DON'T** use 100% black (#000000) for text. Use `on-surface` (#171d1b) to maintain a soft, high-end ink-on-paper feel.
*   **DON'T** use high-contrast borders. If a container needs a boundary, use the "Ghost Border" fallback (outline-variant at 10% opacity).
*   **DON'T** crowd the screen. If a view feels busy, increase the spacing tokens rather than adding lines or separators.