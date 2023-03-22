import { Fragment, useState, useEffect } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'

import fetchCategories from '@/hooks/api/fetchCategories';
import fetchSubCategories from '@/hooks/api/fetchSubCategories';
import Logo from '../Logo';
import TopBanner from '../TopBanner';
import ShoppingIcon from '../ShoppingIcon';
import LoginIcon from '../LoginIcon';
import SearchIcon from '../SearchIcon';
import MegaMenu from '../MegaMenu';
import MobileMenu from '../MobileMenu';
import ShoppingCart from './ShoppingCart';


const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']




const navigation = {
  menu: [{0:[{},]}],

  pages: [
    { name: 'Home', href: '/home' },
    { name: 'Products', href: '/products' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation({clickSearch, clickCart}) {

  function test() {
    console.log('zoeker: ');
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [categories, setCategories] = useState([]);
  
  
  useEffect(() => {
    const fetchData = async () => {      
      const response = await fetchCategories();
      setCategories(response.data);
      return response.data;
    };
    
    fetchData();
  }, []);


  const [subCategories, setsubCategories] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {      
      try {
        const response = await fetchSubCategories();
        setsubCategories(response.data);
        console.log(subCategories);

        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
      
    fetchData();
  }, []);

  function test() {
    console.log(subCategories);
  }

  

  return (

    <div className="bg-white">


      {/* Mobile menu */}

      <MobileMenu mobileMenuOpen={mobileMenuOpen} navigation={navigation} setMobileMenuOpen={setMobileMenuOpen} />
            
     

      <TopBanner currencies={currencies}/>
          
<header>
  <nav>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  
                  
                  <div className="hidden lg:flex lg:items-center">
                      <Logo />
                  </div>


                  <div className="hidden h-full lg:flex">
                    {/* Mega menus */}
                    <MegaMenu navigation={navigation} subCategories={subCategories}/>

                    
                  </div>
                      
                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    <SearchIcon clickSearch={clickSearch}/>
                  </div>

                  {/* Logo (lg-) */}
                  
                  <div className="lg:hidden">
                    <Logo />
          
                  </div>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                      <div className='hidden lg:flex'>
                        <SearchIcon clickSearch={clickSearch}/>
                      </div>
                      

                      <LoginIcon />
                      </div>

                      <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                      <ShoppingIcon clickCart={clickCart} /> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>




      

      
    </div>
  )
}