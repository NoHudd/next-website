# My Website

A modern portfolio website built with Next.js and Strapi CMS.

## Project Structure

```
myWebsite/
├── mynextwebsite/     # Frontend (Next.js)
└── my-strapi-blog/    # Backend (Strapi CMS)
```

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd mynextwebsite
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd my-strapi-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file with your database and admin credentials.

4. Start the Strapi server:
   ```bash
   npm run develop
   # or
   yarn develop
   ```

## Environment Variables

### Frontend (.env.local)
- `NEXT_PUBLIC_STRAPI_URL`: URL of your Strapi backend

### Backend (.env)
- Database configuration
- Admin credentials
- JWT secret
- API token

## Features

- Modern, responsive design
- Dark mode support
- Blog functionality
- Contact form
- Portfolio showcase
- SEO optimized
- Image optimization
- Smooth animations

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React

### Backend
- Strapi CMS
- PostgreSQL
- REST API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 