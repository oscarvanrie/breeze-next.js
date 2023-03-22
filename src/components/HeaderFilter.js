import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function HeaderFilter({title, open}) {
    return(
        
        <legend className="w-full px-2">
        <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
          <span className="text-sm font-medium text-gray-900">{title}</span>
          <span className="ml-6 flex h-7 items-center">
            <ChevronDownIcon
              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
              aria-hidden="true"
            />
          </span>
        </Disclosure.Button>
      </legend>
    )
}