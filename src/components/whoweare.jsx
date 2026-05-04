const BusinessValues = () => {
  return (
    <section className="bg-[#130035] w-full px-6 py-12 sm:px-8 sm:py-16 lg:px-16">
      <div className="max-w-6xl mx-auto grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
          <span className="mt-1 h-4 w-4 rounded-full bg-orange-500"></span>
          <p className="text-base sm:text-lg text-white">Our work and our clients speak for us</p>
        </div>
        <div className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
          <span className="mt-1 h-4 w-4 rounded-full bg-blue-600"></span>
          <p className="text-base sm:text-lg text-white">We work with transparency and proactive communication</p>
        </div>
        <div className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
          <span className="mt-1 h-4 w-4 rounded-full bg-yellow-400"></span>
          <p className="text-base sm:text-lg text-white">We value relationships more than contracts</p>
        </div>
        <div className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
          <span className="mt-1 h-4 w-4 rounded-full bg-gray-500"></span>
          <p className="text-base sm:text-lg text-white">You only pay for results you love</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessValues;
