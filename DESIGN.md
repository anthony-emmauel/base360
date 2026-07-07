---
name: Base360 Hero
description: Dark, precise marketing hero for Base360 — a unified social/DM/SMS/email inbox that turns comments into customers.
colors:
  bg: "#0a0a0a"
  surface: "#131316"
  border: "rgba(255, 255, 255, 0.08)"
  text-primary: "#ffffff"
  text-secondary: "#a0a0a0"
  text-muted: "#6b6b6b"
  accent: "#6c47ff"
  accent-hover: "#9c87f5"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 3.625rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  button-secondary-hover:
    backgroundColor: "transparent"
  tag-hot-lead:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: Base360 Hero

## 1. Overview

**Creative North Star: "The Signal Thread"**

Base360 turns scattered comments and DMs into closed sales, and the visual system makes that literal: thin violet threads drift in from every edge of the screen and converge on the product panel, exactly as scattered conversations converge into one inbox. The rest of the page stays out of the way of that idea — near-black surfaces, hairline borders, a single accent color spent only on the moments that matter (the CTA, the thread, the "hot lead" tag). This is confident, blunt, fast: dev-tool-grade restraint (Linear, Vercel, Raycast) applied to a product-led inbox story (Intercom, respond.io), not glossy DTC marketing. It explicitly rejects stock-gradient heroes, oversized rounded cards, stock photography, and decorative padding that isn't earning its place.

**Key Characteristics:**
- Near-black canvas with one deliberate accent color, spent rarely
- The product UI itself is the hero image — no illustration, no stock photography
- Flat everywhere, except one dramatic soft-shadow float under the product panel
- Motion carries meaning (threads converging) rather than decorating

## 2. Colors

A near-black canvas with a single violet accent, spent only where it signals something happening (action, automation, a hot lead).

### Primary
- **Thread Violet** (`#6c47ff`): the accent. Used on the primary CTA, the animated thread-lines converging on the product panel, the "hot lead" tag, and link hovers. Reserved for moments that signal action or automation — never used as a decorative fill.
- **Soft Lavender Hover** (`#9c87f5`): Thread Violet's lighter hover/active state, and the trust-bar wordmark hover color.

### Neutral
- **Void Black** (`#0a0a0a`): page background.
- **Charcoal Surface** (`#131316`): the product panel and elevated card background — just barely lighter than Void Black, with a faint cool tint.
- **Hairline Border** (`rgba(255, 255, 255, 0.08)`): the only separator in the system. No shadows between flat surfaces, ever — just this one hairline.
- **Primary Text** (`#ffffff`): headlines, primary labels, active nav state.
- **Secondary Text** (`#a0a0a0`): body copy, subheads, inactive nav links.
- **Muted Text** (`#6b6b6b`): timestamps, helper labels, placeholder text, inactive icons.

### Named Rules
**The Rare Signal Rule.** Thread Violet appears on well under 10% of any given screen. Its scarcity is what makes the CTA, the thread motif, and the hot-lead tag read as signals rather than decoration. Never use it as a background wash or a secondary UI color.

## 3. Typography

**Display / Body Font:** Inter (with `ui-sans-serif, system-ui, sans-serif` fallback)

**Character:** One typeface, multiple weights — no serif or mono pairing. Precision comes from restraint and scale discipline (medium weight, tight tracking on display sizes), not from mixing families.

### Hierarchy
- **Display** (500, `clamp(2.5rem, 5vw, 3.625rem)`, line-height 1.1, tracking -0.02em): the hero headline only, three stacked short lines.
- **Headline** (500, `clamp(2rem, 4vw, 2.25rem)`, line-height 1.2, tracking -0.01em): section headings like "A better way to turn comments into customers."
- **Title** (500, 20px, line-height 1.4): feature-panel headlines inside the sticky-tab sequence.
- **Body** (400, 16px, line-height 1.6, max ~65ch): hero subhead and feature descriptions.
- **Label** (500, 12px, tracking 0.05em, often uppercase): timestamps, channel badges, the trust-bar heading, the "HOT" tag, keyboard-shortcut hints.

### Named Rules
**The One Voice Rule.** Every weight and size in the system traces back to Inter at 400 or 500. If a new component needs a third weight or a second family to feel "designed," that's a sign to fix spacing or color instead.

## 4. Elevation

Flat by default: surfaces sit directly on Void Black separated only by the hairline border, with no ambient shadow. The one deliberate exception is the product panel (and, in the scroll sequence below it, each feature panel) — these float above the page on a large, soft, low-opacity shadow, which is what makes the product itself feel like the hero image rather than a screenshot pasted into a card.

