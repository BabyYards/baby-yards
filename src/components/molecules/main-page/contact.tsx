import { Button } from '../buttons/button'

export const ContactUs = () => {
  return (
    <div className="justify-self-center text-center mt-40">
      <h3 className="subtext-header text-purple font-medium">
        Any Questions ?
      </h3>
      <h1 className="text-header">Contact us</h1>

      <div>
        <div className="max-w-lg mx-auto p-6">
          <form className="space-y-6">
            <div className="flex space-x-10">
              {/* Full Name */}
              <div className="text-sm">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="text-sm">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div className="text-sm">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <Button buttonName={'Send Message'} buttonType={'primary'} />
          </form>
        </div>
      </div>
    </div>
  )
}
