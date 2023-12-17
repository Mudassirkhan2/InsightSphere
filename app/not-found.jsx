import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-[100vh] gap-2'>
            <h2>Under Construction</h2>
            <h3 className='font-mono text-2xl font-bold'>InsightSphere</h3>
            <p>Could not find requested resource</p>
            <Link href="/" className='p-4 mt-4 cursor-pointer softBg'>Return Home</Link>
        </div>
    )
}