import { BookOpen, Recycle, Leaf, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Smart Redistribution",
    description:
      "Donate books, clothes, school supplies, and useful items to people who need them.",
    icon: BookOpen,
  },
  {
    title: "Circular Reuse",
    description:
      "Reduce waste by giving unused resources a second life inside your community.",
    icon: Recycle,
  },
  {
    title: "Carbon Footprint AI",
    description:
      "Track lifestyle habits and get AI-powered suggestions to reduce emissions.",
    icon: Leaf,
  },
  {
    title: "Smart City Insights",
    description:
      "Help city planners understand resource needs and sustainability gaps.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section className="px-4 sm:px-6 py-20 bg-[#2D142C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#FE4540] uppercase tracking-[0.3em] text-sm mb-4">
            Core Platform
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            One Platform, Multiple SDG Impacts
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-[#510A32]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:border-[#FE4540]/60 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#801336] flex items-center justify-center mb-5">
                  <Icon className="text-[#FE4540]" size={30} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
