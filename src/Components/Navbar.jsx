export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-5 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">🍴B2B Restaurant Menu</h1>
        <button className="bg-white text-red-600 px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Order Now
        </button>
      </div>
    </nav>
  );
}