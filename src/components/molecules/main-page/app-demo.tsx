import { Card } from '../card/card'

const AppDemo = () => {
  return (
    <div className="justify-center mx-2 my-10">
      <div className="flex-row grid grid-cols-3 gap-4">
        <div className="">
          <span>Why choose Baby Yards</span>
          <br />
          <span>Why use our software in your Daycare & ECD Centers?</span>
          <br />
          <span>
            Our recent surveys indicated that daycare providers recognise the
            need to have a proper management and connection with staff and
            learners.
          </span>
          <ul className="list-disc mx-6">
            <li>Get Per Class Incident Reports</li>
            <li>Attendance Reports - Staff & Learners</li>
            <li>Child Management Safety& Prioty </li>
          </ul>
        </div>

        <div className=" flex col-span-2 space-x-2 justify-end">
          <Card
            cardDescription={
              'Enjoy less paperwork and administrative burdens while allowing our clients to focus on delivering quality care'
            }
            cardHeadline={'Easy Management'}
            cardLink={new URL('http://localhost:5173/')}
            cardLogo={'puzzle'}
            cardType={'service'}
          />

          <Card
            cardDescription={
              'Enjoy less paperwork and administrative burdens while allowing our clients to focus on delivering quality care'
            }
            cardHeadline={'Easy Management'}
            cardLink={new URL('http://localhost:5173/')}
            cardLogo={'puzzle'}
            cardType={'service'}
          />
        </div>
      </div>
    </div>
  )
}

export default AppDemo
