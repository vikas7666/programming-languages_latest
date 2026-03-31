import {notFound} from 'next/navigation';

export default async function ProducReview({params}: {params: Promise<{ reviewId: string }>}){
    const {reviewId } = await params;

    if(parseInt(reviewId) >1000){
        notFound()
    }
}