import { Sparkles, Upload } from "lucide-react"
import Link from "next/link"

export const Header = () => {

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-300"
        >
          <span className="font-bold text-xl">Easy Buy</span>
        </Link>
        <Link 
          href="/upload" 
          className="bg-black text-white px-4 py-1 rounded-md font-semibold flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-300"
        >
          <span>Upload Now</span>
          <Upload className="w-5 h-5" />
        </Link>
      </div>
    </header>
  )
}