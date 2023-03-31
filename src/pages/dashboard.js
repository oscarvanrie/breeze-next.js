import AppLayout from '@/components/Layouts/AppLayout'
import SearchBar from '@/components/SearchBar';
import Head from 'next/head'
import ShoppingCart from '@/components/Layouts/ShoppingCart';
import { useState } from 'react';

const Dashboard = () => {
    
    

    return (
        <>


    
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>


        </AppLayout>
        </>
    )
}

export default Dashboard