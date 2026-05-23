import Navbar from "../components/Navbar";
import {
  Package,
  Users,
  Recycle,
  HeartHandshake,
  TrendingUp,
  MapPin,
} from "lucide-react";

const impactCards = [
  {
    title: "Items Shared",
    value: "128",
    icon: Package,
  },
  {
    title: "Items Received",
    value: "54",
    icon: Users,
  },
  {
    title: "Resources Reused",
    value: "94%",
    icon: Recycle,
  },
  {
    title: "People Helped",
    value: "76",
    icon: HeartHandshake,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#2D142C] text-white">
      <Navbar />

      <section className="pt-32 px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <p className="text-[#FE4540] uppercase tracking-[0.3em] text-sm mb-4">
              Impact Dashboard
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold">
              Track community resource sharing
            </h1>

            <p className="mt-5 text-gray-400 max-w-2xl">
              View redistribution impact, resource reuse insights, and
              sustainability activity across your community.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {impactCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#510A32]/70 border border-white/10 rounded-3xl p-6 hover:border-[#FE4540]/60 transition"
              >
                <card.icon className="text-[#FE4540] mb-5" size={34} />

                <h3 className="text-3xl font-bold">{card.value}</h3>

                <p className="mt-2 text-gray-400 text-sm">{card.title}</p>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Activity */}
            <div className="lg:col-span-2 bg-[#510A32]/70 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-[#FE4540]" size={28} />

                <h2 className="text-2xl font-semibold">
                  Redistribution Activity
                </h2>
              </div>

              <div className="h-72 rounded-2xl bg-[#2D142C] border border-white/10 flex items-center justify-center text-gray-500">
                Activity analytics will appear here
              </div>
            </div>

            {/* Insights */}
            <div className="bg-[#510A32]/70 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-[#FE4540]" size={28} />

                <h2 className="text-2xl font-semibold">Community Insights</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-[#2D142C] border border-white/10 rounded-2xl p-4">
                  <p className="text-sm text-gray-400">High demand zone</p>

                  <h3 className="text-lg font-semibold mt-1">North Kolkata</h3>
                </div>

                <div className="bg-[#2D142C] border border-white/10 rounded-2xl p-4">
                  <p className="text-sm text-gray-400">Most requested item</p>

                  <h3 className="text-lg font-semibold mt-1">School Books</h3>
                </div>

                <div className="bg-[#2D142C] border border-white/10 rounded-2xl p-4">
                  <p className="text-sm text-gray-400">Suggested action</p>

                  <h3 className="text-lg font-semibold mt-1">
                    Add community donation hub
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
