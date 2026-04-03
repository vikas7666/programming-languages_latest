import { notFound } from "next/navigation";
export default async function Docs({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    console.log('slug called ', slug[0])
    if (parseInt(slug[0]) > 1000) {  // if slug Url is more than 1000 then we are showing noFound()
        notFound()
    } else if (slug?.length === 2) {
        return (
            <div>
                Viewing docs of feature slug {slug[0]} and concept {slug[1]}
            </div>
        )
    } else if (slug?.length == 1) {
        return (
            <div>
                Viewing docs of feature slug {slug[0]}
            </div>
        )
    }
    return (<p>Product Details Page {slug}</p>)
}

// if we hit docs we get 404 that't why we wrap in [[...slug]] multiple array