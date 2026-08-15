# Sourov Chandra Adikari | Portfolio

A professional portfolio website built with Next.js to showcase full-stack projects, experience, education, and contact information.

## Overview

This portfolio highlights a clean developer brand, strong frontend fundamentals, and practical product work. It includes project case studies, a resume section, contact form, and a responsive layout optimized for desktop and mobile devices.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Node.js
- Nodemailer
- Vercel deployment

## Features

- Responsive fixed sidebar navigation and mobile drawer
- Home, About, Skills, Projects, Experience, Education, Resume, and Contact pages
- Centralized project data with featured project cards and dynamic case-study routing
- Contact form with validation and SMTP-backed email delivery
- SEO metadata, Open Graph tags, sitemap, and robots configuration
- Progressive loading with server-rendered sections and dynamic imports

## Pages

- Home
- About
- Skills
- Projects
- Project case studies
- Experience
- Education
- Resume
- Contact

## Featured Projects

### SCA Courier
- GitHub: https://github.com/URSourovAdikari/sca-courier
- Live: https://sca-courier.vercel.app/

### SCA Shop
- GitHub: https://github.com/URSourovAdikari/sca-shop
- Live: https://sca-shop.vercel.app/

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Environment Variables

Create a `.env.local` file and add the SMTP credentials used by the contact form.

```bash
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
CONTACT_EMAIL=your-contact-email
```

## Nodemailer Setup

The contact API at `/api/contact` uses Nodemailer for sending portfolio messages. It validates required form fields, checks email format, applies rate limiting, and safely handles errors without exposing SMTP credentials.

## Deployment

This project is designed for deployment on Vercel. For production, set the same SMTP environment variables in the hosting environment and verify the domain is configured for metadata and sitemap generation.

## Security

- Do not commit `.env`, `.env.local`, or any SMTP credentials.
- Keep `node_modules`, `.next`, and generated build output out of version control.
- Never expose sensitive email credentials in code or logs.
