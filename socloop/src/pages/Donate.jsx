import Navbar from "../components/Navbar";
import { Upload } from "lucide-react";

export default function Donate() {
  return (
    <div className="min-h-screen bg-[#2D142C] text-white">
      <Navbar />

      <section className="pt-32 px-4 sm:px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <p className="text-[#FE4540] uppercase tracking-[0.3em] text-sm mb-4">
              Donate Resources
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Give unused items a second life
            </h1>

            <p className="mt-5 text-gray-400 max-w-2xl text-base sm:text-lg">
              Donate books, clothes, school supplies, and utility items to
              people who truly need them.
            </p>
          </div>

          {/* Form */}
          <form className="bg-[#510A32]/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
            {/* Item Title */}
            <input
              type="text"
              placeholder="Item title"
              className="w-full bg-[#2D142C] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#FE4540] transition"
            />

            {/* Category */}
            <select className="w-full bg-[#2D142C] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#FE4540] transition">
              <option>Choose Category</option>
              <option>Books</option>
              <option>Clothes</option>
              <option>School Supplies</option>
              <option>Electronics</option>
              <option>Utility Items</option>
            </select>

            {/* Condition */}
            <select className="w-full bg-[#2D142C] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#FE4540] transition">
              <option>Condition</option>
              <option>New</option>
              <option>Good</option>
              <option>Usable</option>
              <option>Needs Repair</option>
            </select>

            {/* Description */}
            <textarea
              placeholder="Description"
              rows="5"
              className="w-full bg-[#2D142C] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#FE4540] transition resize-none"
            ></textarea>

            {/* Location */}
            <input
              type="text"
              placeholder="Pickup location"
              className="w-full bg-[#2D142C] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#FE4540] transition"
            />

            {/* Upload Box */}
            <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center hover:border-[#FE4540] transition cursor-pointer bg-[#2D142C]/40">
              <Upload className="mx-auto text-[#FE4540] mb-4" size={40} />

              <p className="text-gray-300 text-lg">Upload Item Image</p>

              <p className="text-gray-500 text-sm mt-2">
                PNG, JPG, JPEG supported
              </p>

              <input type="file" className="mt-5 text-sm text-gray-400" />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#FE4540] hover:bg-[#C72C41] transition py-4 rounded-2xl font-semibold shadow-lg shadow-[#FE4540]/20">
              Submit Donation
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
