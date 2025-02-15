import { Button } from '../buttons/button'
import { useNavigate } from 'react-router'

const Header = () => {
  let navigate = useNavigate()

  return (
    <div className="flex items-center text-sm text-purple">
      <img
        className="m-2"
        src={'src/utils/baby-yards-logo.png'}
        alt="header-logo"
        height={50}
        width={50}
      />
      <div className="space-x-3 flex grow">
        <Button buttonName={'Home'} buttonType={'text'} />
        <Button buttonName={'About'} buttonType={'text'} />
        <Button buttonName={'Contact Us'} buttonType={'text'} />
        <Button buttonName={'Pricing'} buttonType={'text'} />
      </div>
      <div className="space-x-3 flex">
        <Button buttonName={'Login'} buttonType={'primary'} />
        <Button buttonName={'Demo'} buttonType={'primary'} />
        <Button
          buttonName={'Live Stream'}
          buttonType={'secondary'}
          onClick={() => navigate('/live-stream')}
        />
      </div>
    </div>
  )
}

export default Header
