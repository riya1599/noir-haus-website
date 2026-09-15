# The Noir Haus — Design System

## Overview

The Noir Haus is an independent creative studio crafting timeless brand identities, digital experiences, and editorial-inspired design. The studio's own words: *"We believe exceptional design comes from clarity, restraint, and intention—not trends. Every project is thoughtfully crafted to create enduring brands and meaningful experiences that inspire trust through quality and meticulous attention to detail."*

This system translates that philosophy into a working kit: a restrained charcoal-and-orange palette, a clean editorial sans typeface, and a component/UI-kit set for the studio's own marketing site.

### Sources
- `uploads/Artboard 1 copy 9@24x.png` — the Noir Haus logotype (serif "the NOiR" + orange script "haus"), copied to `assets/logo.png`.
- `uploads/Screenshot 2026-08-08 at 12.48.20 AM.png` — brand color swatches (orange, charcoal, gray, light gray).
- `uploads/DESIGN-lovable.md` — a teardown of lovable.dev's own design system. Per user direction, used only as a **structural reference** (how to think about opacity-derived neutrals, spacing scales, shadow philosophy) — none of its cream/parchment palette or Camera Plain typeface carried over.
- No codebase, Figma file, or existing UI was provided — all components and screens below are original constructions sized to the brand, not copied from an existing product.

