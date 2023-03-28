import AppLayout from "@/components/Layouts/AppLayout";
import AccountForm from "@/components/AccountForm";


export default function accountSettings() {
  return (
    <>

    <AppLayout
    header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Dashboard
        </h2>
    }>

  <AccountForm/>
  </AppLayout>




  </>
  )
}
