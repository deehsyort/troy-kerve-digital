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

## JSDoc Generate documentation
Generate documentation based off of the comments in the project
```bash
npm run docs
```
P.S. I have already ran this command and generated docs which are now being hosted using github pages which can be found [here](https://deehsyort.github.io/troy-kerve-digital/)

## TODOs
    If I had more time I would do the following:

    - Update project so that we're using absolute paths with @ notation.
        - This is why I have file structure where the folder is the name of the component and the js file is called index.js
    - Optimize large SVGs.
    - Install dependencies for Jest testing frame work.
    - Add pages for the links
    - Create scrollTo function for the homepage (Not sure if this was part of the spec, it doesn't mention it)
    - make an icon component

    - If I had different layouts I would create a pages directory but im omitting that for now.
    - If I had more than one page I would create a pages directory but im omitting that for now.
    - If I had more than one hook I would create a hooks directory but im omitting that for now.
    - If I had more than one helper function I would create a lib directory but im omitting that for now.
    - If I was using something like scss modules I would have styles directory but im omitting that for now.