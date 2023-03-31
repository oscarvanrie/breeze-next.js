export default function SignInCorner({user}) {
  

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