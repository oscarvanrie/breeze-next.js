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
import ContactForm from '@/components/ContactForm';



export default function Home() {



  

  return (

 
    <div id="root">
      <AppLayout>
      <ContactForm />
 
      </AppLayout>  

       

      
    </div>

    




  )
}

