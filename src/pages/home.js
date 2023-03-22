import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
//import SearchBar from './SearchBar.js';
import Navigation from '@/components/Layouts/Navigation';
import SearchBar from '@/components/SearchBar';
import ShoppingCart from '@/components/Layouts/ShoppingCart';
import Banner from '@/components/Banner';

//import ShoppingCart from './ShoppingCart';

export default function Home() {

  
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

      <Navigation clickCart={clickCart} clickSearch={clickSearch} />
      
      
      
      <SearchBar open = {openSearch} setOpen = {setOpenSearch}/>
      
      
      <ShoppingCart open = {openCart} setOpen = {setOpenCart}/>

      <Banner />
      
       

      
    </div>

    




  )
}

