export default function AccountSettingsPage() {
  return (
    <div className="min-h-screen bg-white justify-center flex  p-2">
      <div className="w-full max-w-sm bg-gray-100  border-none">
        <div className="">
          <h1 className="text-xl font-semibold text-gray-900 mb-6 bg-white shadow-2xs py-4">Account Settings</h1>
        </div>

        <div className="flex items-center mb-6">
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-woman-headshot-oeWONwTZBy5Zy36DN3TqchWC4Xo6BO.png"
              alt="Profile picture"
              className="w-15 h-15 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-900">Marry Doe</h2>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <div className="text-sm text-gray-600 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </div>
        <div className="border-t-2 border-dotted border-gray-400 my-4"></div>

      </div>
    </div>
  )
}
