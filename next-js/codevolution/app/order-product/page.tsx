"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/home')
    }
    return (
        <>
            <p>Order a product</p>
            <Link href="/">Home</Link>
            <Link href="/" onClick={handleClick}>Using Button click</Link>
        </>
    )
}