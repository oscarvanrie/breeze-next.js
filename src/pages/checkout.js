
import { Disclosure } from '@headlessui/react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import {Logo} from '@/components/Logo'

import AppLayout from '@/components/Layouts/AppLayout';

const subtotal = '$210.00'
const discount = { code: 'CHEAPSKATE', amount: '$24.00' }
const taxes = '$23.68'
const shipping = '$22.00'
const total = '$341.68'
const products = [
  {
    id: 1,
    name: 'Micro Backpack',
    href: '#',
    price: '$70.00',
    color: 'Moss',
    size: '5L',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
    imageAlt:
      'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
  },
  // More products...
]

export default function checkout() {
  return (
    <>

    
<AppLayout
    header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Dashboard
        </h2>
    }>


<CheckoutForm />
</AppLayout>




    </>
  )
}
