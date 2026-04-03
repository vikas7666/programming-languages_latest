"use client"
import { usePathname } from "next/navigation"
export default function NotFound() {
    console.log('usePathname', usePathname())  // from usePathname hook we get pathanme from browser
    const pathname = usePathname().split("/")[2];
    return (
        <h1> Requested Page is not found <span style={{ color: 'red', fontWeight: 'bold' }}>{pathname}</span></h1>
    )
}