"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const MenuLinks = ({ item }) => {
    const pathname = usePathname()

    return (
        <Link href={item.path} className={`flex p-5 items-center gap-2 my-1 rounded-md  hover:bg-[#2e374a] ${pathname === item.path ? "bg-[#2e374a]" : ""}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLinks
