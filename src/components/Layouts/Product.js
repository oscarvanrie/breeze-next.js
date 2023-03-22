import NoProductsFound from "../NoProductsFound";
import SingleProduct from "../SingleProduct";
export default function Product({products}) {
  console.log(products[0]);
  if (products[0] == undefined) {
    return (
      <NoProductsFound />
    )
  } else {

    return(
      <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">


          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((singleProduct) => (
              <SingleProduct product={singleProduct}/> 
            ))}
          </div>
          </div>
          </div>

    )
  }
    
}



