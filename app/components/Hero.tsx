export default function Hero() {
    return (
      <section className="bg-[url('/background.jpg')] bg-cover bg-center h-[55vh] flex items-center justify-center text-white text-center">
        <div className="p-6 rounded-lg md:mx-auto mx-5" style={{ backgroundColor: 'rgba(0, 126, 167)' }}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The Daily Grind Café
          </h1>
          <p className="text-xl mt-4">
            Brisbane&apos;s Favourite Brew Spot
          </p>
        </div>
      </section>
    );
  }
  