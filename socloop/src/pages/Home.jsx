import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#2D142C] text-white overflow-hidden">
      <Navbar />
      <section className="pt-32 sm:pt-40 px-4 sm:px-6 relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#801336] opacity-20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <p className="text-[#FE4540] uppercase tracking-[0.3em] text-sm mb-6">
              Sustainable Communities • AI Powered
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Building
              <span className="text-[#FE4540]"> Smarter </span>&
              <span className="text-[#C72C41]"> Sustainable </span>
              Cities Together
            </h1>

            <p className="mt-8 text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              Redistribute books, clothes, and essential resources, reduce
              environmental waste, track carbon footprint, and empower
              communities through intelligent sustainability.
            </p>

           
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FE4540] hover:bg-[#C72C41] transition px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-[#FE4540]/20">
                Start Donating
              </button>

              <button className="border border-white/10 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-semibold backdrop-blur-lg">
                Explore Platform
              </button>
            </div>

            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                ["15K+", "Items Reused"],
                ["7K+", "Students Helped"],
                ["22 Tons", "Waste Reduced"],
                ["40%", "Carbon Reduced"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#510A32]/70 border border-white/10 rounded-2xl p-5 backdrop-blur-lg"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#FE4540]">
                    {item[0]}
                  </h2>

                  <p className="mt-2 text-gray-400 text-sm">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
