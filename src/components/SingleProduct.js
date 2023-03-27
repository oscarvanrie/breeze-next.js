import ProductDescription from "./ProductDescription";

export default function SingleProduct({product}) {
    return (
        <a key={product.PLU} href={product.image} className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            /*src={product.image}*/
            src={'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg'}

            alt={product.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <ProductDescription name={product.name} price={product.price} />
      </a>
    )
}