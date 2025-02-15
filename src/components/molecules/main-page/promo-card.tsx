import { ImageCard } from '../card'

const PromoCard = () => {
  return (
    <div className="justify-self-center mx-2 mt-40">
      <div className="flex-row grid grid-cols-3 gap-4">
        <div>
          <h3 className="subtext-header text-purple font-medium">
            Why choose baby yards
          </h3>
          <h1 className="text-header">
            Why use our software in your Daycare & ECD Centers?
          </h1>
          <h2 className="subtext-header">
            Our recent surveys indicated that daycare providers recognise the
            need to have a proper management and connection with staff and
            learners.
          </h2>
          <ul className="list-disc mx-6 font-light text-base text-headerColor">
            <li>Get Per Class Incident Reports</li>
            <li>Attendance Reports - Staff & Learners</li>
            <li>Child Management Safety& Prioty </li>
          </ul>
        </div>
        <div className=" flex col-span-2 space-x-10 justify-end items-baseline">
          <ImageCard
            imageUrl={
              new URL(
                'https://advancecareagency.com.au/wp-content/uploads/2023/07/Child-Care-Advance-care-GAgency.jpg',
              )
            }
            imageAlt={'creche'}
          />
          <ImageCard
            imageUrl={
              new URL(
                'https://rollercoaster.ie/wp-content/uploads/2010/11/choosing-a-creche-FI.jpg',
              )
            }
            imageAlt={'creche'}
          />
        </div>
      </div>
    </div>
  )
}

export default PromoCard
