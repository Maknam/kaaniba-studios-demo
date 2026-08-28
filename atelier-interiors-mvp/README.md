# Atelier Living

A responsive luxury interior-design website and lead-generation MVP built with Next.js 15 and React 19.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```text
app/                     Routes, metadata, sitemap and API endpoints
components/
  design-space/          Design request wizard and focused step components
  home/                  Homepage sections
  layout/                Shared header and footer
  portfolio/             Archive, transformations, reels and draft uploader
  seo/                   Structured data
  ui/                    Small reusable interface components
config/                  Brand, contact and navigation settings
content/                 Editable marketing content and portfolio data
lib/                     Validation, analytics and request configuration
```

## Rebrand for a client

1. Update brand, contact, location and social settings in `config/site.js`.
2. Update projects, services, statistics and process copy in `content/home.js`.
3. Update consultation options in `lib/designRequestConfig.js`.
4. Replace the Unsplash demo images with licensed client photography.
5. Copy `.env.example` to `.env.local` and set the final production domain.

## Lead handling

`POST /api/design-request` validates each lead and currently logs it on the server. Connect the marked integration point to a CRM, email provider, webhook or database before launch.

Room photos remain client-side and only metadata is submitted. Add Cloudinary, Supabase Storage or S3 when persistent uploads are required.

## Portfolio workflow

- `/projects` is the public, filterable portfolio archive.
- `/project-studio` is a no-index frontend draft workspace for project copy, image galleries, before/after pairs and short video reels.
- Draft media currently lives only in the open browser tab. Add authentication, database records and cloud storage before giving the studio to a production client.
- Public portfolio entries, transformation images and reel sources currently live in `content/portfolio.js`.

## SEO and performance

- Route-specific metadata and canonical URLs
- Open Graph and Twitter sharing metadata
- `robots.txt` and XML sitemap generation
- Interior-design business structured data
- Self-hosted, optimized fonts through `next/font`
- Responsive AVIF/WebP portfolio images through `next/image`
- Semantic landmarks, headings, labels and accessible focus states
- Reduced-motion support

SEO rankings also depend on the final domain, original project copy, location pages, backlinks, Google Business Profile, page authority and ongoing content. Replace demo details before publishing.

## Production check

```bash
npm run build
npm start
```
