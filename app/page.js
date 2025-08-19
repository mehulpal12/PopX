import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WelcomePage() {
  return (
    <div className="min-h-screen md:w-[30%] container mx-auto relative overflow-hidden">
      {/* Dotted pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-12">
        <div className="space-y-6">
          {/* Welcome text */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome to PopX</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Link href={"/sign-up"}>
              <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg">
                Create Account
              </Button>
            </Link>
            <Link href={"/sign-in"}>
            <Button
              variant="secondary"
              className="w-full h-12 bg-purple-200 hover:bg-purple-300 text-purple-700 font-medium rounded-lg mt-2"
            >
              Already Registered? Login
            </Button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}
