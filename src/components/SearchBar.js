import { Fragment, useState, useEffect } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ExclamationCircleIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';
import fetchProductQuery from '@/hooks/api/fetchProductQuery';





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function SearchBar({open, setOpen}) {


  
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {    
      if (query != '') {
        const response = await fetchProductQuery(query);
        setItems(response);
        if (response.length == 4) {
            
          setAllProducts(response);
        }
        return response.data;

      }  

    };
    
    fetchData();
  }, [query]);

  function getProductID(name) {
    for (var i = 0; i < allProducts.length; i++ ) {
      if (allProducts[i].name == name) {
        return i;
      }
    }
  }

  return (
  <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value) }
                    
                  />
                </div>

                {items.length > 0 && (
                  <Combobox.Options static className="max-h-96 scroll-py-3 overflow-y-auto p-3">
                    {items.map((item) => (

                      <Link href={'/productDetails/' + getProductID(item.name)}>
                      <Combobox.Option
                        className={({ active }) =>
                          classNames('flex cursor-default select-none rounded-xl p-3', active && 'bg-gray-100')
                        }
                      >
                      {({ active }) => (
                          <>
                            <div
                              className={classNames(
                                'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                                
                              )}
                            >
                              <img src={item.image} alt=""/>
                            </div>
                            <div className="ml-4 flex-auto">
                              <p
                                className={classNames(
                                  'text-sm font-medium',
                                  active ? 'text-gray-900' : 'text-gray-700'
                                )}
                              >
                                {item.name}
                              </p>
                              <p className={classNames('text-sm', active ? 'text-gray-700' : 'text-gray-500')}>
                                {item.info}
                              </p>
                            </div>
                          </>
                        )}
                      </Combobox.Option>
                      
                      </Link>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && items.length === 0 && (
                  <div className="py-14 px-6 text-center text-sm sm:px-14">
                    <ExclamationCircleIcon
                      type="outline"
                      name="exclamation-circle"
                      className="mx-auto h-6 w-6 text-gray-400"
                    />
                    <p className="mt-4 font-semibold text-gray-900">No results found</p>
                    <p className="mt-2 text-gray-500">No components found for this search term. Please try again.</p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    
  )
}

