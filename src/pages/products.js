import Head from 'next/head'
import Image from 'next/image'

import { useState, useEffect } from 'react';
import Navigation from '@/components/Layouts/Navigation';
import SearchBar from '@/components/SearchBar';
import ShoppingCart from '@/components/Layouts/ShoppingCart'
import Link from 'next/link';
import fetchProducts from '@/hooks/api/fetchProducts';
import Product from '@/components/Layouts/Product';
import AppLayout from '@/components/Layouts/AppLayout';



export default function Home() {

  const [products, setProducts] = useState([]);



  useEffect(() => {
    const fetchData = async () => {      
      const response = await fetchProducts();
      setProducts(response.data);
      return response.data;
    };
    
    fetchData();
  }, []);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  


  function clickSearch() {
    setOpenSearch(!openSearch);
  }
  function clickCart() {
    setOpenCart(!openCart);
  }


  

  return (

 
    <div id="root">
      <AppLayout>


      </AppLayout>
      <Product products={products} />      

       

      
    </div>

    




  )
}

