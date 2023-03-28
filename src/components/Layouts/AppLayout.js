import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import React from 'react';
import cookie from 'cookie';
import { useState } from 'react';
import SearchBar from '../SearchBar';
import ShoppingCart from './ShoppingCart';
import Footer from '../Footer';
import { Main } from 'next/document';



const AppLayout = ({ header, children }) => {   
    const { user } = useAuth({ middleware: 'auth' });

    
    const [openSearch, setOpenSearch] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    function SearchIsClicked() {
        setOpenSearch(!openSearch);
    }
    function CartIsClicked() {
        setOpenCart(!openCart);

    }





    return (
        <div>
            <Navigation user={user} clickCart={CartIsClicked} clickSearch={SearchIsClicked} />
            <SearchBar open={openSearch} setOpen={setOpenSearch}/>
            <ShoppingCart open={openCart} setOpen={setOpenCart} />

            <main>{children}</main>

            <Footer />


           
            

        </div>
    )
}

export default AppLayout