import { Card } from '..'
import './main-page.scss'

const ServiceCard = () => {
  return (
    <div className="justify-self-center text-center">
      <h3 className="subtext-header text-purple font-medium">Services</h3>
      <h1 className="text-header">Our Vision and Goals</h1>
      <div id="service-cards" className="flex space-x-10 m-5">
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
            'Efficient staff can help daycare centers provide high-quality care, optimize workflow, and increase productivity.'
          }
          cardHeadline={'Improve Staff Efficiency'}
          cardLink={new URL('http://localhost:5173/')}
          cardLogo={'puzzle'}
          cardType={'service'}
        />
        <Card
          cardDescription={
            'Efficiency in operations are key to scaling and expand client services while maintaining the quality of care'
          }
          cardHeadline={'Scale Operations'}
          cardLink={new URL('http://localhost:5173/')}
          cardLogo={'puzzle'}
          cardType={'service'}
        />
      </div>
    </div>
  )
}

export default ServiceCard
