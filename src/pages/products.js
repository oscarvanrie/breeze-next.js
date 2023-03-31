import { useState, useEffect } from 'react';
import fetchProducts from '@/hooks/api/fetchProducts';
import Product from '@/components/Layouts/Product';
import AppLayout from '@/components/Layouts/AppLayout';



export default function Home() {

  const [products, setProducts] = useState([]);



  useEffect(() => {
    const fetchData = async () => {      
      const response = await fetchProducts();
      setProducts(response);
      return response;
    };
    
    fetchData();
  }, []);




  

  return (

 
    <div id="root">
      <AppLayout>



      <Product products={products} />
      </AppLayout>  

       

      
    </div>

    




  )
}

