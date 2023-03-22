import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import RssIcon from "@heroicons/react/24/outline";
import Error from "./Error";
export default function NoProductsFound() {
 
    return (

        <div className="py-14 px-6 text-center text-sm sm:px-14">

          <Error errorTitle={'No results found'} errorMessage={'No products found for this search term. Please try again.'}/>

      </div>
    )
}