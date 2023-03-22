import Link from "next/link"
import Currency from "./currency"
import SignInCorner from "./SignInCorner"
export default function TopBanner({currencies, user}) {
console.log(user);
    return(
        <div className="bg-gray-900">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Currency selector */}

        <Currency currencies={currencies} />



        <p className="flex-1 text-center font-medium text-white w-max ">
          Get free delivery on orders over $100
          
          
        </p>
      
      <SignInCorner user={user}/>
      </div>
    </div>
    )
}