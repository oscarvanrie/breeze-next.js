import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import fetchSubCategories from '@/hooks/api/fetchSubCategories';
import SubMenu from '@/components/Layouts/SubMenu';
import AppLayout from '@/components/Layouts/AppLayout';

export default function Category() {
  const router = useRouter()
  const categorieID = parseInt(router.query.category)
  const [subCategories, setsubCategories] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {      
      try {
        const response = await fetchSubCategories();
        const subcategories = response.data[categorieID]?.subcategories;
        setSelectedName(response.data[categorieID]?.description);
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
  }, [categorieID]);

  return (
    <div id="root">
      <AppLayout >
        <SubMenu subCategorieArray={subCategories} categorieName={selectedName} />
      </AppLayout>
    </div>
  )
}
