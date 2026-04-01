export default async function UserDetail({
    params
}: {
    params: Promise<{ userId: string }>   // 👈 matches [userId] folder
}) {
    const { userId } = await params;      // 👈 matches [userId] folder
    return <h2>Dynamic Route is working and we have created a dynamic route {userId}</h2>;
}
/*
Note : folder name [userId] must be same and param is reserved keyword where we get param data
Promise<> is called a Generic in TypeScript — the <> brackets tell TypeScript what type of data is inside the Promise!


Promise<{ userId: string }>
  👆        👆      👆
  |         |       |
  |         |       └── type of userId (text/string)
  |         |
  |         └── object inside the Promise { userId: string }
  |
  └── means "wait for this data, it's not ready yet"


Array<string>              // array of strings
Array<number>              // array of numbers
Promise<string>            // promise that gives a string
Promise<number>            // promise that gives a number
Promise<{ userId: string }> // promise that gives an object

Generic means "a container that can hold any type, but you specify which type"

// With generics TypeScript knows exactly what's inside!
const arr: Array<string> = [];
arr.push("hello");  // ✅ correct!
arr.push(123);      // ❌ TypeScript immediately warns you!
//                         "hey! this should be a string!"

*/
