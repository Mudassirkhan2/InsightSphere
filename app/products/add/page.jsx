import { addProduct, addUser } from '@/lib/action'
import React from 'react'
const page = async () => {
    return (
        <div className='p-5 mt-5 rounded-lg softBg '>
            <form action={addProduct} className='flex flex-wrap justify-between form' >
                <input type="text" placeholder="product title" name="title" required className='form-element w-[45%]' />
                <select name="cat" id="cat" className='form-element w-[45%]' >
                    <option value="general">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder="price" name="price" required className='form-element w-[45%]' />
                <input type="number" placeholder="stock" name="stock" required className='form-element w-[45%]' />
                <input type="text" placeholder="color" name="color" className='form-element w-[45%]' />
                <input type="text" placeholder="size" name="size" className='form-element w-[45%]' />
                <textarea
                    required
                    name="desc"
                    id="desc"
                    rows="16"
                    placeholder="Description"
                    className='w-full form-element'
                ></textarea>
                <button type="submit" className='inline-block p-2 bg-teal-600 border-none rounded-lg cursor-pointer text-end'>Submit</button>
            </form>
        </div>
    )
}

export default page
