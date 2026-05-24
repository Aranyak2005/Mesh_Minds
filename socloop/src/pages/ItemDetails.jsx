import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { MapPin, Phone, Mail, User } from "lucide-react";

const items = [
  {
    id: "1",
    title: "Class 10 Science Books",
    category: "Books",
    location: "Kolkata",
    donor: "Aranyak Ghosh",
    phone: "+91 9876543210",
    email: "aranyak@gmail.com",
    condition: "Good",
    description:
      "Used Class 10 science books in excellent condition for students preparing for board exams.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "2",
    title: "Winter Clothes Bundle",
    category: "Clothes",
    location: "Delhi",
    donor: "Rahul Sharma",
    phone: "+91 9123456780",
    email: "rahul@gmail.com",
    condition: "Usable",
    description:
      "Warm winter clothes suitable for students and families during cold weather.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "3",
    title: "School Backpack",
    category: "Utility",
    location: "Mumbai",
    donor: "Sneha Verma",
    phone: "+91 9876512340",
    email: "sneha@gmail.com",
    condition: "Good",
    description:
      "Durable school backpack with multiple compartments for books and supplies.",
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "4",
    title: "Used Laptop",
    category: "Electronics",
    location: "Bangalore",
    donor: "Aditya Roy",
    phone: "+91 9988776655",
    email: "aditya@gmail.com",
    condition: "Working",
    description:
      "Fully working used laptop suitable for online classes and educational work.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ItemDetails() {
  const { id } = useParams();

  const [requested, setRequested] = useState(false);

  const item = items.find((i) => i.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#2D142C] text-white flex items-center justify-center">
        Item not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2D142C] text-white">
      <Navbar />

      <section className="pt-32 px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Details */}
          <div className="bg-[#510A32]/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            <p className="text-[#FE4540] uppercase tracking-[0.3em] text-sm mb-4">
              {item.category}
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {item.title}
            </h1>

            <p className="mt-6 text-gray-300 leading-relaxed">
              {item.description}
            </p>

            {/* Info */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <User className="text-[#FE4540]" size={22} />

                <div>
                  <p className="text-gray-400 text-sm">Donor</p>

                  <h3 className="font-medium">{item.donor}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-[#FE4540]" size={22} />

                <div>
                  <p className="text-gray-400 text-sm">Location</p>

                  <h3 className="font-medium">{item.location}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#FE4540]" size={22} />

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>

                  <h3 className="font-medium">{item.phone}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#FE4540]" size={22} />

                <div>
                  <p className="text-gray-400 text-sm">Email</p>

                  <h3 className="font-medium">{item.email}</h3>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-2">Condition</p>

                <span className="bg-[#FE4540]/20 text-[#FE4540] px-4 py-2 rounded-xl text-sm">
                  {item.condition}
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => setRequested(true)}
              disabled={requested}
              className={`mt-10 w-full py-4 rounded-2xl font-semibold transition ${
                requested
                  ? "bg-green-600 cursor-not-allowed"
                  : "bg-[#FE4540] hover:bg-[#C72C41]"
              }`}
            >
              {requested ? "Donation Requested" : "Request Donation"}
            </button>

            {/* Back */}
            <Link
              to="/browse"
              className="block text-center text-gray-400 hover:text-white transition mt-6"
            >
              Back to Browse
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
