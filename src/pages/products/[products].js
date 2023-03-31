import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Product from '@/components/Layouts/Product';
import SideNav from '@/components/Layouts/SideNav';
import AppLayout from '@/components/Layouts/AppLayout';
import fetchProductsAndSubCat from '@/hooks/api/fetchProductsAndSubCat';

export default function Category() {
  
  const router = useRouter();
  const categorySlug = router.query.products;
  
  const [products, setProducts] = useState([]);

  var arrayData= [];

  useEffect(() => {
    arrayData = [];
    const fetchData = async () => {      
      const response = await fetchProductsAndSubCat();
      setProducts(response);
      for (var i = 0; i < response.length; i++) {
        if (response[i].subcategory.slug == categorySlug) {
          arrayData.push(response[i]);
        }
      }
      setProducts(arrayData);
      return arrayData;
    };
    fetchData();
  }, [categorySlug]);









  return ( 
     <div id="root">
       <AppLayout >
        <div className='flex'>
         <div className='w-1/4'>
       <SideNav catSlug={categorySlug}/>
         </div>
         <div className='w-3/4'>

           <Product products={products}/>
         </div>
       </div>
       </AppLayout>
       
     </div>

  )

}
