import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../components/BookDetails/BookDetails';
import ReadList from '../components/ReadList/ReadList';


export const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        loader:()=>fetch('booksData.json').then(res=>res.json()),
        path:'/',
        Component:Home,
      },
      {
        path:'/about',
        Component:About,
      },
      {
        path:'/readList',
        loader:()=>fetch('booksData.json').then(res=>res.json()),
        Component:ReadList,
      },
      {
        path:'/bookDetails/:id',
        loader:()=>fetch('booksData.json').then(res=>res.json()),
        Component:BookDetails,
      }
    ]
  },
])