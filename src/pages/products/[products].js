import { useState, useEffect } from 'react';
import Navigation from '@/components/Layouts/Navigation';
import SearchBar from '@/components/SearchBar';
import ShoppingCart from '@/components/Layouts/ShoppingCart';
import { useRouter } from 'next/router';
import Product from '@/components/Layouts/Product';
import fetchProducts from '@/hooks/api/fetchProducts';
import SideNav from '@/components/Layouts/SideNav';
import AppLayout from '@/components/Layouts/AppLayout';
import { faSeedling, faIcicles, faGift, faBox } from '@fortawesome/free-solid-svg-icons';

export default function Category() {
  
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  
  const router = useRouter();
  const categorySlug = router.query.products;
  var origineelProduct = [];
  
  
  

  
  const [products, setProducts] = useState([]);

  var arrayData= [];
  


  useEffect(() => {
    arrayData = [];
    const fetchData = async () => {      
      const response = await fetchProducts();
      setProducts(response.data);
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].subcategory.slug == categorySlug) {
          arrayData.push(response.data[i]);

        }
      }
      setProducts(arrayData);
      origineelProduct = arrayData;
      return arrayData;
    };

    
    fetchData();
  }, [categorySlug]);





  
  const [alergenen, setAlergenen] = useState([
    {name: 'Vegan', icon: faSeedling, selected: false},
    {name: 'Vegie', icon: faSeedling, selected: false},
    {name: 'Frozen', icon: faIcicles, selected: false},
    {name: 'Holiday', icon: faGift, selected: false},
    {name: 'HomeGrown', icon: faSeedling, selected: false},
    {name: 'sold out', icon: faBox, selected: false}
  ]);


  function changeCheckBox(index, s) {
    alergenen[index].selected = !s;
    setAlergenen(alergenen);
    setProducts(origineelProduct);
    var nieuweProducten = products;
    var indexesToRemove = [];

    for (var i = products.length - 1; i >= 0; i--) {
      if (products[i].is_vegan == 1 && alergenen[0].selected == true) {
        indexesToRemove.push(i);
      } 
      if (products[i].is_veggie == 1 && alergenen[1].selected == true) {
        indexesToRemove.push(i);
      } 
      if (products[i].is_frozen == 1 && alergenen[2].selected == true) {
        indexesToRemove.push(i);
      }
      if (products[i].is_holiday == 1 && alergenen[3].selected == true) {
        indexesToRemove.push(i);
      } 
      if (products[i].is_home_grown == 1 && alergenen[4].selected == true) {
        indexesToRemove.push(i);
      } 
      if (products[i].is_sold_out == 1 && alergenen[5].selected == true) {
        indexesToRemove.push(i);
      } 
    }
  
    for (var j = 0; j < indexesToRemove.length; j++) {
      nieuweProducten.splice(indexesToRemove[j], 1);
      setProducts(products);
    }
  }

  var indexesToRemove = [];

  for (var i = products.length - 1; i >= 0; i--) {
    if (products[i].is_vegan == 1 && alergenen[0].selected == true) {
      indexesToRemove.push(i);
    } 
    if (products[i].is_veggie == 1 && alergenen[1].selected == true) {
      indexesToRemove.push(i);
    } 
    if (products[i].is_frozen == 1 && alergenen[2].selected == true) {
      indexesToRemove.push(i);
    }
    if (products[i].is_holiday == 1 && alergenen[3].selected == true) {
      indexesToRemove.push(i);
    } 
    if (products[i].is_home_grown == 1 && alergenen[4].selected == true) {
      indexesToRemove.push(i);
    } 
    if (products[i].is_sold_out == 1 && alergenen[5].selected == true) {
      indexesToRemove.push(i);
    } 
  }

  for (var j = 0; j < indexesToRemove.length; j++) {
    nieuweProducten.splice(indexesToRemove[j], 1);
    setProducts(products);
  }


  


  return (

    

 
    <div id="root">

      <AppLayout ></AppLayout>


      <div className='flex'>
        <div className='w-1/4'>

          <SideNav catSlug={categorySlug} alergenen={alergenen} changeCheckBox={changeCheckBox}/>
        </div>
        <div className='w-3/4'>

          <Product products={products}/>
        </div>
        

        

      </div>


      

      




      
       

      
    </div>

    

    




  )
}
