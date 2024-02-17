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

1. Create a Github repository.
2. Commit your changes regularly.
3. Adjust your README.md to explain your project.
4. Deploy it to Netlify for free and put the URL in the README.md.
5. How should it look

![Image Description](../react-starter-project/src/assets/form-output.png)

**Time limit: 8 hours**

Starter Project references can be found [here](https://github.com/aimansae/react-starter-project)

# Getting Started

## Steps to use starter project

1. Create a new Repository in [Github]()
2. open command Plaette in Vs Code and type Git clone
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
git remote add origin *link to the new repo here*
git push origin master

## Styling With [TailwindCss](https://tailwindcss.com/docs/guides/create-react-app:
)

- Install tailwind: 
      npm install tailwindcss@latest postcss@latest autoprefixer@latest

- Create tailwind.config.js file:
      npx tailwindcss init

- Add content to tailwind.config.js file: 
      './src/**/*.{js,jsx,ts,tsx}'

- Download extension Tailwind CSS IntelliSense


### Form Validation

For form validation used Reach hoof form and Zod:

            npm install react-hook-form zod @hookform/resolvers