export default async function Review({ params }: { params: Promise<{ reviewId: string }> }) {
    const reviewId = (await params).reviewId;
    return <p> Hello Given review Id is {reviewId}</p>
}