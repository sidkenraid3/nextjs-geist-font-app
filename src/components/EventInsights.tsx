export default function EventInsights() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Event Insights</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://static.wixstatic.com/media/0aedd9_c62f21f578994571af11205abc817f59~mv2.jpg"
                alt="Event Details"
                className="w-full h-80 object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LXNpemU9IjE2Ij5FdmVudCBJbWFnZTwvdGV4dD4KPHN2Zz4='
                }}
              />
            </div>
            
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">Event Details</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Let us take the stress out of planning your event. Our team will handle every detail to ensure your event is a seamless success.
              </p>
              <a 
                href="https://www.partyplans4u.com/event-details-registration/summer-kick-off"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
