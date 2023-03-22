import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition, Menu } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
//import fetchCategories from '@/pages/api/fetchCategories';
//import fetchSubCategories from '@/pages/api/fetchSubCategories';
import fetchCategories from '@/hooks/api/fetchCategories';
import fetchSubCategories from '@/hooks/api/fetchSubCategories';
import Logo from '../Logo';
import TopBanner from '../TopBanner';
import Currency from '../currency';
import ShoppingIcon from '../ShoppingIcon';
import LoginIcon from '../LoginIcon';
import SearchIcon from '../SearchIcon';

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
        setsubCategories(response.data)
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
  }, []);

  

  return (

    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

               
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    
                  </div>
                  <Tab.Panels as={Fragment}>
                    
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        <Link href={page.href}> {page.name} </Link>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create an account
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>

      </Transition.Root> 

      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}
          <TopBanner currencies={currencies}/>
          


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
                    <Popover.Group className="ml-8">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.menu.map((category, categoryIdx) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-700 hover:text-gray-800',
                                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                    )}
                                  >
                                    {category.name}
                                    Categories
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-8">
                                        <div className="grid grid-cols-1 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                          <div className="grid grid-cols-7 gap-y-10 gap-x-8">

                                          {subCategories.map((sCat, index) => (
                                            <div>
                                              <p
                                                id={`desktop-featured-heading-${categoryIdx}`}
                                                className="font-medium text-gray-900"
                                              >
                                                <Link href={"/categories/" + index}> {sCat.description}</Link>
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                 {sCat.subcategories.map((item) => (
                                                  <li key={item.description} className="flex">
                                                    <Link href={"/products/" + item.slug} className="hover:text-gray-800">
                                                      {item.description}
                                                    </Link>
                                                  </li>
                                                ))} 
                                              </ul>
                                            </div>
                                            ))}
                                            
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                    
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