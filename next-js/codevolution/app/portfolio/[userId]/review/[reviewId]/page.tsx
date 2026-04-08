import Link from "next/link";

export default async function Review({ params }: { params: Promise<{ reviewId: string }> }) {
    const reviewId = (await params).reviewId;
    console.log('reviewId', reviewId)
    return <>
        <p> Hello Given review Id is {reviewId}</p>

        <Link href="" replace>blog Page {reviewId}</Link>
        <Link href={`/portfolio/${reviewId}/review/${reviewId}`}>blog Page {reviewId}</Link>
        <Link href="" replace>blog Page {reviewId}</Link>
    </>
}