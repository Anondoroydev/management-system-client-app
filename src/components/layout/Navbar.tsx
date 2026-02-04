
export default function Navbar() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between px-4 py-2">
          <div className="flex gap-4">
            <span>Thursday, March 26, 2021</span>
            <span>support@example.com</span>
            <span>684 555-0102 490</span>
          </div>

          <div className="flex gap-4 items-center">
            <button className="text-green-600 font-medium">
              Booking Now
            </button>
            <span>FB</span>
            <span>TW</span>
            <span>IN</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl">
            ✈ Vitour
          </div>

          {/* Menu */}
          <nav className="flex gap-6 font-medium">
            <a href="#">Home</a>
            <a href="#">Tour</a>
            <a href="#">Destination</a>
            <a href="#">Blog</a>
            <a href="#">Pages</a>
            <a href="#">Dashboard</a>
            <a href="#" className="text-green-600">
              Contact
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex gap-4 items-center">
            <span>EN</span>
            <span>USD</span>
            <span>🔍</span>
            <button className="border px-4 py-1 rounded">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

