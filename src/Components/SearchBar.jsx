
export default function SearchBar({ search, setSearch, categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
      <input
        type="text"
        placeholder="🔍 Search for a dish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full md:w-1/3 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
      >
        <option value="All">All Categories</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}