import React from 'react'

function Navbar() {
    return (
        <div className='flex items-center justify-between max-w-7xl mx-auto p-5'>
            <div>
                <h1 className='text-3xl font-semibold text-blue-900'><a href='#'>Yoga</a></h1>
            </div>
            <ul className='items-center gap-10 text-lg text-gray-500 font-medium hidden md:flex'>
                <li><a href='#' className='hover:text-blue-800 cursor-pointer'>Home</a></li>
                <li><a href='#programs' className='hover:text-blue-800 cursor-pointer'>Programs</a></li>
                <li><a href='#aboutUs' className='hover:text-blue-800 cursor-pointer'>About Us</a></li>
                <li><a href='#blogs' className='hover:text-blue-800 cursor-pointer'>Blogs</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                <button className='text-blue-900 font-medium'>Login</button>
                <button className='bg-blue-900 text-white py-2 px-6 rounded-full'>Free Trial</button>
            </div>
        </div>
    )
}

export default Navbar