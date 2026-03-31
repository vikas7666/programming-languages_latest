# 📘 TypeScript Notes

---

## 1. What is TypeScript?

> **TypeScript = JavaScript + Type Checking**

- Created by **Microsoft**
- TypeScript files use `.ts` extension
- Browsers/Node.js **cannot run TypeScript directly**
- Must be **compiled** into JavaScript first

```
TypeScript (.ts)  →  Compiler (tsc)  →  JavaScript (.js)
```

---

## 2. Statically-Typed vs Dynamically-Typed

| | Statically-Typed | Dynamically-Typed |
|---|---|---|
| **Examples** | C++, C#, Java, **TypeScript** | JavaScript, Python, Ruby |
| **Type check** | At **compile time** (before run) | At **runtime** (while running) |
| **Error caught** | Early ✅ | Late ❌ |

```ts
// ❌ DYNAMICALLY-TYPED — JavaScript
let number = 10;
number = "a";           // No error here...
Math.round(number);     // 💥 Crashes at runtime!

// ✅ STATICALLY-TYPED — TypeScript
let number: number = 10;
number = "a";           // ❌ Error caught immediately at compile time!
```

---

## 3. TypeScript is a Superset of JavaScript

```
┌─────────────────────────────┐
│       TypeScript (TS)       │
│   ┌─────────────────────┐   │
│   │   JavaScript (JS)   │   │
│   └─────────────────────┘   │
└─────────────────────────────┘
```

- ✅ Every valid `.js` file is also a valid `.ts` file
- TS **adds extra features on top** of JS
- TS gets compiled/removed — the output is just plain JS

---

## 4. Benefits ✅ and Drawbacks ❌

### ✅ Benefits
| Benefit | What it means |
|---|---|
| **Static Typing** | Errors caught before running the code |
| **Code Completion** | Editor suggests properties/methods automatically |
| **Refactoring** | Rename variables safely across the whole project |
| **Shorthand Notations** | Cleaner syntax for common patterns |

### ❌ Drawbacks
| Drawback | What it means |
|---|---|
| **Compilation** | Can't run `.ts` directly — must compile first |
| **Discipline in coding** | Must define types properly — more code upfront |

---

## 5. Installation & Setup ⚙️

```bash
# Step 1 — Install TypeScript globally
npm i -g typescript

# Step 2 — Check version (confirm install)
tsc -v
# Output: Version 4.6.3

# Step 3 — Compile a TypeScript file
tsc filename.ts       # creates filename.js

# Step 4 — Run compiled file
node filename.js

# Step 5 — Watch mode (auto-compile on save)
tsc filename.ts --watch
```

---

## 6. Basic Types

```ts
// ─── Primitive Types ───────────────────────────────
let name: string = "John"
let age: number = 25
let isActive: boolean = true
let nothing: null = null
let notDefined: undefined = undefined

// ─── Arrays ────────────────────────────────────────
let numbers: number[] = [1, 2, 3]
let names: string[] = ["Alice", "Bob"]

// ─── Any (avoid — defeats the purpose of TS) ───────
let anything: any = "hello"
anything = 42           // No error, but not safe!
```

---

## 7. Object Types & Interfaces

```ts
// ─── Inline object type ────────────────────────────
let user: { name: string; age: number } = {
    name: "John",
    age: 25
}

// ─── Interface — reusable object shape ─────────────
interface User {
    name: string
    age: number
    email?: string      // ? = optional property
}

const user1: User = { name: "Alice", age: 30 }
const user2: User = { name: "Bob", age: 25, email: "bob@gmail.com" }
```

---

## 8. Type vs Interface

```ts
// ─── Type alias ─────────────────────────────────────
type Point = {
    x: number
    y: number
}

// ─── Interface ──────────────────────────────────────
interface Point {
    x: number
    y: number
}

// KEY DIFFERENCE — Type can do unions, Interface cannot
type ID = string | number   // ✅ Union — either string OR number

let userId: ID = 1          // ✅
let userId2: ID = "abc"     // ✅
```

---

## 9. Functions

```ts
// ─── Typed parameters + return type ─────────────────
function add(a: number, b: number): number {
    return a + b
}

// ─── Arrow function ──────────────────────────────────
const greet = (name: string): string => {
    return `Hello ${name}`
}

// ─── void — function returns nothing ─────────────────
function log(message: string): void {
    console.log(message)
}

// ─── Optional parameter ───────────────────────────────
function show(message: string, userId?: number): void {
    console.log(message)
}

// ─── Default parameter ────────────────────────────────
function createUser(name: string, role: string = "user") {
    return { name, role }
}
```

---

## 10. Union & Intersection Types

```ts
// ─── Union — one OR the other ────────────────────────
type Status = "active" | "inactive" | "pending"

let userStatus: Status = "active"   // ✅
let bad: Status = "deleted"         // ❌ Error!

// ─── Intersection — combine two types ────────────────
type Admin = User & {
    adminLevel: number  // Has ALL User props PLUS this
}
```

---

## 11. Generics

```ts
// ─── Without generics — not reusable ─────────────────
function getFirstNumber(arr: number[]): number {
    return arr[0]
}

// ─── With generics — works with ANY type ─────────────
function getFirst<T>(arr: T[]): T {
//                 ^ T is a placeholder for any type
    return arr[0]
}

getFirst<number>([1, 2, 3])      // returns number
getFirst<string>(["a", "b"])     // returns string

// ─── Real world — API response type ──────────────────
type ApiResponse<T> = {
    data: T
    status: number
    message: string
}

const response: ApiResponse<User> = {
    data: { name: "Alice", age: 30 },
    status: 200,
    message: "success"
}
```

---

## 12. Type Assertions & Narrowing

```ts
// ─── Type Assertion — "trust me, I know the type" ────
const input = document.getElementById("name") as HTMLInputElement
input.value = "John"    // ✅ TS now knows it's an input element

// ─── Type Narrowing — check type at runtime ───────────
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase())   // ✅ TS knows it's string here
    } else {
        console.log(id.toFixed(2))      // ✅ TS knows it's number here
    }
}
```

---

## 13. Learning Roadmap 🗺️

```
Step 1 → Basic Types         (string, number, boolean, arrays)
Step 2 → Object Types        (interfaces, type aliases)
Step 3 → Functions           (typed params, return types)
Step 4 → Union Types         (string | number)
Step 5 → Generics            (<T> placeholder types)
Step 6 → Utility Types       (Partial<T>, Pick<T>, Omit<T>)
Step 7 → Advanced            (mapped types, conditional types)
```

---

## 14. Quick Reference Cheat Sheet 📋

```ts
// Types
let a: string
let b: number
let c: boolean
let d: string[]
let e: any

// Function
function fn(x: number): string { return String(x) }

// Interface
interface Obj { key: string; value?: number }

// Union
type ID = string | number

// Generic
function wrap<T>(val: T): T[] { return [val] }

// Type assertion
const el = document.querySelector(".btn") as HTMLButtonElement

// Optional chaining (works in TS too)
const city = user?.address?.city
```

---

## 15. Useful Resources 📚

| Resource | Link |
|---|---|
| Official Docs | https://www.typescriptlang.org/docs |
| TypeScript Playground | https://www.typescriptlang.org/play |
| Total TypeScript | https://www.totaltypescript.com |
| TypeScript Deep Dive | https://basarat.gitbook.io/typescript |

---

> 💡 **Pro Tip:** TypeScript doesn't change how JavaScript runs.  
> It only helps you write **safer, cleaner code** by catching mistakes **before** running!