import Product from "./Layouts/Product";
import { useState, useEffect } from "react";
import fetchProducts from "@/hooks/api/fetchProducts";

function sortArrayByCreatedAt(array) {
    return array.sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return dateB - dateA;
    });
}

export default function NieuwsteProducten() {

      
  const [products, setProducts] = useState([]);
  


  useEffect(() => {
    const fetchData = async () => {      
      const response = await fetchProducts();
      const sortedArray = sortArrayByCreatedAt(response);
      setProducts(sortedArray);
    };

    
    fetchData();
  }, []);
  
  
    

    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">New products</h2>
            </div>
          </div>
          <Product products={products}></Product>
        </div>
    

      )
}