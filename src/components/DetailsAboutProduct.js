import CurrencySign from './CurrencySign'
import ExtraTextButton from './ExtraTextButton'





export default function DetailsAboutProducts(product) {

  
    return (
      <> 
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

