



import { useState, useEffect } from 'react';
//import SearchBar from './SearchBar.js';
import Navigation from '@/components/Layouts/Navigation';
import SearchBar from '@/components/SearchBar';
import ShoppingCart from '@/components/Layouts/ShoppingCart';
import {useRouter} from 'next/router'
import fetchSubCategories from '@/hooks/api/fetchSubCategories';
import SubMenu from '@/components/Layouts/SubMenu';
import AppLayout from '@/components/Layouts/AppLayout';

export default function Category() {
  
  const router = useRouter()
  const categorieID = parseInt(router.query.category)
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const [subCategories, setsubCategories] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  
  
  const [products, setProducts] = useState([]);




  useEffect(() => {
    const fetchData = async () => {      
      try {
        const response = await fetchSubCategories();
        const subcategories = response.data[categorieID]?.subcategories;
        setSelectedName(response.data[categorieID]?.description);
        if (subcategories) {
          
          setsubCategories('');
          setsubCategories(subcategories);
        } else {
          console.log(`Invalid categorieID: ${categorieID}`);
        }
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
      
    fetchData();
  }, [categorieID]);



  function clickSearch() {
    setOpenSearch(!openSearch);
  }
  function clickCart() {
    setOpenCart(!openCart);
    console.log(subCategories);
    
  }




  return (

 
    <div id="root">

      <AppLayout ></AppLayout>
      <SubMenu subCategorieArray={subCategories} categorieName={selectedName} /> 


      
    </div>

    




  )
}
