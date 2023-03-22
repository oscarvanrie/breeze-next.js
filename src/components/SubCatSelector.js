import Link from "next/link";
import CheckBox from "./CheckBox";
export default function SubCatSelector({option, optionIdx, selectedIndex}) {
    return (
        
        <div key={option.slug} className="flex items-center">
        <Link
          href={"/products/" + option.slug}
          >
          <CheckBox optionIdx={optionIdx} selectedIndex={selectedIndex}/>


          <label
            className="ml-3 text-sm text-gray-500"
          >
            {option.description}
          </label>
        </Link>
        </div>
    )
}