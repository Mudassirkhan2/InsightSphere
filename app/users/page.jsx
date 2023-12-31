import Pagination from '@/components/common/Pagination'
import Search from '@/components/common/Search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchUsers } from '../../lib/data.js'
import { deleteUser } from '@/lib/action.js'
import BarChartBox from '@/components/users/BarChartBox.jsx'

const page = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;

    const { count, users } = await fetchUsers(q, page);
    return (
        <div>
            <div className='p-5 mt-5 rounded-md softBg'>
                <div className='flex items-center justify-between'>
                    <Search placeholder='Search for a user' />
                    <Link href='/users/add'>
                        <button className='p-2 text-sm bg-[#5d57c9] text-white rounded-md cursor-pointer border-none'>Add User</button>
                    </Link>
                </div>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <td className='p-3'>Name</td>
                            <td className='p-3'>Email</td>
                            <td className='p-3'>Created At</td>
                            <td className='p-3'>Role</td>
                            <td className='p-3'>Status</td>
                            <td className='p-3'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td className='p-3'>
                                        <div className='flex items-center gap-2'>
                                            <Image src={user.img || '/noavatar.png'} width={40} height={40} className='object-cover rounded-full' />
                                            {user.username}
                                        </div>
                                    </td>
                                    <td className='p-3'>{user.email}</td>
                                    <td className='p-3'>{user.createdAt?.toString().slice(4, 16)}</td>
                                    <td className='p-3'>{user.isAdmin ? "Admin" : "client"}</td>
                                    <td className='p-3'>{user.isActive ? "active" : "passive"}</td>
                                    <td className='p-3'>
                                        <div className='flex gap-2'>
                                            <Link href={`/users/${user.id}`}>
                                                <button className='px-2 py-1 text-white bg-teal-500 border-none rounded-md cursor-pointer'>Edit</button>
                                            </Link>
                                            <form action={deleteUser}
                                            >
                                                <input type="hidden" name="id" value={user.id} />
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
            <BarChartBox />
        </div>
    )
}

export default page
