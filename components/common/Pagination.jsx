"use client"
import React from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const page = searchParams.get("page") || 1;

    const params = new URLSearchParams(searchParams);
    const ITEM_PER_PAGE = 2;

    const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

    const handleChangePage = (type) => {
        type === "prev"
            ? params.set("page", parseInt(page) - 1)
            : params.set("page", parseInt(page) + 1);
        replace(`${pathname}?${params}`);
    };

    return (
        <div className='flex justify-between p-2'>

            <button className='px-2 py-1 cursor-pointer disabled:cursor-not-allowed'
                onClick={() => handleChangePage("prev")}
                disabled={!hasPrev}

            >
                Previous
            </button>
            <button className='px-2 py-1 rounded-md cursor-pointer disabled:cursor-not-allowed bg-softText'
                onClick={() => handleChangePage("next")}
                disabled={!hasNext}

            >
                Next
            </button>
        </div>
    )
}

export default Pagination
