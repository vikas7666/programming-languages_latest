"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [input, setInput] = useState();

    const navLink = [
        { name: 'login', href: "/login" },
        { name: 'logout', href: "/logout" },
        { name: 'register', href: "/register" },
    ]
    const pathName = usePathname()
    console.log('pathName', pathName)
    return (
        <>
            {children}
            <input type="text" value={input} />
            {
                navLink.map((link, index) => {
                    const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== "/")
                    return (
                        <div key={link.href}>
                            <Link className={isActive ? "font-bold mr-4" : 'text-blue-500 mr-4'} href={link.href}>{link.name}</Link>
                        </div >
                    )
                })
            }
            <footer style={{ backgroundColor: 'pink', color: 'black' }}>
                Seperate login layout footer
            </footer>
        </>
    )
}