"use client"
import Link from "next/link";
import { use } from "react"
// export default async function ArticleDetails({ params, searchParams }: { //asyc and await is server component
export default function ArticleDetails({ params, searchParams }: {
    params: Promise<{ articleId: string }>
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>
}) {
    // const { articleId } = await params;             //  get acccess of param & search param we have use 
    // const { lang = "en" } = await searchParams;     // use hooks
    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);
    console.log('articleId', articleId)
    console.log('lang', lang)
    return (
        <>
            <h1>News Article {articleId}</h1>
            <p>Reading in language: {lang}</p>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        </>
    )
}