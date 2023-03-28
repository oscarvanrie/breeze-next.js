import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import AppLayout from '@/components/Layouts/AppLayout';
import DetailsAboutProducts from '@/components/DetailsAboutProduct';
import fetchProducts from '@/hooks/api/fetchProducts';

export default function productDetails() {
  

  const [products, setProducts] = useState([]);
  const router = useRouter();
  const productId = router.query.productDetails;

  function test() {
      console.log(product);

  }




  useEffect(() => {
    const fetchData = async () => {      
      const response = await fetchProducts();
      setProduct(response.data);
      return response.data;
  
    };
    
    fetchData();
  }, []);
  

  return ( 
     <div id="root">
       <AppLayout >
        <DetailsAboutProducts product={product} />

        <button onClick={test}>test</button>

       </AppLayout>
       
     </div>

  )

}
