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
                    <input type="hidden" name="id" value='{product.id}' className='form-element ' />
                    <label>Title</label>
                    <input type="text" name="title" placeholder='{product.title}' className='form-element ' />
                    <label>Price</label>
                    <input type="number" name="price" placeholder='{product.price} ' className='form-element ' />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder='{product.stock}' className='form-element ' />
                    <label>Color</label>
                    <input
                        type="text"
                        name="color"
                        placeholder="color"
                        className='form-element '
                    />
                    <label>Size</label>
                    <textarea
                        type="text"
                        name="size"
                        placeholder="size"
                        className='form-element '
                    />
                    <label>Cat</label>
                    <select name="cat" id="cat" className='form-element '>
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows="10"
                        placeholder='{product.desc}'
                        className='form-element '
                    ></textarea>
                    <button className='inline-block p-2 bg-teal-600 border-none rounded-lg cursor-pointer text-end w-max'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default page
