"use client"
import { usePathname } from "next/navigation"
export default function NotFound(){
    const pathname = usePathname().split("/")[2];
    console.log('pathName',pathname)
    return(
        <h1> Requested Page is not found {pathname}  </h1>
    )
}