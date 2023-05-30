This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting started

Clone the directory

```bash
git clone https://github.com/deehsyort/troy-kerve-digital.git
```

Change into the root directory of the project

```bash
cd troy-kerve-digital
```

Install required NPM packages

```bash
npm install
```

## Dev
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook
Run the storybook server:

```bash
npm run storybook
```
Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

## SVGO
Optimize svgs (if you want too, remeber to update paths):

```bash
npm run svgo
```
Outputs optimized svg assets into an optimized directory so you can use with src attribute.

## TODOs
    If I had more time I would do the following:
    - Update project so that we're using absolute paths with @ notation.
    - Optimize large SVGs.
    - Install dependencies for Jest testing frame work.
    - Install JsDoc to document each component and its intentions.
    - Improve the look of the scrollbar