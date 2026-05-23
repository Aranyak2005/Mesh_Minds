export default function Stats() {
  const stats = [
    {
      number: "15K+",
      label: "Items Reused",
    },
    {
      number: "7K+",
      label: "Students Helped",
    },
    {
      number: "22 Tons",
      label: "Waste Reduced",
    },
    {
      number: "40%",
      label: "Carbon Reduction",
    },
  ];

  return (
    <section className="px-4 sm:px-6 py-20 bg-[#2D142C]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#FE4540] uppercase tracking-[0.3em] text-sm mb-4">
            Sustainability Impact
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Building Real Change Together
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#510A32]/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-lg text-center hover:border-[#FE4540]/60 transition"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-[#FE4540]">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-400 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
