import Link from "next/link"
import Currency from "./currency"
export default function TopBanner({currencies}) {

    return(
        <div className="bg-gray-900">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Currency selector */}

        <Currency currencies={currencies} />



        <p className="flex-1 text-center font-medium text-white w-max ">
          Get free delivery on orders over $100
          
          
        </p>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 w-min">
          <Link href={'/login'} className="text-sm font-medium text-white hover:text-gray-100">
            Create an account
          </Link>
          <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
          <Link href={'/login'} className="text-sm font-medium text-white hover:text-gray-100">
            Sign in
          </Link>
        </div>
      </div>
    </div>
    )
}