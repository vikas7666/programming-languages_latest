# React + Vite — Notes

> 📺 Reference: [React + Vite Tutorial Playlist](https://youtu.be/IgZjyyG6DjQ?list=PLC3y8-rFHvwg9D7EOSEBabuutIdKZN5V3&t=1)

---

## 🚀 Project Setup

```bash
npm create vite@latest
```

---

## 📁 Project Structure

```
project/
├── index.html          ← Entry point of the app
├── src/
│   ├── main.jsx        ← Mounts the React app into the DOM
│   ├── App.jsx         ← Root component
│   └── index.css       ← Global styles
```

### Key Files

| File | Purpose |
|------|---------|
| `index.html` | Contains `<div id="root"></div>` — the mount point for React |
| `main.jsx` | Linked via `<script src="/src/main.jsx"></script>`; renders the app |
| `App.jsx` | The top-level root component |
| `index.css` | Global stylesheet, imported once at the app level |

---

## 🧩 Components

- Component files and function names **must start with an uppercase letter** (e.g., `MyButton`, `UserCard`).
- Each component lives in its own file inside a `components/` folder by convention.

### Why Uppercase?

React uses the **capitalization convention** to distinguish between:

| Syntax | Interpreted As |
|--------|---------------|
| `<div>` | Native HTML element |
| `<MyComponent>` | Custom React component |

> Without this distinction, React wouldn't know whether `<button>` refers to the HTML `<button>` element or a custom component named `button`.

---

## ⏭️ Skipped Topics

> Videos **#29 and #30** on `useReducer` were intentionally skipped.

---

## 📌 Quick Recap

1. Scaffold the project with `npm create vite@latest`
2. React mounts the app via `main.jsx` → `<div id="root">`
3. `App.jsx` is the root component; all other components nest inside it
4. Global styles go in `index.css`
5. **Always name components with an uppercase first letter** — this is how React tells custom components apart from built-in HTML tags
