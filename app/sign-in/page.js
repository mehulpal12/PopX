import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex  justify-center  p-2 ">
      <div className="w-full max-w-sm p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Signin to your <br/> PopX account</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-600 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={"mehulpal@example.com"}
              placeholder="Enter email address"
              className="w-full px-3 py-3 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-600 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={"password"}
              placeholder="Enter password"
              className="w-full px-3 py-3 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

        <Link href={"/admin"}>
          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-3 px-4 rounded-md font-medium hover:bg-gray-500 transition-colors"
          >
            Login
          </button></Link>
        </form>
      </div>
    </div>
  )
}
