import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import React from 'react';
import { useState } from 'react';
import SearchBar from '../SearchBar';
import ShoppingCart from './ShoppingCart';
import Footer from '../Footer';


export default function AppLayout({children}) {   
    var { user } = useAuth({ middleware: 'auth' });
    console.log(user);

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
            <Navigation user={user} clickCart={setOpenCart} clickSearch={SearchIsClicked} />
            <SearchBar open={openSearch} setOpen={setOpenSearch}/>
            <ShoppingCart open={openCart} setOpen={setOpenCart} />

            <main>{children}</main>

            <Footer />
        </div>
    )
}
