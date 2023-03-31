import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Navigation from '@/components/Layouts/Navigation';
import SearchBar from '@/components/SearchBar';
import ShoppingCart from '@/components/Layouts/ShoppingCart'
import Link from 'next/link';
import AppLayout from '@/components/Layouts/AppLayout';
import SlideShow from '@/components/SlideShow';
import NieuwsteProducten from '@/components/NieuwsteProducten';
import Footer from '@/components/Footer';



export default function Home() {

   
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  




    
    
  return (

 <>
    
    
    <AppLayout>

    <NieuwsteProducten />
    <SlideShow />
      
    </AppLayout>




      
    
</>
    
    



  )
}

