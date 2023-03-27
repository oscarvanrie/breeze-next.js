export default function CheckBox({optionIdx, selectedIndex}) {
    if ( optionIdx == selectedIndex) {
        return <input  type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>;
    } else {

        return <input  type="checkbox"  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>;
    }
}