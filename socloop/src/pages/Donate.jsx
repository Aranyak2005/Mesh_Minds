import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Upload } from "lucide-react";

export default function Donate() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [detectedCategory, setDetectedCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);
      setSuccessMessage("");
      setDetectedCategory("");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("location", location);
      formData.append("category", category);
      formData.append("condition", condition);
      formData.append("file", selectedFile);

      const response = await axios.post(
        "http://127.0.0.1:8000/donate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setDetectedCategory(response.data.detected_category);
      setSuccessMessage("Donation submitted successfully!");

      setTitle("");
      setLocation("");
      setCategory("");
      setCondition("");
      setSelectedFile(null);
      document.getElementById("fileUpload").value = "";
    } catch (error) {
      console.error(error);
      alert("Upload failed. Check backend server.");
    } finally {
      setLoading(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setDetectedCategory("");
    document.getElementById("fileUpload").value = "";
  };

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

          <form
            onSubmit={handleSubmit}
            className="bg-[#510A32]/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6"
          >
            <input
              type="text"
              placeholder="Item title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#2D142C] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#FE4540] transition"
              required
            />

            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full appearance-none bg-[#2D142C] border border-white/10 rounded-2xl px-5 py-4 pr-14 outline-none text-white focus:border-[#FE4540] transition hover:border-[#FE4540]/50"
                required
              >
                <option value="" className="bg-[#2D142C] text-gray-400">
                  Choose Category
                </option>
                <option value="Books" className="bg-[#2D142C]">
                  Books
                </option>
                <option value="Clothes" className="bg-[#2D142C]">
                  Clothes
                </option>
                <option value="School Supplies" className="bg-[#2D142C]">
                  School Supplies
                </option>
                <option value="Electronics" className="bg-[#2D142C]">
                  Electronics
                </option>
                <option value="Utility Items" className="bg-[#2D142C]">
                  Utility Items
                </option>
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
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full appearance-none bg-[#2D142C] border border-white/10 rounded-2xl px-5 py-4 pr-14 outline-none text-white focus:border-[#FE4540] transition hover:border-[#FE4540]/50"
                required
              >
                <option value="" className="bg-[#2D142C] text-gray-400">
                  Condition
                </option>
                <option value="New" className="bg-[#2D142C]">
                  New
                </option>
                <option value="Good" className="bg-[#2D142C]">
                  Good
                </option>
                <option value="Usable" className="bg-[#2D142C]">
                  Usable
                </option>
                <option value="Needs Repair" className="bg-[#2D142C]">
                  Needs Repair
                </option>
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

            <input
              type="text"
              placeholder="Pickup location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-[#2D142C] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#FE4540] transition"
              required
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
                    setSelectedFile(file);
                    setDetectedCategory("");
                    setSuccessMessage("");
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
                    <span className="text-[#FE4540]">{selectedFile.name}</span>
                  </p>

                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-sm text-red-400 hover:text-red-300 transition"
                  >
                    Remove File
                  </button>
                </div>
              )}
            </div>

            {detectedCategory && (
              <div className="bg-[#2D142C] border border-[#FE4540]/30 rounded-2xl p-4">
                <p className="text-gray-400 text-sm">AI Detected Category</p>

                <h2 className="text-2xl font-bold text-[#FE4540] mt-1">
                  {detectedCategory}
                </h2>
              </div>
            )}

            {successMessage && (
              <div className="bg-[#2D142C] border border-white/10 rounded-2xl p-4 text-gray-300">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FE4540] hover:bg-[#C72C41] disabled:opacity-60 disabled:cursor-not-allowed transition py-4 rounded-2xl font-semibold shadow-lg shadow-[#FE4540]/20"
            >
              {loading ? "Detecting..." : "Submit Donation"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
