# DLFLY Overseas

React and TanStack Start website for study abroad, visa guidance, permanent residency orientation and education finance. Service pages include preparation steps, checklists and FAQs. The original hero layout is preserved; the Framer Motion mobile menu overlays it. Articles, gallery images, YouTube videos and site settings are managed through Firebase at `/admin`.

Enquiries: +91 6304636998 and dlflyoverseas@gmail.com. The footer credits [Octaleads](https://www.octaleads.com).

## Local development

Use Node.js 22.12 or newer and Bun. Copy `.env.example` to `.env.local`, then fill the Firebase web configuration from the company's Firebase console. These are public frontend configuration values, not service-account credentials. Never commit passwords, access tokens or service-account keys.

```sh
bun install --frozen-lockfile
bun run dev
```

Shared brochure presentation lives in `src/components/dlfly-site.tsx`. Public pages use file-based routes and server-render published Firestore content. Visible pages refresh content every minute and when the browser window regains focus. Unpublished records are accessible only to the approved admin.

## Firebase and administration

The business project is `dlflyoverseas-18486`, with Firestore in Mumbai (`asia-south1`). Enable the Google authentication provider and add the final deployment hostname to Authentication → Settings → Authorized domains.

```sh
firebase use dlflyoverseas-18486
firebase deploy --only firestore
```

Use the company's account for cloud operations. `firestore.rules` enforces verified Google sign-in by **dlflyoverseas@gmail.com** on every write. The browser email check is an additional interface restriction, not the security boundary. `/admin` is excluded from indexing and analytics.

After signing in, expand **Starter content** and choose **Add starter articles and gallery**. It creates three prepared articles, three illustrative gallery entries and default settings only where those documents are missing. Existing records are preserved. Article URLs are fixed after creation. Drafts remain private; publishing, editing and deletion update public content.

Gallery and article images accept HTTPS image URLs or files under `/images/`. Optional Firebase Storage uploads require a bucket, the applicable Firebase billing plan and deployed `storage.rules`. Leave `VITE_ENABLE_STORAGE_UPLOADS=false` until those prerequisites are approved and configured. The optional uploader accepts raster images up to 5 MB.

Videos accept a YouTube URL or video ID. Public players use `youtube-nocookie.com` and load after the visitor presses Play. No unapproved company videos are preloaded. Website settings control the logo, office address, Maps embed URL, analytics IDs and Search Console verification value. The included logo comes from the DLFLY Google business account; replace it with a higher-resolution approved asset when available. The default map searches the company name; set the exact office embed in Settings once confirmed.

## Analytics and search

Set `VITE_SITE_URL` to the actual production origin before building. Canonical links, social metadata, Organization/Article structured data, `/sitemap.xml` and `/robots.txt` use this origin. The sitemap includes published articles and excludes admin pages.

The business integrations are GA4 `G-HZXF3MF7CH` and Microsoft Clarity `yu0nizh9b1`. Configure these through environment variables or admin Settings. Analytics load only after visitor consent; the footer reopens preferences. Keep GA4 enhanced measurement page views and browser-history tracking enabled to record client-side navigation.

For Search Console, create a URL-prefix property for the actual production URL, copy its HTML-tag verification value into `VITE_GOOGLE_SITE_VERIFICATION` before a rebuild or into admin Settings, verify ownership, then submit `sitemap.xml`. Tracking IDs in code do not by themselves confirm live collection or ownership verification.

## Validation

```sh
bun run typecheck
bun run lint
bun run test
bun run build
bunx playwright install chromium webkit
bun run test:e2e
```

The browser suite checks all public pages at desktop, tablet, Android, iPhone/WebKit and 320 px widths, the mobile dropdown without hero movement, content navigation, maps, admin entry, sitemap and robots. Content checks expect the starter articles and gallery to exist in the configured backend.

Install the official Firebase CLI and Java 21 to run the isolated emulator checks:

```sh
bun run test:rules
bun run test:admin
```

Rules tests exercise approved-admin access, anonymous access, other emails/providers, private drafts and invalid data. Admin browser tests use the demo Auth/Firestore emulators to check creation, draft privacy, publishing, video embedding, settings and deletion; they do not replace a real Google production sign-in test.

## Vercel deployment

Import the updated GitHub repository into the company's Vercel account. `vercel.json` selects TanStack Start, a frozen Bun install, the build command and security headers. Add the `.env.local` configuration to the deployment environment, excluding local emulator flags and any credentials. Confirm the final URL, rebuild with the matching `VITE_SITE_URL`, and add that hostname to Firebase authorized domains.

For a local production preview:

```sh
bun run build
bun run start
```

Nitro emits `.output/server/index.mjs` and `.output/public` locally, and the Vercel build output when running on Vercel. Build artifacts, credentials and local deployment links are ignored by Git.