### Shadow Vocabulary
- **Panel Float** (`box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.6)`): the product panel and feature-sequence cards. The only shadow in the system — large spread, deep negative offset, low enough opacity to read as depth rather than a drop-shadow effect.

### Named Rules
**The One Float Rule.** Exactly one elevation treatment exists. If a new component wants a shadow, it should be because it's meant to feel like "the hero object" the way the product panel does — not a generic card hover effect.

## 5. Components

### Buttons
- **Shape:** fully rounded (`border-radius: 9999px`) on every button and pill in the system — no rectangular or slightly-rounded buttons exist.
- **Primary:** Thread Violet fill, white text, 12px/24px padding, `hover:opacity-90`. Used once per view (hero CTA).
- **Secondary / Ghost:** transparent background, hairline border, white text; hover brightens the border to `rgba(255,255,255,0.2)`. Used for the nav CTA and in-panel actions ("View Profile", "Resolve", "Send").
- **Text link:** no border or fill, white text that dims to Secondary Text on hover. Used for low-emphasis actions ("See how it works →", "Read more →").

### Tags / Pills
- **Hot Lead Tag:** Thread Violet fill, white uppercase label, tracked letter-spacing, small icon (Zap) — the one place the accent appears as a filled surface rather than a line or text color. Signature component: it's the visual payoff of "automates the busywork."
- **Channel Badge:** hairline-bordered, muted-text pill (e.g. "IG", "TT") next to a contact name in the inbox list.

### Cards / Panels
- **Corner Style:** 16px radius on the product panel and feature-sequence panels; 12px on smaller inline surfaces.
- **Background:** Charcoal Surface.
- **Shadow Strategy:** Panel Float only (see Elevation). No card anywhere else in the system uses a shadow.
- **Border:** 1px Hairline Border throughout.

### Inputs
- **Style:** fully rounded pill, hairline border, near-transparent background wash (`rgba(255,255,255,0.02)`).
- **Focus:** no visible focus ring on the text input itself; the surrounding pill border is the only chrome. Icons (attach, emoji, send) sit inline at Muted Text color.

### Navigation
- Three-column grid: wordmark left, links center (hidden below `sm`), CTA right. Links sit at Secondary Text and brighten to Primary Text on hover — no underline, no active-state pill.
- The in-panel icon rail (dashboard / channels / settings) marks its active item with a filled 40% white background tile plus a small rounded indicator pill at its edge — an active-state affordance, not a decorative stripe.

### The Signal Thread (signature motif)
Thin violet gradient lines drift in from scattered points around the page perimeter and converge on the product panel's top edge — a static gradient-faded line always visible, plus a short dashed segment animated toward the panel (`prefers-reduced-motion` falls back to the static line only). A smaller, non-converging echo of the same motif runs behind the feature-sequence panels lower on the page. This is the one place in the system where motion is structural rather than incidental — it visualizes the product's core promise.

## 6. Do's and Don'ts

### Do:
- **Do** spend Thread Violet (`#6c47ff`) only on the primary CTA, the thread motif, and the hot-lead tag — per the Rare Signal Rule.
- **Do** keep every surface flat with a hairline border by default; reserve the Panel Float shadow for the one hero object per view.
- **Do** let the product UI itself be the hero image — build real inbox/thread panels, never illustration or stock photography.
- **Do** write blunt, specific copy that a generic SaaS page couldn't also say (per PRODUCT.md's "confident, blunt, fast" personality).
- **Do** fully round every button, pill, and tag — no rectangular or slightly-rounded control exists in this system.

### Don't:
- **Don't** use stock-gradient heroes, oversized rounded cards, or stock photography — PRODUCT.md names this explicitly as the anti-reference ("generic glossy SaaS/DTC marketing").
- **Don't** add a new shadow anywhere outside the one Panel Float use — a second shadow vocabulary dilutes the "one hero object" effect.
- **Don't** use gradient text or glassmorphism as decoration; if emphasis is needed, use weight or the one accent color instead.
- **Don't** introduce a `border-left`/`border-right` colored accent stripe on new list rows or cards. The existing inbox row's 2px active-state left border is a legacy pattern from before this system was documented — new selected-state indicators should use a background tint or the icon-rail's edge-pill pattern instead, not a repeated stripe.
- **Don't** pair Inter with a second display or mono family; the One Voice Rule depends on a single typeface carrying the whole hierarchy.
