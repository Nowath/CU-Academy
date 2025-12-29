'use client'
import { use } from 'react'

export default function ActivityIdPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    console.log(id)
    return (
        <div>ID: {id}</div>
    )
}