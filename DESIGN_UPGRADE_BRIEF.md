# OmFit UI/UX Upgrade — Brief for Claude Code

Paste this whole file as the first prompt. Work section by section, run `npm run build` at the end, and screenshot desktop (1440x900) + mobile (390 wide) with headless Chrome to verify:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --window-size=1440,900 --screenshot=/tmp/hero.png http://localhost:3000/
```

## Context

- Next.js 15 App Router, React 19, TypeScript strict, **Tailwind v4** (CSS-first config in `app/globals.css` via `@theme inline`, no `tailwind.config`). `lucide-react` for icons. `framer-motion` is installed but unused — do **not** add it; use CSS.
- Marketing/lead-gen site for OmFit (Pune, nutrition coaching for diabetes/thyroid/PCOS/weight; ₹18,000 / 3-month flagship). Homepage = `app/page.tsx` composing `app/sections/*.tsx`. Config in `app/site-config.ts`. Lead forms POST `{ source, name, phone }` to `/api/waitlist`.
- Brand identity is good and must be kept: warm cream surfaces, forest green `brand`, terracotta `accent`, Fraunces (display) + Plus Jakarta Sans (body). This is an execution upgrade, not a rebrand.

## Already done (do not redo — read these first)

1. `app/globals.css` — rewritten. Now provides:
   - Tokens usable as Tailwind utilities: `bg-brand`, `text-ink`, `text-ink-secondary`, `text-ink-muted`, `text-ink-faint`, `bg-surface`, `bg-surface-raised`, `bg-surface-sunken`, `bg-surface-dark`, `bg-surface-dark-raised`, `text-on-dark`, `text-on-dark-secondary`, `text-on-dark-muted`, `bg-on-dark-faint`, `border-border`, `border-border-strong`, `bg-brand-muted`, `bg-accent-muted`, `text-accent`, `text-brand-light`, `bg-whatsapp`, `font-display`, `font-sans`. **Use these instead of `bg-[var(--color-brand)]`** in every file you touch.
   - Motion: `--ease-out`, `--ease-in-out`, `--ease-drawer`; shadows `--shadow-soft/card/float`.
   - Buttons: `.btn` + `.btn-primary | .btn-accent | .btn-ink | .btn-secondary | .btn-ghost | .btn-on-dark | .btn-whatsapp`, sizes `.btn-sm | .btn-lg`; put `className="btn-arrow"` on trailing ArrowRight icons (hover nudge), `btn-arrow-diag` for ArrowUpRight. Press = `scale(0.97)` with proper transform transition. Hover gated behind `(hover:hover)`.
   - Cards: `.card` and `.card-hover` (lift + warm shadow).
   - Inputs: `.form-input`, dark variant `.form-input-dark`.
   - Reveal: `[data-reveal]` / `[data-inview="true"]` CSS; above-the-fold keyframes `.rise-in`, `.fade-in` (stagger via `style={{ "--delay": "120ms" }}`), `.float-y`, `.live-dot` (pulsing dot), `.hero-wash`, `.dark-grid`, `.marquee-mask`, `.eyebrow` (label with leading rule; add `.eyebrow-center` for centered headers).
   - `scroll-padding-top: 96px` so `#programs` / `#about` anchors clear the header; `:focus-visible` rings; `::selection`; all reduced-motion handled.
2. `app/layout.tsx` — Google Fonts `<link>` replaced with `next/font/google` (`Fraunces` with `axes: ["opsz","SOFT","WONK"]` → `--font-fraunces`; `Plus_Jakarta_Sans` → `--font-jakarta`), applied on `<html>`. JetBrains Mono dropped (was unused).
3. `app/components/reveal.tsx` — `<Reveal as="section" delay={80} className=...>` wraps content, sets `data-inview` via IntersectionObserver (fires once). Use it for below-the-fold sections and stagger grid items (30–80ms steps). Do **not** wrap the hero in it (hero uses `.rise-in` so it never depends on hydration).

## Remaining work (homepage sections in `app/sections/`)

General rules for every section:
- Replace inline `bg-[var(--color-…)]` with token utilities; replace ad-hoc button markup with `.btn` classes; replace card markup with `.card card-hover`.
- Section header pattern: `<span class="eyebrow eyebrow-center text-brand">` + `<h2 class="display-lg">` + optional `body-lg text-ink-secondary` intro; `max-w-2xl mx-auto text-center`. Keep container `max-w-7xl px-5 sm:px-8 lg:px-10`, section padding `py-24 sm:py-32`.
- Wrap section content in `<Reveal>`; stagger grid children with `delay={i * 60}`.
- Keep all copy, links, `SITE_CONFIG` usage, and `source` values for forms unchanged unless told otherwise.

### 1. `navbar.tsx`
- Convert the fixed wrapper + manual spacer `<div className={bannerDismissed ? "h-[72px]" : "h-[108px]"}/>` hack into a **`sticky top-0 z-50`** wrapper (it is the first child of `<main>` so sticky works). Delete the spacer.
- Banner: keep it but slimmer (`py-1.5`, `text-[0.78rem]`), dismiss button with `btn`-style press feedback.
- Scrolled state: `bg-surface/85 backdrop-blur-md` + `shadow-[0_1px_0_var(--color-border)]`, transition `background-color/box-shadow 240ms`.
- Desktop nav links: `text-ink-secondary hover:text-ink` with `hover:bg-surface-sunken rounded-lg` (already close). CTA = `btn btn-primary btn-sm`. Parents pill = `btn btn-secondary btn-sm rounded-full` with `ArrowUpRight` `btn-arrow-diag`.
- Mobile drawer: **animate** it. Always render the panel; toggle `data-state="open|closed"`; closed = `translateY(-8px) opacity-0 pointer-events-none`, open = `translateY(0) opacity-1`; `transition: transform 260ms var(--ease-drawer), opacity 200ms ease`. Backdrop fades. Close on `Escape` and on route/hash click. Body scroll lock already exists — keep it.

### 2. `hero.tsx` (highest impact)
Problems: 4 stacked CTAs (primary, WhatsApp, Parents pill, callback form), eyebrow jammed against nav, stats wrap badly (`Since 2018` has no label; `100% Doctor-Reviewed` drops to a 2nd line), flat rectangular image, no image on mobile, `min-h-[85dvh]` creates dead space on tall screens.
- Remove `min-h-[85dvh]`. Use `pt-10 pb-16 sm:pt-16 lg:pt-20 lg:pb-24`. Add `hero-wash` to the section background and `overflow-hidden`.
- Grid `lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 items-center`.
- **CTA hierarchy**: exactly two buttons in the row: `btn btn-primary btn-lg` "Start Your Transformation" (Razorpay) + `btn btn-secondary btn-lg` "Talk on WhatsApp". Below them one line of micro-copy: `text-sm text-ink-muted` "₹18,000 for 3 months · EMI available · 7-day refund guarantee".
- **Callback form** moves into a compact `card` under the CTAs: label `label-sm text-ink-muted` "Prefer a call back?", then a single-row form (name, phone, `btn btn-ink btn-sm` "Call me"). Keep `source: "hero"`. Success state replaces the form with a check icon + "We'll call you within 24 hours." (fade in). See "Mobile picker" below — the phone field is where the shadcn component goes.
- **Parents link**: remove the pill from the hero (it lives in the nav). Instead, put it as a tiny text link under the eyebrow: `text-accent text-sm font-medium` "New: OmFit for Parents ↗".
- Eyebrow: `<span class="eyebrow text-brand">Since 2018 · 10,000+ lifestyles transformed</span>`.
- Headline: keep `display-xl`; `Naturally.` in italic accent. Stagger `.rise-in` on eyebrow (0ms), h1 (80ms), paragraph (160ms), CTAs (240ms), form (320ms), stats (400ms).
- **Stats strip**: 3 items, each with value (`number-display text-2xl`) **stacked above** label (`text-xs text-ink-muted`): `10,000+ / Lifestyles transformed`, `4.9★ / Google rating`, `15+ / Conditions covered`. `grid grid-cols-3 border-t border-border pt-7 mt-12`. Drop "Since 2018" and "100% Doctor-Reviewed" here (Since 2018 is in the eyebrow).
- **Image**: show on all breakpoints. Mobile `aspect-[4/3]`, lg `aspect-[4/5]`, `rounded-[1.75rem]` with `shadow-[var(--shadow-float)]`. Add a soft accent blob behind (`absolute -inset-6 rounded-[2.5rem] bg-accent-muted blur-2xl -z-10`). Overlay two floating proof cards (`card`, `shadow-[var(--shadow-card)]`, `.float-y` with different `--delay`), `fade-in` delay 500ms: (a) bottom-left: avatar stack of 4 `public/images/members/*.png` + "10,000+ members" ; (b) top-right: small metric card "HbA1c  8.2 → 6.4  ·  Rajesh, 52" with a tiny green down-trend icon (`TrendingDown`). Hide (b) below `sm`.
- `priority` on the image, `sizes="(max-width:1024px) 100vw, 45vw"`.

### 3. `member-faces.tsx`
- Replace the two gradient fade `<div>`s with `marquee-mask` on the track wrapper.
- Pill → `card` styling (`rounded-full`), avatar `h-9 w-9`. Header uses `eyebrow`. Wrap header in `Reveal`.

### 4. `programs.tsx`
- Flagship card `rounded-[2rem] bg-surface-dark dark-grid` with a radial brand glow (`before:` absolute `bg-[radial-gradient(60%_60%_at_100%_0%,rgba(90,143,109,0.25),transparent)]`). Layout `lg:grid-cols-[0.9fr_1.1fr] gap-10`:
  - Left: badges → price block (`number-display text-5xl text-on-dark` ₹18,000, `text-on-dark-muted` "/ 3 months", then line "≈ ₹200 a day · EMI available") → batch pill using `live-dot text-accent` → CTAs stacked: `btn btn-accent btn-lg w-full` "Enrol Now", `btn btn-on-dark w-full` "Have questions? Chat with us" → footnote `text-xs text-on-dark-muted` with `ShieldCheck` "Secure Razorpay checkout · 7-day refund guarantee".
  - Right: `label-sm text-on-dark-muted` "Everything included", features as `grid sm:grid-cols-2 gap-x-6 gap-y-4`, each row: lucide icon in `h-8 w-8 rounded-lg bg-on-dark-faint` tile + text `text-sm text-on-dark-secondary`. (Use each feature's own icon instead of a generic Check.)
- Personal training → horizontal `card` (`sm:flex items-center justify-between gap-8 p-6 sm:p-8`), title + copy left, `btn btn-ink` "Chat With Us" right. Add `label-sm text-ink-muted` "Also available".

### 5. `conditions.tsx`
- Fix duplicated icons — map to distinct lucide icons: Diabetes `Droplets`, Hypertension `HeartPulse`, Thyroid `Activity`, PCOS `Flower2`, Weight `Scale`, Cholesterol `Heart`, Fatty Liver `Pill`→`Leaf`, CKD `Waves`, Varicose `Footprints`, Musculoskeletal `Bone`, Gut `Salad`, Hormonal `Sparkles`, Autoimmune `Shield`, Senior `Sun`, Stress/Sleep `Moon`. Verify each exists in the installed `lucide-react` version.
- Cards: `card card-hover p-5`, icon tile `h-10 w-10 rounded-xl bg-brand-muted text-brand`, title `font-display text-[0.95rem] font-semibold`, desc `text-sm text-ink-secondary`. Stagger reveal.
- Expand/collapse: use CSS `grid-template-rows: 0fr → 1fr` transition (wrap hidden set in its own grid) or simply render all and animate with `Reveal`; button = `btn btn-secondary btn-sm`.
- Under the grid add a centered line: `text-sm text-ink-muted` "Don't see your condition? <a WhatsApp class="text-brand font-medium underline-offset-4 hover:underline">Ask us on WhatsApp</a>".

### 6. `testimonials.tsx`
- Layout: **featured** testimonial (Lata M, 67, powerlifter, 8 gold medals) as a large `card` spanning `lg:col-span-2` with photo `h-16 w-16`, a big Fraunces opening quote glyph (`font-display text-6xl text-accent/40 leading-none`), quote in `font-display text-xl sm:text-2xl leading-snug`, tags as `label-sm rounded-full bg-accent-muted text-accent`. Remaining 6 in `grid sm:grid-cols-2 lg:grid-cols-3 gap-5`, standard `card card-hover p-6`.
- Header: `eyebrow text-accent` "Real stories" + `display-lg` (was `display-md`, inconsistent). Container `max-w-7xl` like other sections (was `max-w-6xl px-6`).
- "See more" toggle → `btn btn-ghost btn-sm`.

### 7. `how-it-works.tsx`
- Keep 4 columns. Each step: big numeral `font-display text-5xl font-light text-ink-faint tabular-nums` ("01") top-left, icon tile to its right, then title/desc. Left-aligned on all breakpoints.
- Connector on `lg`: absolute dashed line `border-t border-dashed border-border-strong` across the top at the icon-tile midline, with each tile having `bg-surface-raised` so it masks the line (or use `before:` on each step except last).
- Stagger reveal 80ms.

### 8. `founder.tsx`
- Replace `border-on-dark-muted` (too heavy at 40%) with `border-on-dark-faint`; quote box `bg-surface-dark-raised/60 backdrop-blur`. Stats: value stacked over label, `grid grid-cols-2 sm:grid-cols-4 gap-6`. Photo `rounded-[1.75rem]`, add `shadow-[var(--shadow-float)]`. Remove `priority` (below fold). Wrap in `Reveal`.

### 9. `inner-circle.tsx`
- `card card-hover p-6 text-left` (left-align reads better), icon tile `h-11 w-11`. Shorten the intro paragraph to 2 sentences (it repeats the 4 cards). Stagger reveal.

### 10. `final-cta.tsx`
- Replace the triple "or" dividers. Structure inside the dark card (`rounded-[2rem] bg-surface-dark dark-grid p-8 sm:p-12`, `max-w-3xl`):
  1. `eyebrow eyebrow-center text-accent` "{batch.label}" with `live-dot`
  2. `display-lg text-on-dark` heading; `body-md text-on-dark-secondary` sub.
  3. Price row inline: `number-display text-4xl` ₹18,000 + `text-on-dark-muted` "for 3 months".
  4. Two buttons in a row on sm: `btn btn-accent btn-lg` "Enrol Now — Pay Securely" and `btn btn-on-dark btn-lg` WhatsApp.
  5. One footnote line with `ShieldCheck`.
  6. **One** divider "or get a free callback", then the form using `form-input form-input-dark` + `btn btn-on-dark` "Call me". Keep `source: "cta"`. Same phone picker as hero.

### 11. `footer.tsx`
- Add a brand statement row above the link grid: `font-display italic text-3xl sm:text-4xl text-on-dark` "{SITE_CONFIG.BRAND_LINE}" with `font-variation-settings: "SOFT" 100, "WONK" 1`. Divider `border-on-dark-faint`.
- All `border-on-dark-muted` → `border-on-dark-faint`. Container `max-w-7xl` to match. Remove the dead `Careers` `#` link. Social buttons use `.btn` press feedback.

### 12. `floating-whatsapp.tsx`
- Use `btn-whatsapp` + `shadow-[var(--shadow-float)]`, `transition: transform 160ms var(--ease-out)`, hover `scale-105` gated by `(hover:hover)`, active `scale-95`. Add `sr-only` label. Optional: hide it while `#contact` is in view (IntersectionObserver) so it doesn't overlap the final CTA.

## Mobile picker (shadcn) — for the phone field in hero + final CTA forms

**[USER WILL PASTE THE COMPONENT LINK/NAME HERE]**

Setup once you have it:
1. `npx shadcn@latest init` — Tailwind v4, CSS variables **yes**, base color neutral, alias `@/components`. When it writes CSS into `app/globals.css`, keep our existing tokens intact; map shadcn's `--primary` → `var(--color-brand)`, `--background` → `var(--color-surface)`, `--foreground` → `var(--color-ink)`, `--border` → `var(--color-border-strong)`, `--ring` → `var(--color-brand)`, `--radius: 0.875rem` so shadcn components inherit the brand.
2. Add the component the user specifies; place it in `components/ui/` (shadcn default) and build a small wrapper `app/components/phone-field.tsx` that exposes `value`/`onChange` as a plain E.164-ish string so both forms stay simple.
3. Must be touch-friendly (≥44px hit targets), keyboard `inputMode="tel"`, autocomplete `tel`, and keep the existing `required` validation. Match `.form-input` look (border 1.5px `border-strong`, radius 0.875rem, brand focus ring). Dark variant for the final CTA.
4. Do not pull in more shadcn components than needed.

## Out of scope (mention in summary, don't do)

- `/academy` and `/corporate` pages and `/admin` still use old inline `bg-[var(--…)]` utilities — they still work; refactor later.
- `app/lib/db.ts` hardcodes the Neon connection string — should move to `process.env.DATABASE_URL`.
- Footer links to `/privacy`, `/terms`, `/refund` have no pages.

## Definition of done

- `npm run build` and `npm run lint` pass with zero errors.
- No `bg-[var(--color-…)]` left in `app/sections/*`, `app/page.tsx`, `app/components/*`.
- Screenshots at 1440x900 and 390x844: hero fits above the fold with image visible on both; no horizontal overflow; anchors `#programs`, `#conditions`, `#about`, `#contact` land below the sticky header.
- Test `prefers-reduced-motion` (Chrome DevTools rendering panel) — no translate animations, content still visible.
