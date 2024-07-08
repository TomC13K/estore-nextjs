This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Commands to initialize project
```shell

# initialize n create new nextJS peoject
 npx create-next-app@latest . 

# needed for prisma ORM
npm i --save-dev ts-node

# install prisma ORM
npm install prisma --save-dev

# prisma initilize and setup sqlite locally
npx prisma init --datasource-provider sqlite

# DB migration with prism object when created in code
npx prisma migrate dev --name init

# tailiwind library
npx shadcn-ui@latest init

# adding the style for a card using shadcn
npx shadcn-ui@latest add card

# adding a button component & others below
npx shadcn-ui@latest add button
npx shadcn-ui@latest add table 

# components for forms
npx shadcn-ui@latest add label 
npx shadcn-ui@latest add input 
npx shadcn-ui@latest add textarea 

# validation library
npm i zod
```

ShadCN components will be in the COMPONENTS folder and UI