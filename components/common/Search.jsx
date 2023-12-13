"use client"
import React from 'react'
import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    // Use the useRouter hook from Next.js to get the replace function
    const { replace } = useRouter();
    // Get the current path
    const pathname = usePathname();

    // Create a debounced callback to handle search input changes
    const handleSearch = useDebouncedCallback((e) => {
        // Create a new URLSearchParams object from the current search parameters
        const params = new URLSearchParams(searchParams);
        // Set the page parameter to 1
        params.set("page", 1);
        // If the user has entered a value in the search field
        if (e.target.value) {
            // If the length of the value is more than 2, set the q parameter to the user's input
            e.target.value.length > 2 && params.set("q", e.target.value);
        } else {
            // If the user hasn't entered a value in the search field, delete the q parameter
            params.delete("q");
        }
        // Update the URL with the new search parameters
        replace(`${pathname}?${params}`);
    }, 300); // The delay is 300 milliseconds
    return (
        <div className="flex items-center gap-2 bg-[#2e374a] p-2 rounded-lg" >
            <MdSearch />
            <input type="text" name="" id="" placeholder={placeholder} className='text-white bg-transparent border-none outline-none' onChange={handleSearch} />
        </div>
    )
}

export default Search
