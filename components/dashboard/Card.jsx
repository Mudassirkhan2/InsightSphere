import React from 'react'
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
    return (
        <div className='bg-softBg p-5 rounded-lg flex gap-5 cursor-pointer w-full hover:bg-[#2e374a]'>
            <MdSupervisedUserCircle size={24} />
            <div className='flex flex-col gap-5'>
                <span className='text-xl'>fbsfskfskfhshfsfhh</span>
                <span className='text-2xl font-medium'>10.23</span>
                <span className='text-xs font-light'>
                    <span >
                        12%
                    </span>
                    {/* {item.change > 0 ? "more" : "less"} than previous week */}
                </span>
            </div>
        </div>
    )
}

export default Card
