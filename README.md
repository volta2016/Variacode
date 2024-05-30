# Variacode technical challenge React + TypeScript + Vite

## technical challenge requirement

### Objective:

Please prepare an auto-complete component in React Typescript
Key Considerations:

1. We care about performance
2. Please do not use any 3rd party libraries
3. Provide proper interfaces for Typescript
4. In order to provide data to the search component you can use mock data but the filtering
   should be asynchronous
5. Important: Please take time to create an amazing user experience. We want you to
   showcase your CSS skills.
6. When showing the options available while the user type highlight the matching parts of
   the text.
7. No use of state management libraries
8. Please just use functional components with hooks
9. Please add a README.md file explaining how to run the project
10. Bonus: instead of using mock data use a real API call.
11. You can host this in a repo or .zip it

## Application Overview

This application is a simple product search and favorite management system. Users can search for products, view details of their favorite products, and see a loading skeleton while data is being fetched. The application is built with React, utilizing functional components and hooks for state management and side effects.

## Features

- Product Search: Allows users to search for products from a given dataset.
- Favorites List: Displays products that have been added to the user's favorites list.
- Loading Skeleton: Shows a loading skeleton while data is being fetched to improve user experience.
- Responsive Design: Adapts to different screen sizes for better usability on mobile devices.

# Prerequisites
Before you begin, ensure you have met the following requirements:

You have installed Node.js and npm (Node Package Manager).

## Steps to get the project up and running

Step 1: Clone the Repository

```bash
https://github.com/volta2016/variacode.git
cd variacode
```

Step 2: Install Dependencies
Install the required pnpm packages:

```bash
pnpm install
```

Step 3: Start the Development Server
This will run the application in development mode. Open http://localhost:5173/ to view it in the browser.

```bash
pnpm dev
```

## Project Structure

Here is an overview of the project's structure:

```bash
my-vite-app/
├── public/
│   ├── proxy-logo.svg/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── AutoComplete.tsx
│   │   └── Header.tsx
│   │   └── ListOfFavorites.tsx
│   │   └── Loader.tsx
│   │   └── ProductCard.tsx
│   │   └── SearchBar.tsx
│   │   └── SearchIcon.tsx
│   │   └── Skeleton.tsx
│   │   └── Suggestion.tsx
│   ├── styles/
│   │   └── auto-complete.css
│   │   └── global.css
│   │   └── skeleton.css
│   ├── test/e2e
│   │   └── autocomplete.spec.ts
│   │   └── list-of-favorites.spec.css
│   │   └── src/test/e2e/product-card.spec.ts
│   ├── types
│   │   └── types.ts
│   ├── App.tsx
│   ├── main.tsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── playwright.config.ts
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Components

1. AutoComplete.tsx: Handles the search functionality and displays the search bar, suggestions, and selected product details.
2. ListOfFavorites.tsx: Displays the list of favorite products.
3. Loader.tsx: Displays a loader while data is being fetched.
4. ProductCard.tsx: Displays details of a selected product.
5. SearchBar.tsx: Input field for searching products.
6. Skeleton.tsx: Displays a loading skeleton while data is being fetched.
7. Suggestions.tsx: Displays suggestions based on the search query.

## Styles

1. AutoComplete.css: Styles for the AutoComplete component.
2. ProductCard.css: Styles for the ProductCard component.
3. Skeleton.css: Styles for the Skeleton component.

## Types

1. types.ts: Type definitions for the project.

## Interface Definition

The Product interface in TypeScript is created to define the structure of a product object. This interface ensures that any product object used within the application will adhere to a specific format, providing type safety and consistency.

```ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
```

## Application Workflow

1. The application fetches product data from an API and stores it in the products state.
2. The user can search for products using the SearchBar component.
3. Search suggestions are displayed in the Suggestions component.
4. The user can select a product from the suggestions, which will display the product details in the ProductCard component.
5. A loading skeleton (Skeleton component) is displayed while data is being fetched or while search suggestions are being processed.

Inside that directory, you can run several commands:

# Testing e2e

command needed to run the tests with playwright

````bash
  pnpm exec playwright test
    Runs the end-to-end tests.

  pnpm exec playwright test --ui
    Starts the interactive UI mode.

  pnpm exec playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  pnpm exec playwright test example
    Runs the tests in a specific file.

  pnpm exec playwright test --debug
    Runs the tests in debug mode.

  pnpm exec playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:
    pnpm exec playwright test
```

command to run all tests
```bash
  pnpm exec playwright test
```

````

## Deploy of project

[See deploy](https://lambent-florentine-70fc83.netlify.app/)
