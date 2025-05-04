// import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";


const Book = ({ singleBook }) => {
    // const data=use(bookPromise);

    // console.log(singleBook);
    const { bookId,bookName, author, image, rating, category, tags, totalPages } = singleBook



    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border border-gray-200 p-6">

                <figure className='p-5 bg-gray-100 w-6/7 mx-auto'>
                    <img className='h-[166px]'
                        src={image}
                        alt="books" />
                </figure>
                <div className="card-body">
                    <div className="flex gap-3 font-semibold">
                        {
                            tags.map((tag,index) => <button key={index} className="bg-gray-100 text-green-600 p-3 rounded-2xl">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title playfair-display text-xl">
                        {bookName}
                        <div className="badge badge-secondary">{totalPages}</div>
                    </h2>
                    <p className='font-semibold '>By : {author}</p>
                    <span className='border-b border-dashed p-2'></span>
                    <div className="card-actions justify-between mt-4">
                        <div className="badge badge-outline ">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;