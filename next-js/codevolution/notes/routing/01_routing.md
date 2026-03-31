---

## Routing Conventions  

1. All routes must live inside the `app` folder
2. Route files must be named either `page.js` or `page.tsx`
3. Each folder represents a segment of the URL path

> When these conventions are followed, the file automatically becomes
> available as a route.

 ## Dynamic Segments

Routing metadata1  ssds
The Metadata API in Next.js is a powerful feature that lets us define metadata for each page
Metadata ensures our content looks great when it's shared or indexed by search engines
Two ways to handle metadata in layout.tsx or page.tsx files:

export a static metadata object
export a dynamic generateMetadata function


## Routing metadata
The Metadata API in Next.js is a powerful feature that lets us define metadata for each page
Metadata ensures our content looks great when it's shared or indexed by search engines
Two ways to handle metadata in layout.tsx or page.tsx files:

export a static metadata object
export a dynamic generateMetadata function

## Configuring metadata
Metadata rules

Both layout.tsx and page.tsx can export metadata. Layout metadata applies to all its pages, while page metadata is specific to that page
Metadata follows a top-down order, starting from the root level
When metadata exists in multiple places along a route, they merge together, with page metadata overriding layout metadata for matching properties