export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <p className="text-gray-300 text-lg">Service Information</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="https://static.wixstatic.com/media/e6f01c257e3c46de84f40f118e6ba42f.jpg/v1/fit/w_50,h_50,q_80,usm_0.66_1.00_0.01,blur_3,enc_auto/e6f01c257e3c46de84f40f118e6ba42f.jpg"
                alt="Balloon Art Workshop"
                className="w-24 h-24 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjEyIiB5PSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzlDQTNBRiIgZm9udC1zaXplPSI4Ij5JbWFnZTwvdGV4dD4KPHN2Zz4='
                }}
              />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Balloon Art Workshop</h3>
              <div className="border-t border-gray-700 my-4"></div>
              <p className="text-3xl font-bold text-white mb-4">$50</p>
              <p className="text-gray-400 mb-6">50 US dollars</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.partyplans4u.com/booking-calendar/balloon-art-workshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Book Now
                </a>
                <button className="text-red-400 hover:text-red-300 font-semibold transition-colors">
                  Explore Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
