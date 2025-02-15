import '../main-page'

export const Footer = () => {
  return (
    <div className="mt-40">
      <div className="grid grid-cols-3 gap-2 p-2 text-center">
        <div className="text-center ml-6">
          <img
            className="m-2"
            src={'src/utils/baby-yards-logo.png'}
            alt="header-logo"
            height={200}
            width={200}
          />
          <div className="flex space-x-4 text-center">
            <div className="socials bg-indigo-400 border-none rounded-full shadow-md"></div>
            <div className="socials  bg-indigo-400 border-none rounded-full shadow-md"></div>
            <div className="socials  bg-indigo-400 border-none rounded-full shadow-md"></div>
          </div>
          <h2 className="subtext-header text-start">Follow our social media</h2>
        </div>

        <div>Div 2</div>
        <div>Div 3</div>
      </div>
    </div>
  )
}
