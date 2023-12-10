import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ placeholder }) => {
    return (
        <div className="flex items-center gap-2 bg-[#2e374a] p-2 rounded-lg" >
            <MdSearch />
            <input type="text" name="" id="" placeholder={placeholder} className='bg-transparent border-none text-primary' />
        </div>
    )
}

export default Search
