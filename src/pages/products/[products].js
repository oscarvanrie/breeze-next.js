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
import fetchProductsAndSubCat from '@/hooks/api/fetchProductsAndSubCat';

export default function Category() {
  

  
  
  const router = useRouter();
  const categorySlug = router.query.products;
  
  
  

  
  const [products, setProducts] = useState([]);
  const [origineleProducts, setOrigineleProducts] = useState([]);

  var arrayData= [];




  // useEffect(() => {
  //   arrayData = [];
  //   const fetchData = async () => {      
  //     const response = await fetchProducts();
  //     setProducts(response);


      
  //     console.log(response);
  //     for (var i = 0; i < response.length; i++) {
  //       console.log(response[0]);
        

  //       // if (response[i].subcategory.slug == categorySlug) {
  //       //   arrayData.push(response.data[i]);
  //       // }
  //     }
  //     setOrigineleProducts(arrayData);
      
      
  //     setProducts(arrayData);
  //     return arrayData;
  //   };

  useEffect(() => {
    arrayData = [];
    const fetchData = async () => {      
      const response = await fetchProductsAndSubCat();
      setProducts(response);


      
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        console.log(response[0]);
        

        if (response[i].subcategory.slug == categorySlug) {
          arrayData.push(response[i]);
        }
      }
      setOrigineleProducts(arrayData);
      
      
      setProducts(arrayData);
      return arrayData;
    };

    
    fetchData();
  }, [categorySlug]);






  
  const [alergenen, setAlergenen] = useState([
    {name: 'Vegie', icon: faSeedling, selected: false},
    {name: 'Vegan', icon: faSeedling, selected: false},
    {name: 'sold out', icon: faBox, selected: false},
    {name: 'Frozen', icon: faIcicles, selected: false},
    {name: 'HomeGrown', icon: faSeedling, selected: false},
    {name: 'Holiday', icon: faGift, selected: false}
  ]);


  function changeCheckBox(index, s) {
    setProducts(origineleProducts);
    console.log(products);

    
    alergenen[index].selected = !s;
    setAlergenen(alergenen);
    var nieuweProducten = products;
    var indexesToRemove = [];


    // Veggie = 1
    // Vegan = 2
    // sold out = 3
    // Frozen = 4
    // homegrown = 5
    // Holiday = 6
  var selectedAlergenen = [];
  for (var a = 0; a < alergenen.length; a++) {
    if (alergenen[a].selected == true) {
      selectedAlergenen.push(a + 1);

    }
  }
  for (var i = 0; i < products.length; i++) {
    var productAllergenen = [];
    if (products[i].is_veggie == 1) {
      productAllergenen.push(1);
    } 
    if (products[i].is_vegan == 1) {
      productAllergenen.push(2);
    } 
    if (products[i].is_sold_out == 1) {
      productAllergenen.push(3);
    } 
    if (products[i].is_frozen == 1) {
      productAllergenen.push(4);
    }
    if (products[i].is_home_grown == 1) {
      productAllergenen.push(5);
    }
    if (products[i].is_holiday == 1) {
      productAllergenen.push(6);
    } 

    console.log(i + ':  ' + productAllergenen);

    const hasCommonElement = productAllergenen.some((element) => selectedAlergenen.includes(element));

    if (hasCommonElement) {
      indexesToRemove.push(i);
    }

    
    console.log('selectedAlergenen: ' + selectedAlergenen);

 

  }

  for (var j = 0; j < indexesToRemove.length; j++) {
    nieuweProducten.splice(indexesToRemove[j], 1);
    setProducts(nieuweProducten);
  }

  console.log(products);
}
function test() {
  console.log(origineelProduct);
}


  


  return ( 
     <div id="root">
       <AppLayout >
        <div className='flex'>
         <div className='w-1/4'>
       <SideNav catSlug={categorySlug} alergenen={alergenen} changeCheckBox={changeCheckBox}/>
         </div>
         <div className='w-3/4'>

           <Product products={products}/>
         </div>
       </div>
       </AppLayout>
       
     </div>

  )

}
