import ContactInformation from './ContactInformation'
import MailForm from './MailForm'

export default function ContactContent() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Neem contact op</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
              integer elementum id sem. Arcu sed malesuada et magna.
            </p>
            <ContactInformation />
          </div>
        </div>
        <MailForm />
      </div>
    </div>
  )
}
