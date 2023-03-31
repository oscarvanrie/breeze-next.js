import { useState, useEffect } from "react";
import fetchSubCategories from "@/hooks/api/fetchSubCategories";
import ContactInformation from "./ContactInformation";
import About from "./About";


  export default function Footer() {
    const [subCategories, setsubCategories] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {    
        try {
          const response = await fetchSubCategories();
          setsubCategories(response.data);
          console.log(subCategories);
          return response.data;
          
        } catch (error) {
        }
      };
        
      fetchData();
    }, []);
  

    return (
      <>
      <div className="divide-y-2 mx-52 my-10 ">
        
        <footer className="bg-white mt-5" aria-labelledby="footer-heading">
          <div className="grid grid-cols-2  divide-x-2">
            <About />
            <div className=" h-90 ">
              <div className="ml-20">
                <ContactInformation />
              </div>
            
              
            </div>
          </div>
      </footer> 
    </div>
      </>
    )
}
  
  