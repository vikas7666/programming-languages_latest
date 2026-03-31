import { Metadata } from "next";

type Props ={
    params: Promise<{productId : string}>
}

export const generateMetadata = async ({params} : Props) : Promise<Metadata> =>{
    const id = (await params).productId;
    return{
        title:` Product ${id}`
    }
}
export default async function ProductsDetails({params}: Props) {
    const { productId } = await params;
    return (
        <p>Product Details Page {productId}</p>
    )
}