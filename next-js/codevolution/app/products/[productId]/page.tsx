import { Metadata } from "next";

// ✅ Same Props type can be reused here
// params comes from the URL, it's a Promise so we must await it to get productId
export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
   const { productId } = await params;
   return <h1>Root Page.tsx : Detail about Product {productId}</h1>
}

type Props = {
   params: Promise<{ productId: string }>
}

export const generateMetadata = async ({ params, }: Props): Promise<Metadata> => {
   const id = (await params).productId
   const title = await new Promise((resolve) => {
      setTimeout(() => {
         resolve(`Iphone ${id}`)
      })
   })
   return {
      title: `Product ${title}`
   }
}

/* 
export const generateMetadata = async ({ params, }: Props): Promise<Metadata> => {
👉 “I’m exporting an async function called generateMetadata
👉 It takes an object of type Props
👉 I extract params from it
👉 And it returns a Promise that resolves to Metadata”

“This function will eventually give me a Metadata object.”

Step B: What does ({ params }: Props) mean?
This is object destructuring + type annotation

const generateMetadata = async (props: Props) => {
   const params = props.params
}

*/

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

// Step 1: Normal object
const user = {
   name: "Rahul",
   age: 25
}

// Without extracting (long way)
function printUser(userObj: any) {
   console.log(userObj.name)  // Rahul
}

/* 
async ({ params }: Props)
“Take params out of the object of type Props”
*/

type Props1 = {
   params: { productId: string }
}
// ❌ Without extracting
function getId(props: Props1) {
   console.log(props.params.productId)
}
// Even deeper extraction
// function getId({ params: { productId } }: Props) {
//    console.log(productId)
// }

// ({ params }: Props)
// “This function receives an object, and I immediately take out the params property from it.”

