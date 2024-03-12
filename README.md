# Signup Form

This is a simple React Signup Form project made using a starter project for react.
Please find the Guidelines for the project:

## Requirements: Create a Sign up form project.

1. Use the previous starter project, to kick-start your development.
2. Create a new repository and push the starter as initial commit.
3. Pick a styling solution of your choice. (I’d suggest you to use TailwindCSS). Once configured, push your changes! Keep your commit messages consistent and meaningful!
   Start implementing the sign up form. Make sure to implement input validations. Handle the errors gracefully by showing error messages below each input.
4. Use a pair of hardcoded username and password (and display them somewhere) to simulate the success output.
5. For all other pairs of username/password simulate error output. (display an error message somewhere for example).
6. Make sure the design is responsive (doesn’t have to be perfect, but it should at least look good and not be completely broken)
7. Add tests, no excuses

## Additional requirements

1. Create a Github [repository](https://github.com/).
2. Commit your changes regularly.
3. Adjust your README.md to explain your project.
4. Deploy it to Netlify for free and put the URL in the README.md.
5. How should it look

![Image Description](./src/assets/form-output.png)

**Time limit: 8 hours**

Starter Project references can be found [here](https://github.com/aimansae/react-starter-project)

# Getting Started

## Steps to use starter project

1. Create a new Repository in [Github](https://github.com/aimansae/react-signup-form)
2. open command Palette in Vs Code and type Git clone
3. Paste the link from Github's starter project (all files will be locally imported to VsCode)
4. Make sure no node_module files are there
5. In terminal type:
   npm i

Start Project with:

      npm run dev

### Commit Repo to Git

In terminal type:
git add .
git commit -m 'Commit message here'
git remote remove origin
git remote add origin _link to the new repo here_
git push origin master

## Styling With [TailwindCss](https://tailwindcss.com/docs/guides/vite)

- Install tailwind:
  npm install tailwindcss@latest postcss@latest autoprefixer@latest

- Create tailwind.config.js file:
  npx tailwindcss init

- Add content to tailwind.config.js file:
  './src/\*_/_.{js,jsx,ts,tsx}'

- Download extension Tailwind CSS IntelliSense

**For better development experience, as per
mentor's advice**

- [Installed Prettier plugin](https://tailwindcss.com/docs/editor-setup#automatic-class-sorting-with-prettier)
- [Created custom theme](https://tailwindcss.com/docs/theme)
- [Added custom classes](https://tailwindcss.com/docs/adding-custom-styles)

### Form Validation

For form validation used Reach hoof form and Zod:

            npm install react-hook-form zod @hookform/resolvers

### Prettier [Setup](https://github.com/tailwindlabs/prettier-plugin-tailwindcss):

npm install -D prettier prettier-plugin-tailwindcss

Create .prettierrc file in root directory and add configuration:
{
"semi": true,
"tabWidth": 2,
"printWidth": 100,
"singleQuote": true,
"trailingComma": "none",
"jsxBracketSameLine": true,
"plugins": ["prettier-plugin-tailwindcss"]
}

## Troubleshooting

While running tests encountered the following paring error for focusImage

![Image Error1](./src//assets/image-error1.PNG)
![Image Error2](./src//assets/image-error1.PNG)

**Fixed** by installing:
npm install --save-dev jest-transform-stub

    include transformer for images in package.json file:
      "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/node_modules/jest-transform-stub"

}

Solution did not work

1. Created a \_ _mocks_ \_ directory with imageMock.js file in it:
   module.exports = "test-file-stub";

2. Removed jest.config.cjs file, add the configuration under Jest in package,json file:
   "jest": {
   "moduleNameMapper": {
   "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/**mocks**/imageMock.js"
   }
   }

While running test for Card Component faced the following error:
![Jest Error](./src//assets/tobeindoc.PNG)

**Fixed**:

toBeInTheDocument is not part of RTL. Need to install [jest-dom](https://github.com/testing-library/jest-dom/) to enable it.

    npm install --save-dev @testing-library/jest-dom

With TypeScript, setup file is a .ts and not a .js .

Include your setup file in your tsconfig.json if you haven't already:

// In tsconfig.json
"include": [
...
"./jest-setup.ts"
],  
And then import it in your test files by:

import '@testing-library/jest-dom'

To install user event:
npm install --save-dev @testing-library/user-event @testing-library/dom

## Deployment

The app is deployed using [Netlify](https://as-react-signup-form.netlify.app/)

// What to test? Ensure the component renders, renders with props, according to state, it reacts/handles to events (form, input buttons)

### Additional info and Resources:

to run tests: npm test
to watch tests: npm run test -- --watch

React testing [tutorial](https://www.youtube.com/watch?v=2TkpBziqkRA&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=11)
Jest [Matchers](https://jestjs.io/docs/using-matchers)

React Testing library [GetByRole](https://testing-library.com/docs/queries/byrole)
[HTML ROLES](https://www.w3.org/TR/html-aria/#docconformance)

React Testing [Playground Extension](https://chromewebstore.google.com/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano)

[Automatic Classes sorting with Prettier](https://tailwindcss.com/docs/editor-setup#automatic-class-sorting-with-prettier)

- [Spell check extension](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)