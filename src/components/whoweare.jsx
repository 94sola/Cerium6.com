// BusinessValues.jsx


const BusinessValues = () => {
  return (
    <section className="bg-[#130035] w-full  px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Value 1 */}
        <div className="flex items-center space-x-3 pb-4 border-b border-gray-700">
          <span className="w-4 h-4 rounded-full bg-orange-500"></span>
          <p className="text-lg text-white">Our work and our clients speak for us</p>
        </div>

        {/* Value 2 */}
        <div className="flex items-center space-x-3 py-4 border-b border-gray-700">
          <span className="w-4 h-4 rounded-full bg-blue-600"></span>
          <p className="text-lg text-white">We work with transparency and proactive communication</p>
        </div>

        {/* Value 3 */}
        <div className="flex items-center space-x-3 py-4 border-b border-gray-700">
          <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
          <p className="text-lg text-white">We value relationships more than contracts</p>
        </div>

        {/* Value 4 */}
        <div className="flex items-center space-x-3 py-4">
          <span className="w-4 h-4 rounded-full bg-gray-500"></span>
          <p className="text-lg text-white">You only pay for results you love</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessValues;