### Substitutions (flag for review)
- **Typeface**: **Clash Grotesk** (600 semibold) for display/headings, served via Fontshare CDN. **Inter** (Google Fonts) for body/UI text. (Earlier drafts referenced a "Camera Plain Variable" placeholder — dropped per direction; Clash Grotesk + Inter is now the system's typeface pairing.)
- **Icons**: no icon set was provided. Using **Lucide** (CDN) — thin 1.5px stroke, no fill, matches the restrained/editorial tone. Flagged in Iconography below.
- **Logo**: only the combined lockup was provided (no isolated wordmark, no icon-only mark). Treated the full lockup as the single mark; no separate icon variant exists yet.

## Creative Audit — Editorial Sophistication Pass

A brutally honest review against the editorial/architectural qualities the studio is aiming for (calm pacing, confident whitespace, restrained typography, quiet confidence) — principles only, no visual copying of any reference.

**What reads generic / AI-template right now:**
- **The orange accent is a SaaS reflex, not a studio decision.** A single saturated CTA-orange against charcoal-on-white is the default "clean startup" palette every AI-generated system reaches for. It undercuts "quiet confidence" — a studio this restrained should earn its one accent color from something specific (the logo's script mark), not lean on it as a UI utility color for buttons and links. Recommendation: demote orange to a true rare-use signature (one mark, one moment per page) rather than the system's interactive-state color; let charcoal-on-charcoal (weight/opacity, not hue) carry most hover/press states.
- **Manrope-as-substitute reads as "default Google Font."** It's a fine geometric grotesque, but it's also the same fallback half the internet reaches for — nothing about it is specific to this studio. This is a substitution flagged pending real font files, but worth naming: whatever ships permanently should feel chosen, not defaulted-to.
- **Pill radius (9999px) on tags/badges contradicts the architectural claim.** The readme already claims "slightly architectural/sharp rather than soft," but a full pill is the softest, most generic shape in UI design — it's what every SaaS badge looks like. An editorial system should pick ONE cornering logic and hold it everywhere, including small components.
- **Decorative gradient swatches in the work grid are visual noise the foundations explicitly forbid.** The Visual Foundations already state "no gradients... behind content," yet the Selected Work grid placeholders use `linear-gradient` tone swatches. Inconsistency between stated principle and built system is exactly the kind of "says one thing, does another" that reads unconfident.
- **Lucide-by-default is a templated choice, not a studio choice.** It's the correct pragmatic substitution given no icon source was provided, but it's also the reflexive choice of nearly every AI-built product right now. Worth naming as a placeholder, not a final identity decision — an editorial studio might prefer to minimize icon usage almost entirely (numerals, rules, and typographic marks instead of glyphs) rather than adopt any icon library's visual voice.
- **The copy about the brand ("clarity, restraint, intention") is stated but not yet structurally enforced.** Buzzwords describing restraint don't create restraint — only the grid, spacing rhythm, and what's LEFT OUT do. The system needs to demonstrate restraint (fewer simultaneous type sizes on a page, fewer accent uses, more unstyled whitespace) rather than describe it.
- **8px-step spacing scale is a product-UI convention, not an editorial one.** It's serviceable, but editorial/architectural layouts are usually driven by a column grid and a small number of *deliberate* vertical rhythm values tied to type (e.g., multiples of the body line-height), not a generic 4/8px utility ladder. The scale should feel derived from the page's typographic grid, not from a Tailwind-style spacing convention.
- **Nothing here currently expresses "grid" as a structural idea.** The readme names a max-width and padding but no actual column system (e.g., a 12-column grid with defined gutters, or an asymmetric editorial column split for image/caption pairings). Confident whitespace comes from a felt grid, not just a wide `max-width`.

**What already earns its place (keep):**
- No emoji, no exclamation points, first-person-plural studio voice — genuinely restrained, not decorative.
- Deriving neutrals from one charcoal at varying opacity rather than a swatch of separate grays — a real piece of editorial discipline (fewer arbitrary colors).
- Shallow/absent shadows, border-first containment — correct instinct, keep pushing further (see below).
- Black-and-white photography as the default imagery treatment — matches the "Noir" premise and stays out of the way of typography.

**Sharpened principles going forward** (documentation only — no code changed this pass):
1. **One grid, everywhere.** Define an explicit column grid (12 columns, fixed gutter) as a first-class foundation, not just a max-width. Every layout — hero, work grid, case study, footer — aligns to it. Whitespace reads as "confident" only when it's clearly the *product* of a grid, not the absence of content.
2. **Orange becomes a signature, not a utility.** Reserve it for one deliberate mark per screen (a single accent word, the logo dot, a single active-state indicator) — never as the default interactive-blue-equivalent for every hover/link.
3. **One cornering logic.** Pick near-zero radius (0–2px) as the system-wide rule, including tags/badges/avatars. If a pill shape is ever needed, it should be a rare, named exception, not the default for small components.
4. **Vertical rhythm from type, not from a generic spacing ladder.** Base the spacing scale on multiples of the body line-height/baseline rather than an arbitrary 4px/8px doubling sequence — ties whitespace back to the reading experience instead of to UI-kit convention.
5. **Icons as a last resort.** Prefer numerals ("01 / 02 / 03"), rules, and type-only labels over glyphs wherever a glyph isn't communicating something a word can't. When an icon is unavoidable, keep the current thin-stroke, monochrome treatment — but treat every icon as a small defeat of the "type does the work" principle, not a design opportunity.
6. **Consistency between what's written and what's built.** Every stated foundation (no gradients, no bounce, borders-not-shadows) must be true everywhere in the kit, including placeholder/filler content — a single decorative gradient placeholder undermines the whole claim of restraint.

## Content Fundamentals

- **Voice**: first-person plural ("We believe..."), declarative, unhurried. Sentences favor clarity over cleverness — no wordplay, no exclamation points.
- **Tone**: confident but understated. Words like "clarity," "restraint," "intention," "enduring," "meticulous" recur — the vocabulary of craft, not hype.
- **Casing**: sentence case throughout body copy and UI labels; the logo itself uses stylized lowercase/small-caps ("the NOiR haus") but running text should NOT mimic this — write "The Noir Haus" normally in prose.
- **Person**: "we" for the studio, "you"/"your brand" for the client — a studio-to-client register, not a consumer-facing "you'll love this."
- **Punctuation**: em dashes for asides (as in the studio's own statement above); periods, not exclamation marks, close statements.
- **Emoji**: none. This is a strictly no-emoji brand — luxury/editorial tone rejects them entirely.
- **Vibe**: gallery text, not landing-page copy. Short paragraphs, generous whitespace around them, headlines that read like exhibition titles ("Selected Work", "The Studio", "Enquiries").

## Visual Foundations

- **Color**: high-contrast, warm-neutral. White (`#FFFFFF`) is the primary canvas; charcoal (`#1E1E1E`) carries all text and dark surfaces; a single saturated accent — orange (`#F15A24`) — is used sparingly for CTAs, links-on-hover, and small emphasis marks (echoing the script "haus" and the orange dot in the logo). Secondary gray (`#3B3B3B`) and light gray (`#F7F7F7`) round out surfaces and secondary text. Structurally, secondary/muted text and borders are derived from charcoal at reduced opacity (4%, 8%, 16%, 40%, 60%) rather than separate hex values, keeping every neutral tonally related — a technique borrowed from the Lovable reference doc.
- **Type**: Inter (body/UI fallback) throughout, two effective weight roles — 400 for body/UI, 600 for headings, 700 reserved for rare heavy emphasis (never louder than that — the brand doesn't shout). Display and heading sizes carry tight negative letter-spacing (-0.015em to -0.02em) for an editorial, compressed feel; body copy stays at normal tracking for readability.
- **Spacing**: 8px base unit, scaling generously at the top end (up to 160px) for section breathing room — editorial pacing, not dense product-UI pacing.
- **Backgrounds**: flat color only. No photography washes, no gradients, no patterns/textures behind content. Full-bleed black-and-white photography is used for case-study hero imagery only (see UI kit), always with a plain caption below, never with text overlaid on the image.
- **Animation**: minimal and quiet — short fades and 4–8px slide-ins on scroll reveal, standard easing (`cubic-bezier(.4,0,.2,1)`), 120–200ms. No bounces, no springs, nothing playful — motion should feel like a page turning, not a toy.
- **Hover states**: on light surfaces, text/icons shift to the accent orange; on dark (charcoal) buttons, a slight opacity reduction (0.85). No background-color swaps on text links — underline or color shift only.
- **Press/active states**: opacity drops to ~0.8; no scale/shrink transforms — the brand avoids anything that reads as "bouncy."
- **Borders**: thin 1px hairlines in `--border-subtle` (8% charcoal) for passive containment (cards, dividers), `--border-strong` (40% charcoal) for interactive outlines (ghost buttons, focus-adjacent inputs). Borders, not shadows, are the primary containment device.
- **Shadows**: intentionally shallow. Flat surfaces by default; a soft `--shadow-md`/`--shadow-lg` only for true overlays (dialogs, dropdowns, toasts) that must visually separate from the page. No card "hover-lift" shadows — hover is communicated by border/color change instead.
- **Corner radii**: restrained and mostly small — 2–4px on buttons/inputs, 8px on cards/images, full pill (9999px) reserved for tags and small status badges only. Nothing rounds aggressively; the editorial tone reads as slightly architectural/sharp rather than soft.
- **Transparency & blur**: used only for the fixed top navigation, which gets a subtle backdrop-blur + translucent white background once the page scrolls, so it stays legible over imagery beneath it. No blur elsewhere.
- **Imagery color vibe**: black-and-white or heavily desaturated photography is the default for work/portfolio imagery — reinforces the "Noir" name and gives the single orange accent something to pop against. Grain/texture is acceptable in photography, not added artificially to UI chrome.
- **Cards**: flat surface (white or light-gray), 1px subtle border, 8px radius, no shadow at rest; on hover, border darkens to `--border-strong` and any image inside desaturates fully if it wasn't already.
- **Layout rules**: centered content column, max-width 1240px; fixed/sticky top navigation; generous section padding (64–160px vertical) as the primary rhythm device rather than divider lines.

## Iconography

No icon set was provided in source material. The system uses **Lucide** (CDN: `https://unpkg.com/lucide@latest`) — a thin 1.5px-stroke, no-fill icon set that matches the brand's restrained, architectural line quality better than a filled/rounded alternative would. Icons are always monochrome (`currentColor`, inheriting `--text-primary` or `--text-on-dark`), never multi-color, never combined with emoji. Emoji are not used anywhere in the brand. Where a small mark is needed for a bullet or status dot, a plain circle or the accent orange square is used instead of a symbol.

## Index

- `styles.css` — root stylesheet (imports everything below)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (shadow/radius/motion)
- `assets/logo.png` — the Noir Haus lockup
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Radius & Shadow, Brand)
- `components/core/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip
- `ui_kits/marketing-site/` — Home, Selected Work (grid), Case Study detail, Studio/Contact
- `SKILL.md` — portable Claude Code skill wrapper for this system
