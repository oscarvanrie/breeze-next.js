import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from 'next/link';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function MegaMenu({navigation, subCategories}) {
    console.log(typeof(subCategories));
    
    return(
        
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
                      {category.name} Categories
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
                    <Popover.Panel className="absolute inset-x-0  text-gray-500 text-sm mt-14">
                      <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
          
                      <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8">
                          <div className="grid grid-cols-1 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                            <div className="grid grid-cols-7 gap-y-10 gap-x-8">
                               
                              {subCategories.map((sCat, index) => (  
                                <div>
                                  <p className="font-medium text-gray-900">
                                    <Link
                                        href={'/categories/' + index}
                                    > {sCat.description} </Link>
                                  </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                            
                                            
                                          {sCat.subcategories.map((item) => (
                                            <li key={item.description} className="flex">
                                              <Link href={`/products/${item.slug}`} className="hover:text-gray-800">
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
    
   

    )
}