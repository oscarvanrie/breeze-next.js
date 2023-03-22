import { ExclamationCircleIcon } from "@heroicons/react/24/outline"

export default function Error({errorTitle, errorMessage}){
    return(
        <>
        <ExclamationCircleIcon
        type="outline"
        name="exclamation-circle"
        className="mx-auto h-6 w-6 text-gray-400"
      />
      
      <p className="mt-4 font-semibold text-gray-900">{errorTitle}</p>
      <p className="mt-2 text-gray-500">{errorMessage}</p>
      </>
    )
}