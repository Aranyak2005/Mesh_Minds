import Navbar from "../components/Navbar";
import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Class 10 Science Books",
    category: "Books",
    location: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Winter Clothes Bundle",
    category: "Clothes",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "School Backpack",
    category: "Utility",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Used Laptop",
    category: "Electronics",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Browse() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#2D142C] text-white">
      <Navbar />

      <section className="pt-32 px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-[#FE4540] uppercase tracking-[0.3em] text-sm mb-4">
              Community Resources
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold">
              Browse Available Donations
            </h1>

            <p className="mt-5 text-gray-400 max-w-2xl">
              Discover books, clothes, school supplies, electronics, and other
              useful items shared by the community.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mb-10">
            <div className="flex items-center gap-3 bg-[#510A32]/70 border border-white/10 rounded-2xl px-4 py-4 flex-1">
              <Search className="text-[#FE4540]" size={22} />

              <input
                type="text"
                placeholder="Search resources..."
                className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
              />
            </div>

            <div className="relative lg:w-[240px]">
              <select
                defaultValue="All Categories"
                className="w-full appearance-none bg-[#510A32]/70 border border-white/10 hover:border-[#FE4540]/50 focus:border-[#FE4540] rounded-2xl px-5 py-4 outline-none text-white backdrop-blur-xl transition cursor-pointer"
              >
                <option value="All Categories" className="bg-[#2D142C]">
                  All Categories
                </option>

                <option value="Books" className="bg-[#2D142C]">
                  Books
                </option>

                <option value="Clothes" className="bg-[#2D142C]">
                  Clothes
                </option>

                <option value="Electronics" className="bg-[#2D142C]">
                  Electronics
                </option>

                <option value="Utility Items" className="bg-[#2D142C]">
                  Utility Items
                </option>
              </select>

              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#FE4540]">
                ▼
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#510A32]/70 border border-white/10 rounded-3xl overflow-hidden hover:border-[#FE4540]/50 transition group"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <span className="text-xs uppercase tracking-widest text-[#FE4540]">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>

                  <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm">
                    <MapPin size={16} />
                    {item.location}
                  </div>

                  <button
                    onClick={() => navigate(`/item/${item.id}`)}
                    className="mt-6 w-full bg-[#FE4540] hover:bg-[#C72C41] transition py-3 rounded-xl font-medium shadow-lg shadow-[#FE4540]/20"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
