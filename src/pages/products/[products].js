import { useState, useEffect } from 'react';
import Navigation from '@/components/Layouts/Navigation';
import SearchBar from '@/components/SearchBar';
import ShoppingCart from '@/components/Layouts/ShoppingCart';
import { useRouter } from 'next/router';
import Product from '@/components/Layouts/Product';
import fetchProducts from '@/hooks/api/fetchProducts';
import SideNav from '@/components/Layouts/SideNav';

export default function Category() {
  
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  
  const router = useRouter();
  const categorySlug = router.query.products;
  
  
  

  
  const [products, setProducts] = useState([]);

  var arrayData= [];
  


  useEffect(() => {
    console.log('nieuw ' + categorySlug);
    arrayData = [];
    const fetchData = async () => {      
      const response = await fetchProducts();
      setProducts(response.data);
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].subcategory.slug == categorySlug) {
          console.log(i);
          arrayData.push(response.data[i]);
        }
      }
      setProducts(arrayData);
      return arrayData;
    };

    
    fetchData();
  }, [categorySlug]);




  function clickSearch() {
    setOpenSearch(!openSearch);
  }
  function clickCart() {
    setOpenCart(!openCart);
    console.log(products);
    
  }


  return (

    

 
    <div id="root">

      <Navigation clickCart={clickCart} clickSearch={clickSearch} />
      
      
      
      <SearchBar open = {openSearch} setOpen = {setOpenSearch}/>
      
      
      <ShoppingCart open = {openCart} setOpen = {setOpenCart}/>



      <div className='flex'>
        <div className='w-1/4'>

          <SideNav catSlug={categorySlug}/>
        </div>
        <div className='w-3/4'>

          <Product products={products} />
        </div>
        

        

      </div>


      

      




      
       

      
    </div>

    

    




  )
}
