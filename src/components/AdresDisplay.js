import AdresWidget from "./AdresWidget";
import { useState } from "react";

export default function AdresDisplay() {
    
    function addAdress() {
        setAddresses([...addresses, {name: '', email: '', address: {line1: '', city: '', zip: ''}}]);

    }
    const [addresses, setAddresses] = useState([
        {
          name: 'John Smith',
          email: 'john.smith@example.com',
          address: {
            line1: '123 Main St',
            city: 'Anytown',
            zip: '12345',
          },
        },
        {
          name: 'Jane Doe',
          email: 'jane.doe@example.com',
          address: {
            line1: '456 Elm St',
            city: 'Anytown',
            zip: '12345',
          },
        },
        {
          name: 'Bob Johnson',
          email: 'bob.johnson@example.com',
          address: {
            line1: '789 Oak St',
            city: 'Anycity',
            zip: '54321',
          },
        },
        {
          name: 'Alice Williams',
          email: 'alice.williams@example.com',
          address: {
            line1: '987 Maple St',
            city: 'Anycity',
            zip: '54321',
          },
        },
      ]);

      console.log(addresses);
      
    return (
        <>



        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Adress Boek</h2>
              <button
                type="button"
                onClick={addAdress}
                className="mt-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Nieuw
              </button>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {addresses.map((address, index) => (
                <AdresWidget 
                    addresses={addresses}
                    setAddresses={setAddresses}
                    key={index}
                    address={address}
                    index={index}
                />
            ))}
                
            </ul>
          </div>
        </div>
        </>

      )
}