import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
export default function SearchIcon({clickSearch}) {
  
    return(
        <button 
        onClick={clickSearch} href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Search</span>
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    )
}
