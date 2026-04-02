import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg text-gray-500">Page not found</p>
      <Link to="/" className="text-blue-500 underline hover:text-blue-700">
        Back to Home
      </Link>
    </div>
  )
}
