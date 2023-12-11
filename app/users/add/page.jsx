import React from 'react'

const page = () => {
    return (
        <div className='p-5 mt-5 rounded-lg bg-softBg '>
            <form className='flex flex-wrap justify-between form'>
                <input type="text" placeholder="username" name="username" required className='form-element w-[45%]' />
                <input type="email" placeholder="email" name="email" required className='form-element w-[45%]' />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                    className='form-element w-[45%]'
                />
                <input type="phone" placeholder="phone" name="phone" className='form-element w-[45%]' />
                <select name="isAdmin" id="isAdmin" className='form-element w-[45%]'>
                    <option value={false}>
                        Is Admin?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive" className='form-element w-[45%]'>
                    <option value={true}>
                        Is Active?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    name="address"
                    id="address"
                    rows="16"
                    placeholder="Address"
                    className='w-full form-element'

                ></textarea>
                <button type="submit" className='inline-block p-2 bg-teal-600 border-none rounded-lg cursor-pointer text-end'>Submit</button>
            </form>
        </div>
    )
}

export default page
