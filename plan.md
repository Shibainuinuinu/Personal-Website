# Plan

Working notes for the portfolio. Two parts: refactors Kelvin is doing by hand, and the
in-progress project detail pages feature.

---

## Part 1 — Refactors to do

### Done

- `Reveal.tsx` — dynamic `duration` now applied via inline `style`, ref properly typed.
  Bidirectional fade (re-hiding on scroll-away) confirmed intentional, left as-is.
- `Elipitcal.tsx` — inverted guard, resetting counter, and stale-closure deps all fixed;
  renamed file/export/import to `Ellipsis` everywhere; `time` raised to `300`.
- `@upstash/redis` now a direct dependency instead of resolving by accident.
- `Nav.tsx` resume link — `app/Resume/` renamed to `app/resume/`, href is `/resume`.
- Design tokens — 9 tokens added to `@theme inline` in `globals.css`
  (`--color-surface`, `--color-surface-raised`, `--color-surface-alt`, `--color-tag`,
  `--color-accent`, `--color-text`, `--color-muted`, `--color-subtle`, `--color-hairline`);
  all matching hardcoded hex/rgba replaced across the site. Left alone: `ContactForm.tsx`'s
  input palette (separate scheme) and `SkillCard.tsx`'s per-skill `--brand*` variables
  (legitimately dynamic).
- `page.tsx` — `scrollIntoView` extracted into a `ScrollButton` client component; the
  home page is a server component again.
- Heading hierarchy — hero title is now `<h1>`; "Projects", "Skills", and "Contact Me"
  section titles are `<h2>`; `ProjectCard.tsx` card titles are `<h3>`; `SkillBoard.tsx`
  category titles are `<h2>`. One `<h1>` per page.
- `Type.tsx:9` — `Boolean` → `boolean`, and `wait` added to the `useEffect` deps array.
- `layout.tsx` — dead `Geist`/`Geist_Mono` imports, instances, and variables removed;
  only `JetBrains_Mono` remains.
- `globals.css` — dead `prefers-color-scheme: dark` block removed.
- `Carousel.tsx` — `items` lowercased; `ProjectCard` keyed on `item.title` instead of
  index; dead `disabled:` classes removed; `aria-label` added to prev/next buttons;
  dot indicators are now `<button>`s with `onClick`, `aria-label`, and `aria-current`.
- `ContactForm.tsx` — `status` typed as a union; `<label>`s added and linked via
  `id`/`htmlFor` on all three fields; `aria-live="polite"` on both status banners; 429
  vs. generic error now distinguished via the response's `data.error` message.
- `README.md` — rewritten for recruiters/visitors instead of create-next-app boilerplate.
- `layout.tsx` — metadata description fixed to "Personal Portfolio Website".
- Placeholder SVG paths in `data/projects.ts`, `route.ts`'s inline email template, and
  `PhotoCollage.tsx`'s inline `photos`/`SLOTS`/`BACK_SCALE` and `SLOTS[slotIndex]`
  bounds are all intentional/accepted as-is — not planned work.

### A. Bugs that are actively broken

*(none remaining — see Done above)*

### B. Structural

**7. `route.ts:11` — Ratelimit is constructed per request.** Move it to module scope
alongside the `resend` singleton on line 7, and add an ephemeral cache.

**13. `ProjectCard.tsx:11`** — ~~`target="_blank"` without `rel="noopener noreferrer"`~~ —
done. `link` is optional in the type, so `href` can still be `undefined` — deferred, not
fixing right now.

### C. Housekeeping

- No `.env.example` documenting the four required env vars
- Contact emails send from Resend's `onboarding@resend.dev` sandbox, which only delivers
  to the account owner — needs a verified domain for real use

---

## Part 2 — Project detail pages at `/projects/[slug]`

Additive feature. Every project gets its own page so the cards link somewhere real
instead of straight out to GitHub.

### Done

- **`data/projects.ts`** — added `slug` plus optional case-study fields (`role`,
  `timeframe`, `problem`, `approach`, `outcome`, `highlights`, `demo`), filled content
  for all 6 projects, added `getProjectBySlug()`.
- **`app/projects/[slug]/page.tsx`** — scaffolded. `generateStaticParams` (prerenders all
  6 at build), `generateMetadata` (per-project title/description), and the page component
  with `await params` + `notFound()` wiring. **UI body is a stub** — Kelvin is building it.
- **`app/projects/[slug]/not-found.tsx`** — 404 page for unknown slugs.
- **`CLAUDE.md`** — project documentation for agent sessions.

### Remaining

- **Build the detail page UI** in `app/projects/[slug]/page.tsx`. Guard optional fields
  with `{project.problem && ...}` so unfilled projects don't render empty headings.
- **`components/ProjectCard.tsx`** — wrap the card in a `Link` so it navigates. See the
  nested-anchor note below.
- ~~Fix `Nav.tsx:27`~~ — done, see Part 1 Done list.

### Verification

1. `npm run dev` — visit all 6 `/projects/<slug>` URLs; visit `/projects/nope` and
   confirm the not-found page renders; click the nav Resume link **from a detail page**.
2. `npx tsc --noEmit` — clean.
3. `npm run lint` — clean. A nested-anchor warning means `ProjectCard` isn't resolved.
4. `npm run build` — all 6 project routes should show as prerendered (`●`), not dynamic.
   If dynamic, `generateStaticParams` isn't wired right.
