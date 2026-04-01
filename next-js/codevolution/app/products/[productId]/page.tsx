// import { Metadata } from "next";

// // ✅ Correct type for Next.js 15 — params is a Promise
// type Props = {
//   params: Promise<{ productId: string }>;
// };

// // ✅ Await params before accessing productId
// export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
//   const { productId } = await params;
//   return {
//     title: `Product ${productId}`,
//   };
// };

// ✅ Same Props type can be reused here
// params comes from the URL, it's a Promise so we must await it to get productId
export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  return <h1>Detail about Product {productId}</h1>
}

/* 
app/
└── products/
    └── [productId]/       👈 square brackets = dynamic route
        └── page.tsx

The folder name [productId] is special — the square brackets tell Next.js:
"This part of the URL is dynamic, capture it and give it to the page"

User visits URL:     /products/101
                              👇
Next.js sees:        [productId] = "101"
                              👇
Next.js passes:      params = { productId: "101" }
                              👇
Your component gets: params automatically as a prop


No! params is fixed/reserved by Next.js — you cannot rename it. But the value inside can be anything matching your folder name.

// ✅ correct
{ params }: { params: Promise<{ productId: string }> }

// ❌ cannot rename params
{ myData }: { myData: Promise<{ productId: string }> }  // won't work!
```

---

## What you CAN and CANNOT change
```
{ params } : { params : Promise<{ productId : string }> }
   👆                      👆              👆
   FIXED               FIXED            FLEXIBLE
   by Next.js          by Next.js       must match
   always "params"     always "params"  folder name [productId]
```

---

## Simple rule to remember
```
app/products/[productId]/page.tsx
              👆
              YOU choose this (folder name)
              
{ params }: { params: Promise<{ productId: string }> }
   👆                            👆
   ALWAYS "params"               MUST MATCH folder name
   (Next.js rule)                (your choice)

   export default async function ProductDetails({ params }: any) { beginner
*/