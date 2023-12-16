import React from 'react'
import { menuItems } from '../../../constants/index.js';

import MenuLinks from './MenuLinks';
import Image from 'next/image';
const SidebarMobile = () => {
    return (
        <ul className='flex items-center justify-center'>
            {menuItems.map((cat) => (
                <li key={cat.title} className='flex'>
                    {cat.list.map((item) => (
                        <MenuLinks item={item} key={item.title} />
                    ))}
                </li>
            ))}
        </ul>
    )
}

export default SidebarMobile
