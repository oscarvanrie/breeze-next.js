import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';
import fetchSubCategories from '@/hooks/api/fetchSubCategories';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import HeaderFilter from '../HeaderFilter';
import CheckBox from '../CheckBox';
import SubCatSelector from '../subCatSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faIcicles,  faGift, faBox} from '@fortawesome/free-solid-svg-icons';
import AllergenenCheckBox from '../AllergenenCheckBox';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
/*
    const [alergenen, setAlergenen] = useState([
      {name: 'Vegan', icon: faSeedling, selected: false},
      {name: 'Vegie', icon: faSeedling, selected: false},
      {name: 'Frozen', icon: faIcicles, selected: false},
      {name: 'Holiday', icon: faGift, selected: false},
      {name: 'HomeGrown', icon: faSeedling, selected: false},
      {name: 'sold out', icon: faBox, selected: false}
    ]);

    function changeCheckBox(index, s) {
      alergenen[index].selected = !s;
      setAlergenen(alergenen);
      setAlergenen(alergenen);
    }
*/

export default function SideNav({catSlug, alergenen, setAlergenen, changeCheckBox}) {




    const [subCategories, setsubCategories] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState();
    var filteredCategories = [];
  
    useEffect(() => {
        const fetchData = async () => {    
          try {
            const response = await fetchSubCategories();
            setsubCategories(response.data)
            if (subcategories) {
              
              setsubCategories('');


              setsubCategories(subcategories);


            } else {
            }
            return response.data;
          } catch (error) {
          }
        };
          
        fetchData();
    }, []);


    let element = [];
    subCategories.forEach(item => {
      let i = 0;
      item.subcategories.forEach(subcat => {

        if (subcat.slug === catSlug) {
          element.push(item);
          filteredCategories = element;
          if (i != selectedIndex) {
            setSelectedIndex(i);
          }

          
        }
        i++;
      });
    });





  return (
    <>
    <form className="mt-4">
    {filteredCategories.map((section) => (
      <Disclosure as="div" key={section.name} className="border-t border-gray-200 pt-4 pb-4">
        {({ open }) => (
          <fieldset>
            <HeaderFilter title={section.description} open={open} />

            <Disclosure.Panel className="px-4 pt-4 pb-2">
              <div className="space-y-6">
                {section.subcategories.map((option, optionIdx) => (
                  
                  <SubCatSelector option={option} optionIdx={optionIdx} selectedIndex={selectedIndex}/>

                ))}
              </div>
            </Disclosure.Panel>
          </fieldset>
        )}
      </Disclosure>
    ))}
      <Disclosure as="div" key={'section.name'} className="border-t border-gray-200 pt-4 pb-4">
        {({ open }) => (
          <fieldset>
            <HeaderFilter title={'Alergenen'} open={open} />

            <Disclosure.Panel className="px-4 pt-4 pb-2">
              <div className="space-y-6">
                {alergenen.map ((alergeen, index) => (
                  <div key={alergeen.name} className="flex items-center" >
                    <div  onClick={() => {changeCheckBox(index, alergeen.selected)}}>
                      <AllergenenCheckBox selected={alergeen.selected} />
                    </div>
                    <FontAwesomeIcon icon={alergeen.icon} className='ml-3' />      
                    <label className="ml-3 text-sm text-gray-500">
                    {alergeen.name}
                    </label>
                   </div>
                ))}
                
              </div>
            </Disclosure.Panel>
          </fieldset>
        )}
      </Disclosure>




  </form>
  
  </>
  )
}

