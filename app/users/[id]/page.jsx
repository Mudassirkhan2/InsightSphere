import React from 'react'
import Image from "next/image";

const page = () => {
    return (
        <div className='flex gap-12 mt-3'>
            <div className='flex-1 p-5 font-bold bg-softBg rounded-xl text-softText h-max'>
                <div className='w-full h-[300px] relative rounded-lg overflow-hidden mb-5 '>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                john doe
            </div>
            <div className='flex-[3] bg-softBg p-5 rounded-lg '>
                <form className='flex flex-col'>
                    <input type="hidden" name="id" className='form-element ' />
                    <label>Username</label>
                    <input type="text" name="username" placeholder='{user.username}' className='form-element ' />
                    <label>Email</label>
                    <input type="email" name="email" placeholder='{user.email} ' className='form-element ' />
                    <label>Password</label>
                    <input type="password" name="password" className='form-element ' />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder='{user.phone}' className='form-element ' />
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder='{user.address}' className='form-element ' />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin" className='form-element '>
                        <option value={true} >Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive" className='form-element '>
                        <option value={true} >Yes</option>
                        <option value={false} >No</option>
                    </select>
                    <button className='inline-block p-2 bg-teal-600 border-none rounded-lg cursor-pointer text-end w-max'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default page
