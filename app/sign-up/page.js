import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-sm p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Create your PopX account</h1>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-purple-600 mb-2">
              Full Name*
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Marry Doe"
              className="w-full px-3 py-3 border-2 border-blue-500 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-purple-600 mb-2">
              Phone number*
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Marry Doe"
              className="w-full px-3 py-3 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-600 mb-2">
              Email address*
            </label>
            <input
              id="email"
              type="email"
              placeholder="Marry Doe"
              className="w-full px-3 py-3 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-600 mb-2">
              Password *
            </label>
            <input
              id="password"
              type="password"
              placeholder="Marry Doe"
              className="w-full px-3 py-3 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-purple-600 mb-2">
              Company name
            </label>
            <input
              id="company"
              type="text"
              placeholder="Marry Doe"
              className="w-full px-3 py-3 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="pt-2">
            <p className="text-sm text-gray-700 mb-3">Are you an Agency?*</p>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  defaultChecked
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          <div className="pt-4">
            <Link href={"/admin"}>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors"
            >
              Create Account
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}
