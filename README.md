# webpack-template

_Project Setup_

1. Clone your GitHub Webpack template repository

git clone <repository-url>
cd <project-folder>

2. Switch to the main branch

git checkout main

4. Install dependencies

npm install

5. Install Husky as a development dependency (if not already installed):

npm install husky --save-dev

6. Initialize Husky (new command): \*maybe not this...

npx husky-init

This will:
Set up the Husky configuration in your project.
Create a default pre-commit hook.

7. Verify ESLint and Prettier setup
   Run to check linting and formatting are working:

npx eslint .
npx prettier --check .
