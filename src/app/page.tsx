import Hero from "@/components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* Workout Library will come here later */}
      <section id="library" className="min-h-screen">
        <div className="mx-auto max-w-[1800px] px-4 py-20">
          <h2 className="text-3xl font-bold text-white">
            Workout Library
          </h2>
        </div>
      </section>
    </>
  );
};

export default HomePage;