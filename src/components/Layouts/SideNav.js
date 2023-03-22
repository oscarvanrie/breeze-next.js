import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';
import fetchSubCategories from '@/hooks/api/fetchSubCategories';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import HeaderFilter from '../HeaderFilter';
import CheckBox from '../CheckBox';
import SubCatSelector from '../subCatSelector';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideNav(catSlug) {
    catSlug = catSlug.catSlug;




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
              console.log(`Invalid categorieID: ${categorieID}`);
            }
            return response.data;
          } catch (error) {
            console.log(error);
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
          console.log(element);
          filteredCategories = element;
          if (i != selectedIndex) {
            setSelectedIndex(i);
            console.log(i);
          }

          
        }
        i++;
      });
    });


    function test() {
        console.log(subCategories);
        
    }

    test();


  return (
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
  </form>
  )
}

