import React from 'react'
import Image from "next/image";
import { fetchUser } from '@/lib/data';
import { updateUser } from '@/lib/action';

const page = async ({ params }) => {
    const { id } = params;

    const user = await fetchUser(id);
    return (
        <div className='flex gap-12 mt-3'>
            <div className='flex-1 p-5 font-bold softBg rounded-xl text-softText h-max'>
                <div className='w-full h-[300px] relative rounded-lg overflow-hidden mb-5 '>
                    <Image src={
                        user.img || '/noavatar.png'
                    } alt={user.username} layout='fill' className='object-cover' />
                </div>
                {user.username}
            </div>
            <div className='flex-[3] softBg p-5 rounded-lg '>
                <form className='flex flex-col' action={updateUser}>
                    <input type="hidden" name="id" className='form-element' value={id} />
                    <label>Username</label>
                    <input type="text" name="username" placeholder={user.username} className='form-element ' />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email} className='form-element ' />
                    <label>Password</label>
                    <input type="password" name="password" className='form-element ' />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder={user.phone} className='form-element ' />
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder={user.address} className='form-element ' />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin" className='form-element '>
                        <option
                            value={true}
                            selected={user.isAdmin}
                        >Yes</option>
                        <option
                            value={false}
                            selected={!user.isAdmin}
                        >No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive" className='form-element '>
                        <option
                            value={true}
                            selected={user.isActive}
                        >Yes</option>
                        <option value={false}
                            selected={!user.isActive}
                        >No</option>
                    </select>
                    <button className='inline-block p-2 bg-teal-600 border-none rounded-lg cursor-pointer text-end w-max'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default page
