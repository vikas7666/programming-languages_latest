import { notFound, redirect } from 'next/navigation';

export default async function ProductReview({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = await params;

    function randomNumber(count: number) {
        return Math.floor(Math.random() * count)
    }
    const random = randomNumber(2);
    console.log('random', random)
    if (random === 1) {
        throw new Error("Error loading review")
    }
    if (parseInt(reviewId) > 1000) {
        // notFound()
        console.log('review id', reviewId)
        redirect('/products')
    }
    return (
        <h1>ReviewID called  {reviewId} for the product {productId}</h1>
    )

}