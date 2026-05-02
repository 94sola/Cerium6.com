// Hero.jsx
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#130035] text-white overflow-hidden"
    >
      <div className="absolute inset-0  pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-10 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 pt-10 lg:pr-8 xl:pr-12">
           
            <h1 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block text-transparent bg-violet-400 bg-clip-text">
                The Operating Platform for
              </span>
              <span className="block mt-2 text-transparent bg-violet-400 bg-clip-text">
                Commercial Analytical
              </span>
              <span className="block mt-2 text-transparent bg-violet-400 bg-clip-text">
                Laboratories
              </span>
            </h1>
            
          </div>

          <div className=" sm:p-10"> 
            <p className="text-base leading-7 text-gray-300 sm:text-lg">
              From sample intake to final reports, Cerium6 gives analytical laboratories complete control of operations, staff performance, customer relationships, and project delivery.
            </p>

          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_60px_-40px_rgba(0,0,0,0.7)] backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg shadow-orange-500/20">
              C
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Creativity</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_60px_-40px_rgba(0,0,0,0.7)] backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-violet-500 text-white shadow-lg shadow-sky-500/20">
              T
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Technology</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_60px_-40px_rgba(0,0,0,0.7)] backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/20">
              S
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Strategy</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_60px_-40px_rgba(0,0,0,0.7)] backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-stone-400 to-slate-600 text-white shadow-lg shadow-stone-500/20">
              A
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Agile</p>
          </div>
        </div>
      </div>
    </section>
  );
}
