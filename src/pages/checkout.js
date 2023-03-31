import AppLayout from '@/components/Layouts/AppLayout';
import CheckoutForm from '@/components/CheckoutForm';


export default function checkout() {
  return (
    <div id="root">
      <AppLayout>
        <CheckoutForm />
      </AppLayout>        
    </div>
  )
}
