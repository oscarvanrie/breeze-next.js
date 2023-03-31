
import { useState, useEffect } from 'react'
import { Disclosure, Tab } from '@headlessui/react'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import fetchProducts from '@/hooks/api/fetchProducts';
import CurrencySign from './CurrencySign';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faSeedling, faBox, faIcicles } from '@fortawesome/free-solid-svg-icons';
import AllergenenIcon from './AllergenenIcon';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function DetailsAboutProducts() {


  var productId = 0;  

  // var productId;
  // const router = useRouter();
  // useEffect(()=>{
  //     if(!router.isReady) return;
          
  //     productId = router.query.productDetails;
  //     console.log(productId);

  // }, [router.isReady]);


  
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {     
      const response = await fetchProducts();
      setProduct(response[productId]);
      console.log(product);
      return response[productId];
  
    };
    
    fetchData();
  }, []);




  const alergenen = [
    {name: 'Vegie', icon: faSeedling},
    {name: 'Vegan', icon: faSeedling},
    {name: 'sold out', icon: faBox},
    {name: 'Frozen', icon: faIcicles},
    {name: 'HomeGrown', icon: faSeedling},
    {name: 'Holiday', icon: faGift}
  ];

  


  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image gallery */}
        <Tab.Group as="div" className="flex flex-col-reverse">
          <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              <Tab.Panel>
                <img
                  src={"https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg"}
                  className="h-full w-full object-cover object-center sm:rounded-lg"
                />
              </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>


        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <div className='flex'>
              <p className="text-3xl tracking-tight text-gray-900">{product.price1}</p><CurrencySign />
            </div>
            
          </div>




          <div className="mt-6">
            <h3 className="sr-only">Description</h3>

            <div
              className="space-y-6 text-base text-gray-700"
              dangerouslySetInnerHTML={{ __html: product.info }}
            />
          </div>

          <form className="mt-6">


            <div className="sm:flex-col1 mt-10 flex">
              <button
                type="submit"
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Add to bag
              </button>

              <button
                type="button"
                className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span className="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>

          <section aria-labelledby="details-heading" className="mt-12">
            <h2 id="details-heading" className="sr-only">
              Additional details
            </h2>
            

            <Disclosure as="div">
            {({ open }) => (
              <>
                <h3>
                  <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                    <span
                      className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                    >
                      ingredienten
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon
                          className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                  <ul role="list">
                    <li> {product.ingredients}</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
            </Disclosure>
            <Disclosure as="div">
            {({ open }) => (
              <>
                <h3>
                  <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                    <span
                      className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                    >
                      alergenen
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon
                          className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                  <ul role="list">
                  {product.is_vegie == 0
                      ? <div key={0}>
                        <FontAwesomeIcon icon={alergenen[0].icon} className='ml-3' />      
                        <label className="ml-3 text-sm text-gray-500">
                          {alergenen[0].name}
                        </label>
                      </div>
                      : <div></div>
                  }
                  {product.is_vegan == 0
                      ? <div key={1}>
                        <FontAwesomeIcon icon={alergenen[1].icon} className='ml-3' />      
                        <label className="ml-3 text-sm text-gray-500">
                          {alergenen[1].name}
                        </label>
                        </div>
                      : <div></div>
                  }
                  {product.is_sold_out == 0
                      ? <div key={2}>
                      <FontAwesomeIcon icon={alergenen[2].icon} className='ml-3' />      
                      <label className="ml-3 text-sm text-gray-500">
                        {alergenen[2].name}
                      </label>
                      </div>
                      : <div></div>
                  }
                  {product.is_frozen == 0
                      ? <div key={3}>
                      <FontAwesomeIcon icon={alergenen[3].icon} className='ml-3' />      
                      <label className="ml-3 text-sm text-gray-500">
                        {alergenen[3].name}
                      </label>
                      </div>
                      : <div></div>
                  }
                  {product.is_home_grown == 0
                      ? <div key={4}>
                      <FontAwesomeIcon icon={alergenen[4].icon} className='ml-3' />      
                      <label className="ml-3 text-sm text-gray-500">
                        {alergenen[4].name}
                      </label>
                      </div>
                      : <div></div>
                  }
                  {product.is_holiday == 0
                      ? <div key={5}>
                      <FontAwesomeIcon icon={alergenen[5].icon} className='ml-3' />      
                      <label className="ml-3 text-sm text-gray-500">
                        {alergenen[5].name}
                      </label>
                      </div>
                      : <div></div>
                  }

                  <AllergenenIcon product={product} index={0}/>


                  </ul>
                </Disclosure.Panel>
              </>
            )}
            </Disclosure>
            <div className="divide-y divide-gray-200 border-t">
            </div>
          </section>
        </div> 
      </div>
    </div>
  </div>  
   

  )
}


{/*


*/}

