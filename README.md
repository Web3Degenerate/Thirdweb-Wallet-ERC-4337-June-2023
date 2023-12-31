# Thirdweb [June 2023 ERC-4337 Tutorial](https://www.youtube.com/watch?v=-RNQ5GoghGY)

## Setup

1. Create a **Simple Wallet** on Third Web's Dashboard

   - Set up at [Contract Type Page](https://thirdweb.com/thirdweb.eth/AccountFactory)

2. AccountFactory Contract **0x9c21fA7FdDcB4734c1a44B062D743FF0f98bCF48**

3. Set up API Key in `Settings Tab`

   - Copy the **Client ID**

4. Install **Chakra**
   - run `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`
   -

## Getting Started

Create a project using this example:

```bash
npx thirdweb create --template next-typescript-starter
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

On `pages/_app.tsx`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.

## Environment Variables

To run this project, you will need to add environment variables. Check the `.env.example` file for all the environment variables required and add it to `.env.local` file or set them up on your hosting provider.

## Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Templates](https://thirdweb.com/templates)

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!
