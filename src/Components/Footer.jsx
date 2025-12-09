export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-6 mt-12">
      <p className="text-lg">© {new Date().getFullYear()} 🍴 Restaurant Menu</p>
      <p className="text-sm text-gray-400 mt-2">
        Made with using React + Tailwind
      </p>
    </footer>
  );
}