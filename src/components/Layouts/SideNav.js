import { useState, useEffect } from 'react';
import fetchSubCategories from '@/hooks/api/fetchSubCategories';
import { Disclosure } from '@headlessui/react';
import HeaderFilter from '../HeaderFilter';
import SubCatSelector from '../SubCatSelector';


export default function SideNav({catSlug}) {

    const [subCategories, setsubCategories] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState();
    var filteredCategories = [];

    useEffect(() => {
        const fetchData = async () => {    
          try {
            const response = await fetchSubCategories();
            setsubCategories(response);
            if (subcategories) {
              setsubCategories(subcategories);
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





  </form>
  
  </>
  )
}

