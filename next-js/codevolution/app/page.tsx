import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>Layout Component Loaded and it's render its child as : Page.tsx</div>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      {/* breaking-news-123 dyanmic route parameter and ?lang=en is query parameter */}
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}
