## Next.js Project Structure

1. `next.config.ts` — Next.js settings
2. `tsconfig.json` — TypeScript configuration
3. `eslint.config.mjs` — ESLint configuration
4. `tailwind.config.mjs` & `postcss.config.mjs` — Tailwind CSS setup
5. `next-env.d.ts` — TypeScript declaration file

- `package-lock.json` — Ensures proper/consistent versions of installed packages
- `.next/` — Auto-generated folder created when you run `dev` or `build` command

---

## React Server Components (RSC)

> ⚠️ If you delete `layout.tsx`, Next.js will **NOT** recreate it automatically.
> It is a **required** file in the App Router — deleting it will cause an error.
> You must recreate it manually.