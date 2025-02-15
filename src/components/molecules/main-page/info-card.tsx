import { Button } from '../buttons/button'
import './main-page.scss'

const InfoCard = () => {
  return (
    <div className="flex h-screen">
      <div className="content-center w-2/3">
        <div className="my-4 flex">
          <Button buttonName={'Early Childhood'} buttonType={'secondary'} />
        </div>
        <h1 className="text-header">
          Meet our Baby Yards, an Early learning centers and Daycare Management
          System
        </h1>
        <h3 className="subtext-header">
          We provide a suite of powerful management tools for tracking,
          scheduling, communication and analytics.
        </h3>

        <div className="space-x-3 text-purple flex">
          <Button buttonName={'Getting Started'} buttonType={'primary'} />
          <Button buttonName={'Book a Demo'} buttonType={'ghost'} />
        </div>
      </div>
      <img
        alt="header-logo"
        className="absolute mt-20 right-0 top-0 object-cover -z-10"
        src={'src/utils/info-card.png'}
      />
    </div>
  )
}

export default InfoCard
