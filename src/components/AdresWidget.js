import AdresForm from "./AdresForm";
import { useState } from "react";
export default function AdresWidget({addresses, setAddresses,name, email, address, index }) {
    
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <AdresForm 
         showModal={showModal} 
         setShowModal={setShowModal} 
         addresses={addresses}
         setAddresses={setAddresses}
         address={address}
         index={index}
        />

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{address.name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{address.email}</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
                <dt className="text-sm font-medium text-gray-500">Address:</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {address.address.line1}
                  <br />
                  {address.address.line2 && (
                    <>
                      {address.address.line2}
                      <br />
                    </>
                  )}
                  {address.address.city}, {address.address.state} {address.address.zip}
                </dd>
              </div>
            </dl>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change
            </button>
          </div>
        </div>
        </>
      );
}