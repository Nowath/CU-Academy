'use client'
import React from "react"
import { useRouter, usePathname } from "next/navigation"

export default function ActivityId() {
    const pathname = usePathname()
    const id = pathname.split("/")[2]
    return (
        <>
            {id}
        </>
    );
}
