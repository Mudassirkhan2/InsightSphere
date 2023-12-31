import React from 'react'
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ item }) => {
    return (
        <div className='softBg p-4  w-fit md:p-4  rounded-lg flex gap-5 cursor-pointer md:w-full hover:bg-[#2e374a]'>
            <MdSupervisedUserCircle size={24} />
            <div className='flex flex-col gap-5'>
                <span className='text-xl'>{item.title}</span>
                <span className='text-2xl font-medium'>{item.number}</span>
                <span className='text-xs font-light '>
                    <span
                        className={`${item.change > 0 ? "text-green-500" : "text-red-500"} font-medium mr-2 `}
                    >
                        {item.change}%
                    </span>
                    {item.change > 0 ? "more" : "less"} than previous week
                </span>
            </div>
        </div>
    )
}

export default Card
