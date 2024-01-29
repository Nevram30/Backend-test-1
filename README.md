This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You will need a running mysql database. You can use the docker-compose file in the root of this project to start a mysql database.

```bash
docker-compose up -d
```

You will need to create a `.env.local` file in the root of this project with the following content:

```bash
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=root
DB_NAME=purpleroof
NODE_ENV=development

JWT_SECRET_KEY=
NEXTAUTH_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXT_BASEURL=http://localhost:3000

NEXT_PUBLIC_RECAPTCHA_SITE_KEY=

# Comma separated list of emails
ADMIN_EMAILS=

SENDGRID_API_KEY=

```

You can then run the development server:

```bash
npm run dev
# or
yarn dev
```

Then open the database and
