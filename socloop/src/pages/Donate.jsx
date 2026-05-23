import { useState } from "react";
import Navbar from "../components/Navbar";
import { Upload } from "lucide-react";

export default function Donate() {
  const [selectedFile, setSelectedFile] = useState("");

  return (
    <div className="min-h-screen bg-[#2D142C] text-white">
      <Navbar />

      <section className="pt-32 px-4 sm:px-6 pb-20">
        <div className="max-w-5xl mx-auto">
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

          <form className="bg-[#510A32]/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
            <input
              type="text"
              placeholder="Item title"
              className="w-full bg-[#2D142C] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#FE4540] transition"
            />

            <div className="relative">
              <select className="w-full appearance-none bg-[#2D142C] border border-white/10 rounded-2xl px-5 py-4 pr-14 outline-none text-white focus:border-[#FE4540] transition hover:border-[#FE4540]/50">
                <option className="bg-[#2D142C] text-gray-400">
                  Choose Category
                </option>
                <option className="bg-[#2D142C]">Books</option>
                <option className="bg-[#2D142C]">Clothes</option>
                <option className="bg-[#2D142C]">School Supplies</option>
                <option className="bg-[#2D142C]">Electronics</option>
                <option className="bg-[#2D142C]">Utility Items</option>
              </select>

              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-[#FE4540]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select className="w-full appearance-none bg-[#2D142C] border border-white/10 rounded-2xl px-5 py-4 pr-14 outline-none text-white focus:border-[#FE4540] transition hover:border-[#FE4540]/50">
                <option className="bg-[#2D142C] text-gray-400">
                  Condition
                </option>
                <option className="bg-[#2D142C]">New</option>
                <option className="bg-[#2D142C]">Good</option>
                <option className="bg-[#2D142C]">Usable</option>
                <option className="bg-[#2D142C]">Needs Repair</option>
              </select>

              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-[#FE4540]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <textarea
              placeholder="Description"
              rows="5"
              className="w-full bg-[#2D142C] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#FE4540] transition resize-none"
            ></textarea>

            <input
              type="text"
              placeholder="Pickup location"
              className="w-full bg-[#2D142C] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#FE4540] transition"
            />

            <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center hover:border-[#FE4540] transition bg-[#2D142C]/40 flex flex-col items-center justify-center">
              <Upload className="text-[#FE4540] mb-4" size={40} />

              <p className="text-gray-300 text-lg font-medium">
                Upload Item Image
              </p>

              <p className="text-gray-500 text-sm mt-2">
                PNG, JPG, JPEG supported
              </p>

              <input
                id="fileUpload"
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    setSelectedFile(file.name);
                  }
                }}
              />

              <label
                htmlFor="fileUpload"
                className="mt-5 bg-[#FE4540] hover:bg-[#C72C41] transition px-5 py-2 rounded-xl text-sm font-medium cursor-pointer"
              >
                Choose File
              </label>

              {selectedFile && (
                <div className="mt-5 flex flex-col items-center gap-3">
                  <p className="text-sm text-gray-300 break-all">
                    Selected:{" "}
                    <span className="text-[#FE4540]">{selectedFile}</span>
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedFile("")}
                    className="text-sm text-red-400 hover:text-red-300 transition"
                  >
                    Remove File
                  </button>
                </div>
              )}
            </div>

            <button className="w-full bg-[#FE4540] hover:bg-[#C72C41] transition py-4 rounded-2xl font-semibold shadow-lg shadow-[#FE4540]/20">
              Submit Donation
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
