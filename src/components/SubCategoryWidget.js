import Link from "next/link"
export default function SubCategoryWidget({subCategorie, index}) {

    return(
    <Link href={'/products/' + subCategorie.slug}>
    <li key={index}>
        <div className="flex items-center gap-x-6">
          <div>
            
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{subCategorie.description}</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">{subCategorie.slug}</p>
          </div>
        </div>
      </li>
      </Link>  
    )
}