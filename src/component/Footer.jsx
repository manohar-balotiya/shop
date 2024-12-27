import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (

        <footer className="font-sans tracking-wide bg-gray-300 text-black">
            <div className="py-12 px-12">
                <div className="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
                    <div>
                    <Link to="/">
                    <h1 className="font-bold text-3xl text-[#007bff]" >24Carat</h1>
                    </Link>
                    </div>

                    <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
                        <li><Link to="/about" className="text-black hover:underline text-base">About</Link></li>
                        <li><Link to="/support" className="text-black hover:underline text-base">Support</Link></li>
                        <li><Link to="/feature" className="text-black hover:underline text-base">Feature</Link></li>
                        <li><Link to="/contact" className="text-black hover:underline text-base">Contact</Link></li>
                    </ul>
                </div>

                <hr className="my-6 border-black" />

                <p className='text-center text-black text-base'>© <Link to="#" className="font-bold">24Carat</Link>. All rights reserved.</p>
            </div>
        </footer>

    )
}
