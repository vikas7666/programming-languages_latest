# 📂 Routing Conventions

1. All routes must be placed inside the `app` folder  
2. Route files must be named either `page.js` or `page.tsx`  
3. Each folder represents a segment of the URL path  

> When these conventions are followed, the file automatically becomes available as a route.

---

# 🔀 Dynamic Segments

Dynamic segments allow you to create flexible and reusable routes based on parameters.

---

# 🧾 Routing Metadata

The **Metadata API** in Next.js is a powerful feature that allows you to define metadata for each page.

Metadata helps ensure that your content:
- Looks good when shared (e.g., on social media)
- Is properly indexed by search engines (SEO)

### There are two ways to handle metadata in `layout.tsx` or `page.tsx`:

#### 1. Static Metadata Object
```ts
export const metadata = {
  title: "Page Title",
  description: "Page description",
};