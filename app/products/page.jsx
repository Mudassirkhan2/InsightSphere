import Pagination from '@/components/common/Pagination'
import Search from '@/components/common/Search'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
    return (
        <div className='p-5 mt-5 rounded-md bg-softBg'>
            <div className='flex items-center justify-between'>
                <Search placeholder='Search for a product' />
                <Link href='/products/add'>
                    <button className='p-2 text-sm bg-[#5d57c9] text-white rounded-md cursor-pointer border-none'>Add Product</button>
                </Link>
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-3'>
                            <div className='flex items-center gap-2'>
                                <Image src='/noproduct.jpg' width={40} height={40} className='object-cover rounded-full' />
                                Iphone
                            </div>
                        </td>
                        <td className='p-3'>Desc</td>
                        <td className='p-3'>$100</td>
                        <td className='p-3'>13/12/2002</td>
                        <td className='p-3'>Active</td>
                        <td className='p-3'>
                            <div className='flex gap-2'>
                                <Link href='/products/test'>
                                    <button className='px-2 py-1 text-white bg-teal-500 border-none rounded-md cursor-pointer'>View</button>
                                </Link>
                                <button className='px-2 py-1 text-white bg-red-500 border-none rounded-md cursor-pointer'>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default page
