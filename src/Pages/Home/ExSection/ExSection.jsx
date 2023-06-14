import IMG1 from '../../../assets/Banner/fineArt.jpeg'
import IMG2 from '../../../assets/Banner/travel.jpg'
import IMG3 from '../../../assets/Banner/cultural.jpg'

const ExSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Discover Our Unique Perspective
          </h2>
          <p className="text-gray-600 text-lg text-center">
          Beautiful Perspective encapsulates the enchanting artistry that lies within every captured moment. Through the lens, it reveals the world s intricate details, illuminating hidden wonders and evoking emotions. It transcends boundaries, inviting us to see the extraordinary in the ordinary, and celebrates the power of visual storytelling. Discover the magic that unfolds when beauty meets perspective
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={IMG1}
              alt="Unique Perspective 1"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Capturing the Essence of Nature
              </h3>
              <p className="text-gray-600">
                Explore the beauty of nature through our photography courses. Learn
                to capture stunning landscapes and breathtaking natural scenes.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={IMG2}
              alt="Unique Perspective 2"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Exploring the Urban Jungle
              </h3>
              <p className="text-gray-600">
                Dive into the vibrant world of street photography and urban life.
                Learn to capture the essence of bustling cityscapes and unique
                urban environments.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={IMG3}
              alt="Unique Perspective 3"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Embracing Cultural Diversity
              </h3>
              <p className="text-gray-600">
                Capture the beauty of cultural diversity through your lens. Learn to
                document different traditions, celebrations, and people from around
                the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ExSection;