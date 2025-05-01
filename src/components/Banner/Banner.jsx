import React from 'react';
import bookimage from '../../assets/books.jpg';
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>
import  './Banner.css'

const Banner = () => {
    return (
        <div className='flex justify-around items-center bg-gray-100 p-10 rounded-2xl'>
            <div>
                <h2 className='text-4xl font-semibold playfair-display'>Books to freshen up <br /> your bookshelf</h2>
                <button className='btn  bg-[#23BE0A] text-white mt-10'>View The List</button>
            </div>
            <div>
                <img src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;