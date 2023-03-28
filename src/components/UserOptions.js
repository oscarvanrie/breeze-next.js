import { Menu } from "@headlessui/react";
import { useAuth } from "@/hooks/auth";
import Link from "next/link";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function UserOptions({user}) {
    const {logout} = useAuth();

    if (user == undefined) {
        return (
        <>
            <Menu.Item>
            {({ active }) => (
              <Link href={'/register'}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Create an account
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href={'/login'}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Sign in
              </Link>
            )}
          </Menu.Item>

    </>
        )
    } else {
        return(
        <>
        <Menu.Item>
        {({ active }) => (
          <Link href={'/register'}
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            Settings
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <Link href={'/'}
          onClick={logout}
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            Log out
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (

        <Link
          href={'/accountSettings/'}
          className={classNames(
          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
          'block px-4 py-2 text-sm'
        )}
        >
          Acount Page
        </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (

        <Link
          href={'/adressPage/'}
          className={classNames(
          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
          'block px-4 py-2 text-sm'
        )}
        >
          Adress boek
        </Link>
        )}
      </Menu.Item>


</>
        )
    }
    
}