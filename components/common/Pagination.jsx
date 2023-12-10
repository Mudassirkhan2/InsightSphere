import React from 'react'

const Pagination = () => {
    return (
        <div className='flex justify-between p-2'>
            <button className='px-2 py-1 cursor-pointer disabled:cursor-not-allowed'>
                Previous
            </button>
            <button className='px-2 py-1 rounded-md cursor-pointer disabled:cursor-not-allowed bg-softText'>
                Next
            </button>
        </div>
    )
}

export default Pagination
