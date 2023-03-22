import { UserIcon } from "@heroicons/react/24/outline"
export default function LoginIcon() {
    return(
        <div className="flex">
            <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500 min-h-min p-0 mt-2	">
                <UserIcon className="h-6 w-6 align-middle" aria-hidden="true" />
            </a>
        </div>
    )
}