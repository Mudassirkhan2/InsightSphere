import Pagination from '@/components/common/Pagination'
import Search from '@/components/common/Search'
import Image from 'next/image'
import Link from 'next/link'
import { fetchProducts } from '../../lib/data.js'
import { deleteProduct } from '@/lib/action.js'
import PieChartBox from '@/components/products/PieChartBox.jsx'

const page = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;

    const { count, products } = await fetchProducts(q, page);

    return (
        <div>
            <div className='p-5 mt-5 rounded-md softBg'>
                <div className='flex items-center justify-between'>
                    <Search placeholder='Search for a product' />
                    <Link href='/products/add'>
                        <button className='p-2 text-sm bg-[#5d57c9] text-white rounded-md cursor-pointer border-none'>Add Product</button>
                    </Link>
                </div>

                <table className='w-full'>
                    <thead>
                        <tr>
                            <td className='p-3 ' >Title</td>
                            <td className='p-3 '>Description</td>
                            <td className='p-3 '>Price</td>
                            <td className='p-3 '>Created At</td>
                            <td className='p-3 '>Stock</td>
                            <td className='p-3 '>Action</td>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            products.map((product) => (
                                <tr key={product.id}>
                                    <td className='p-3'>
                                        <div className='flex items-center gap-2'>
                                            <Image src={product.img || '/noproduct.jpg'} width={40} height={40} className='object-cover rounded-full' />
                                            {product.title}
                                        </div>
                                    </td>
                                    <td className='p-3'>
                                        {product.desc}
                                    </td>
                                    <td className='p-3'>${product.price}</td>
                                    <td className='p-3'>{product.createdAt?.toString().slice(4, 16)}</td>
                                    <td className='p-3'>{product.stock}</td>
                                    <td className='p-3'>
                                        <div className='flex gap-2'>
                                            <Link href={`/products/test${product.id}`}>
                                                <button className='px-2 py-1 text-white bg-teal-500 border-none rounded-md cursor-pointer'>View</button>
                                            </Link>

                                            <form action={deleteProduct}>
                                                <input type="hidden" name="id" value={product.id} />
                                                <button className='px-2 py-1 text-white bg-red-500 border-none rounded-md cursor-pointer'>Delete</button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>

                </table>
                <Pagination count={count} />
            </div>
            <div className='p-5 mt-5 rounded-md softBg'>
                <PieChartBox />

            </div>
        </div>
    )
}

export default page
