import React from 'react'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md";
import MenuLinks from './MenuLinks';
import Image from 'next/image';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transactions",
                path: "/transactions",
                icon: <MdAttachMoney />,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/teams",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];
const Sidebar = () => {
    return (
        <div className='sticky top-10 '>
            <div className='flex items-center gap-5 mb-5'>
                <Image src="/noavatar.png" alt="logo" width={40} height={40} className='object-cover rounded-full' />
                <div className='flex flex-col'>
                    <span className='font-medium'>John Doe </span>
                    <span className='text-xs text-softText'>Administrator</span>
                </div>
            </div>
            <ul>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className='my-2 font-bold text-softText'>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLinks item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
