import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDb';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    console.log(singleBook);

    const { bookName, image, review, tags, author, category, totalPages, publisher, yearOfPublishing, rating } = singleBook;

    // console.log(typeof bookId);

    const handleRead=(id)=>{

        addToStoredDB(id);

    }

    return (
        <div className='lg:flex  gap-8 '>
            <div className="lg:w-1/2 bg-gray-200 rounded-2xl p-10">
                <img className='md:w-[40%] lg:w-[70%] mx-auto' src={image} alt="" />
            </div>
            <div className='lg:w-1/2'>
                <h2 className='playfair-display text-2xl font-semibold'>{bookName}</h2>
                <p className='font-semibold mt-2'>By : {author}</p>
                <div className="border-b border border-gray-300 mt-2 mb-2"></div>
                <h4 className='font-semibold'>{category}</h4>
                <div className="border-b border border-gray-300 mt-2 mb-2"></div>
                <p><span className='font-bold'>Review : </span>{review}</p>
                <p><span className='font-semibold mt-6'>Tag</span>
                    {
                        tags.map((tag,index) => <button key={index} tag={tag} className="bg-gray-100 text-green-600 p-1 px-2 ml-2 rounded-xl font-semibold">#{tag}</button>)
                    }
                </p>
                <div className="border-b border border-gray-300 mt-2 mb-2"></div>
                <div className=''>
                    <div className='flex items-center gap-20'>
                        <p>Number of Pages:</p>
                        <span className='font-semibold '>{totalPages}</span>
                    </div>
                    <div className='flex gap-34'>
                        <p>Publisher:</p>
                        <span className='font-semibold '>{publisher}</span>
                    </div>
                    <div className='flex gap-20'>
                        <p>Year of Publishing:</p>
                        <span className='font-semibold'>{yearOfPublishing}</span>
                    </div>
                    <div className='flex gap-40'>
                        <p>Rating:</p>
                        <span className='font-semibold'>{rating}</span>
                    </div>
                </div>
                <div className=' flex gap-4 mt-4'>
                    <button className="btn " onClick={()=>handleRead(id)}>Read</button>
                    <button className="btn btn-info border-none">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;