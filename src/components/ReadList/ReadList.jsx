import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDb';
import Book from '../Book/Book';
import About from '../../pages/About/About';

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
        console.log(myReadList);
        
        
        console.log(convertedStoredBooks);

    }, [])
    

    const handleSort = (type) => {
        setSort(type);

        if (type === 'pages') {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }
        if (type === 'ratings') {
            const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRating);
        }
    }
    return (
        <div>
            <h1 className='bg-gray-300 text-3xl font-semibold text-center p-2'>Books</h1>
            <div className='flex justify-center'>
                <details className="dropdown mt-6 mb-10">
                    <summary className="btn m-1">Sort By:{sort ? sort : ''}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort('pages')}>Pages</a></li>
                        <li><a onClick={() => handleSort('ratings')}>Ratings</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content one {readList.length}</h2>
                    {
                        readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content two</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;