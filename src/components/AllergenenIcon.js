import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faSeedling, faBox, faIcicles } from '@fortawesome/free-solid-svg-icons';



export default function AllergenenIcon({product,index}) {
    const alergenen = [
        {name: 'Vegie', icon: faSeedling},
        {name: 'Vegan', icon: faSeedling},
        {name: 'sold out', icon: faBox},
        {name: 'Frozen', icon: faIcicles},
        {name: 'HomeGrown', icon: faSeedling},
        {name: 'Holiday', icon: faGift}
      ];



    return (
        <>
        {product.is_vegie == 0
            ? <div>
              <FontAwesomeIcon icon={alergenen[index].icon} className='ml-3' />      
              <label className="ml-3 text-sm text-gray-500">
                {alergenen[index].name}
              </label>
            </div>
            : <div></div>
        }
        </>
    )
}