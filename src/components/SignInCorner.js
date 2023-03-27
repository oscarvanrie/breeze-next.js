import Link from "next/link"
import { useAuth } from "@/hooks/auth"
export default function SignInCorner({user}) {
  
  const { logout } = useAuth()

  if (user == undefined) {
    return (
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 w-min">



</div>
    )
  }
    return (
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 w-min">
            <p className="text-white">{user.name}</p>


      </div>
    )

}