# Kelvin Fang — Personal Website

My personal portfolio site — a place to see what I've built, what I work with, and how
to get in touch.

**Live site:** _add your deployed URL here_

## What's on the site

- **Home** — a short intro, a look at my projects, and a skills overview
- **Project pages** — each project I've built gets its own page with more detail
- **Resume** — viewable directly in the browser
- **Contact form** — sends a message straight to my email

## Built with

- [Next.js](https://nextjs.org) + [React](https://react.dev) — the framework and UI library
- [Tailwind CSS](https://tailwindcss.com) — styling
- [TypeScript](https://www.typescriptlang.org) — type-safe code
- [Resend](https://resend.com) — sends emails from the contact form
- [Upstash](https://upstash.com) — rate-limits the contact form to prevent spam

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

The contact form needs a few environment variables in a `.env.local` file to actually
send email (`RESEND_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`,
`CONTACT_EMAIL`). Without them, the rest of the site still works fine.

## Contact

Reach out through the contact form on the site, or find me on
[LinkedIn](#) / [GitHub](#).
