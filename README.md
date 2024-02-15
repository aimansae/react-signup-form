# React + TypeScript + Vite

This is a starter project for react.

Please find the Guidelines for the project:

**Requirements**


1. Use Vite (as a bundler)
2. Use Typescript
3. Configure TS path aliases
4. Configure [Jest](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation) & React testing library and write a single or multiple unit tests. They all have to be passing! (For example, you can test if a text is being rendered in a component.)
No specific functionality is necessary (like headings, buttons, pages, etc.) - at the end, it’s just a starter.
Do not add any styling libraries. - We want to have a flexible starter!


**Additional requirements**

1. Create a Github repository.
2. Commit your changes frequently. (For example - you’ve just initialised the project - commit “Initial commit”. You’ve configured the tsconfig.json, another commit) Keep them small but meaningful.
   Adjust your README.md to explain your project better.

**Time limit**
4 hours


1. To install [Vite](https://vitejs.dev/guide/) as a bundler:

   npm create vite@latest


- follow the Indications on the terminal, select a name, React as Framework, Typescript as Variant
- to run the project type in terminal:


  cd (folder name) react-starter
  npm i
  npm run dev


3. to configure Ts path aliases in tsconfig.json add :


"baseUrl": "./",
"paths": {
"@app/_": ["src/_"],
"@shared/_": ["src/shared/_"]
}


- Update Module Resolution (For Node.js):


  npm install tsconfig-paths --save-dev


4. To configure Jest and React testing library:

    npm install --save-dev jest typescript ts-jest @types/jest

    npm install --save-dev jest @testing-library/react @testing-library/jest-dom

    npm install --save-dev jest-environment-jsdom


    npx ts-jest config:init

Configure jext.config.cjs file:

    /* eslint-disable no-undef */
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { defaults } = require('ts-jest/presets/index.js');

  module.exports = {
  ...defaults,
  testEnvironment: 'jsdom',
};

Package.json file add script: test:"jest"

5. Created a component, a Text.test.tsx file to test if the heading is being rendered


- While running npm test, encountered error: " "Missing script" : 'test'"


Fixed: in package.json added:
  "scripts": {
  "test": "jest"
}

- TypeError: expect(...).toHaveTextContent is not a function

## Setup Github
