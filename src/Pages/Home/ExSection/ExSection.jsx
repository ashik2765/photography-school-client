

const ExSection = () => {
    return (
        <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Discover Our Unique Perspective
          </h2>
          <p className="text-gray-600 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dignissim mi sed nisl ultrices, sed lobortis lectus tristique.
            Nulla facilisi. Donec et volutpat neque.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://example.com/unique-section-1.jpg"
              alt="Unique Perspective 1"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Capturing the Essence of Nature
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                lobortis odio sed elit lacinia, ac aliquam odio faucibus.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://example.com/unique-section-2.jpg"
              alt="Unique Perspective 2"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Exploring the Urban Jungle
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                lobortis odio sed elit lacinia, ac aliquam odio faucibus.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://example.com/unique-section-3.jpg"
              alt="Unique Perspective 3"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Embracing Cultural Diversity
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                lobortis odio sed elit lacinia, ac aliquam odio faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default ExSection;