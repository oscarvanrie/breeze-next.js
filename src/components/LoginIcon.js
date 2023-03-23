import { UserIcon } from "@heroicons/react/24/outline"
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import UserOptions from "./UserOptions";



export default function LoginIcon({user}) {
    return(
        <div className="flex -m-2 p-2 text-gray-400 hover:text-gray-500 min-h-min p-0 mt-2">
            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <span className="sr-only">Open options</span>
          <UserIcon className="h-6 w-6 align-middle" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <UserOptions user={user}/>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
            
        </div>
    )
}

//