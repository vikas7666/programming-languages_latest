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
- `_` Private folder name start with underscore(_lib)
- `[] `dyanmic segment routes 
- `[...slug]` we can make any number of url such as docs/abc docs/abcc12 adn we can read it

## notFound() 
 - not-found.tsx must be same name.
 - we can crete as many as want not-found in our sub pages so that next fetch from nearby folder 
 -  or we can use ` notFound()` function by importing 
 ` import { usePathname } from "next/navigation`
 - notfound component does not accept props
 - Hook can we only use in clent component otherwise we need to define `useClient()` at tops of page

## - 11 - File Colocation
A Route can be only publically accesble when we add folder inside page.tsx or page.js
Note : if parent having a folder but doesnot have page.tsx, then route will work for both parent and child 

## private folder 
- this folder is just for internal stuff - don't include it in the routing system."
- The folder and all its subfolders are excluded from routing
- (_lib) Add an underscore at the start of the folder name
- If you actually want an underscore in your URL, use "%5F" instead. That's just
the URL-encoded version of an underscore.

# - 13 - Route Groups
- (auth) : auth will not work in browser only login logout register e.g /login /logout and /register
 auth is just for wrap a releted group form element 

## Layout 
- Pages are routes specific UI component
- A layout is ui that shared between multiple pages in your app
- e.g header content and footer 
- In app folder we have to must one layout folder , it is not optional , even if we deleted then also next will regnerated
- Every layount need a children props 
- When Layout.tsx render then it consider app.tsx will become an children

### how to create a layout 
- Default export a React component from a layout.js or layout.tsx file
- That component takes a children prop, which Next.js will populate with your page content
-  here we can give any function name and accept an argument such as children 

### Nested Layouts and how to create a layout 
` export default function ProductDetailLayout({ children, }: { children: React.ReactNode }) {
    return <>
        {children}
        <h2>feature Product of </h2>
    </>
}
`
### Multiple Root Layouts
- scenrio - header and footer is applciable for inside page but not form section

### Route Group uses:
Organize our project structure without affecting URLs
Apply layouts selectively to specific parts of our app

## Routing Metadata

- The Metadata API in Next.js is a powerful feature that lets us define metadata for each page
- Metadata ensures our content looks great when it's shared or searh engines
Two ways to handle metadata in layout.tsx or page.tsx files:
1. export a **static metadata object**
2. export a dynamic **generateMetadata** function
3 . we cannot use both at a same time such as a static and dyanmic genertor

### static metadata
`export const metadata = {
    title: 'About US',
    description: 'About us page information'
}
`
# Configuring metadata
Metadata rules
- Both **layout.tsx** and **page.tsx** can export metadata.
- Layout metadata applies to all its pages, while page metadata is specific to that page
- Metadata follows a top-down order, starting from the root level
- When metadata exists in multiple places along a route, they merge together, with
  page metadata overriding layout metadata for matching properties

  ### Metadata type
  -  metadata have default template absolute
  default - all over the app if we have not set yet
  template - "%s  | vikas" %s template will render in all the children component
  absolute  - from child only show child not anythings else means overides parent title

  Next.js 15 Tutorial - 19 - Link Component