import Link from "next/link"
export default function SignInCorner(user) {
    if (user.user == undefined) {
           return(
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 w-min">
        <Link href={'/login'} className="text-sm font-medium text-white hover:text-gray-100">
          Create an account
        </Link>
        <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
        <Link href={'/login'} className="text-sm font-medium text-white hover:text-gray-100">
          Sign in
        </Link>
      </div>
    ) 
    } else {
    return (
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 w-min">
            <p className="text-white">{user.user.name}</p>

        <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
        <Link href={'/login'} className="text-sm font-medium text-white hover:text-gray-100">
          Log out
        </Link>
      </div>
    )
    }

}