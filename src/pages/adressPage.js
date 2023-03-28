import AppLayout from "@/components/Layouts/AppLayout";
import AdresDisplay from "@/components/AdresDisplay";
export default function adressPage() {
  return (
    <>

    <AppLayout
    header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Dashboard
        </h2>
    }>
  <AdresDisplay />
  </AppLayout>





  </>
  )
}
