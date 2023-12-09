import Image from 'next/image';
import React from 'react'

const Transactions = () => {
    return (
        <div className='p-5 rounded-lg bg-softBg'>
            <h2 className='mb-5 font-extralight text-softText'>Latest Transactions</h2>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2'>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className='object-cover rounded-full'
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className='p-1 rounded text-white bg-[#f7cb7375]'>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td className='p-2'>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className='object-cover rounded-full'
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className='p-1 rounded text-white bg-[#afd6ee75]'>Done</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td className='p-2'>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className='object-cover rounded-full'
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className='p-1 rounded text-white bg-[#f7737375]'>
                                Cancelled
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td className='p-2'>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className='object-cover rounded-full'
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className='p-1 rounded text-white bg-[#f7cb7375]'>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default Transactions
