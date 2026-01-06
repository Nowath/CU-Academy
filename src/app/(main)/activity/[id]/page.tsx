export default async function ActivityIdPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    console.log(id)
    return (
        <div>ID: {id}</div>
    )
}