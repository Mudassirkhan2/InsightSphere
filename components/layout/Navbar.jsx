"use client";
import { usePathname } from "next/navigation";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";


const Navbar = () => {
    const pathname = usePathname()
    const displayPath = pathname.split("/").pop() || "dashboard";
    return (
        <div className="flex items-center justify-between p-2 rounded-lg md:p-5 softBg">
            <div className="font-bold capitalize text-softText">{displayPath}</div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 bg-[#2e374a] p-2 rounded-lg">
                    <MdSearch />
                    <input type="text" placeholder="Search..." className='hidden bg-transparent border-none md:block text-primary' />
                </div>
                <div className="flex gap-5">
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
