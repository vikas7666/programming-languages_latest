## Why Not Just React?

- React is only a **UI library**, not a full framework
- It is not fully featured to create a production-ready application on its own
- Missing built-in solutions for things like **routing**, data fetching, etc.
- react version : 19.0.
- next js : 19.0

## How project render 
-   **layout.tsx** root component, first load hotaa hai then o page.tsx app folder ko dekhtaa hai in this 
     case we have Home Component, then its render into root component

## What Next.js Provides

It uses React for building user interfaces, but also provides additional features
that enable you to build production-ready applications:

1. Routing
2. API routes
3. Optimized rendering
4. Data fetching
5. Styling
6. Optimization
7. Bundling, compiling and more

#### Create a Next.js Project
```bash
npx create-next-app@latest
```

# React Server Components (RSC)

React Server Components is a new architecture that was introduced by the React team and quickly adopted by Next.js

This architecture introduces a new approach to creating React components by dividing them into two distinct types:

- Server components
- Client components.

## Server Components

- By default, Next.js treats all components as Server components
- These components can perform server-side tasks like reading files or fetching data directly from a database
- The trade-off is that they can't use **React hooks** or **handle user interactions**

## Client Components

- To create a Client component, you'll need to add the **"use client"** directive at the top of your component file
- While Client components can't perform server-side tasks like reading files, they can use **hooks and handle ** user interactions
- Client components are the traditional React components you're already familiar with from previous versions of React

# Routing
Next.js has a file-system based routing system (inside app folder all the folder become route)
URLs you can access in your browser are determined by how you organize your files and folders in your code

## Routing conventions
- All routes must live inside the **app** folder
- Route files must be named either **page.js** or **page.tsx**
- Each folder represents a segment of the URL path
   When these conventions are followed, the file automatically becomes available as a route.

## next js folder conventions
- `()` Group a folder
- `_` folder name start with underscore
- `[] ` folder must start with for dyanmic segment routes 

## Layout 
Pages are routes specific UI component
A layout is ui that shared between multiple pages in your app

### how to create a layout 
- Default export a React component from a layout.js or layout.tsx file
- That component takes a children prop, which Next.js will populate with your page content