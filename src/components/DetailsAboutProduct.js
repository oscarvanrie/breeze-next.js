import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import fetchProducts from '@/hooks/api/fetchProducts'
import CurrencySign from './CurrencySign'
import ExtraTextButton from './ExtraTextButton'


const p = {
    name: 'Zip Tote Basket',
    price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      // More images...
    ],
    colors: [
      { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      // More sections...
    ],
}


export default function DetailsAboutProducts(product) {

  function test() {
    console.log(product.image);
  }

  
    return (
      <> 
      <button onClick={test}>test</button>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 w-10/12 ml-1/12 flex mx-auto mt-20">


        <div className="aspect-w-1 aspect-h-1 w-full">

        <img
          src={'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg'}
          className="h-full w-full object-cover object-center sm:rounded-lg"
        />
      </div>
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

          <div className="mt-10 flex">
            <button
              type="submit"
              className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
            >
              Add to bag
            </button>

          </div>
        </form>

        <section aria-labelledby="details-heading" className="mt-12">
          <h2 id="details-heading" className="sr-only">
            Additional details
          </h2>

          <div className="divide-y divide-gray-200 border-t">

              <ExtraTextButton title={"ingredients"} element={product.ingredients} />

          </div>
                                                  
        </section>
      </div>
      </div>

</>
    );
}

