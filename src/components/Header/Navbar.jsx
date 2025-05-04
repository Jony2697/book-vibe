import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links=<>
            <Link to={'/'}><li className='m-2 border-1 border-green-500 text-green-600 p-2 px-4 rounded-xl font-semibold hover:bg-gray-100'>Home</li></Link>
            <Link to={'/readList'}><li className='m-2 p-2 font-semibold hover:bg-gray-100 rounded-xl'>Listed Books</li></Link>
            <Link to={'/about'}><li className='m-2 p-2 font-semibold hover:bg-gray-100 rounded-xl'>Pages to Read</li></Link>

    </>
    return (
        
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-6 shadow font-semibold">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3 ">
                <a className="btn bg-[#23BE0A] text-white border-none">Sign In</a>
                <a className="btn bg-blue-400 text-white border-none">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;