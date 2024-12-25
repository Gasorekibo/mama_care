import { useState } from "react";
import Footer from "../components/Footer";
import { process } from "../utils/processes";
import { hospitals } from "../utils/Hospitals";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Hospitals" },
    { id: "speciality", name: "Specialty Centers" },
    { id: "general", name: "General Care" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {process.map((item, index) => (
            <div key={item.index} className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hospitals Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Hospital Network
          </h2>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital) => (
              <div
                key={hospital.hospitalName}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={hospital.imageSource}
                  alt={hospital.hospitalName}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {hospital.hospitalName}
                  </h3>
                  <p className="text-gray-600 mb-4">{hospital.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={hospital.ownerProfile}
                        alt={hospital.owner}
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                      <span className="text-gray-800 font-semibold">
                        {hospital.owner}
                      </span>
                    </div>
                    <span className="text-gray-600">{hospital.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Medical Assistance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of medical professionals is here to help you 24/7. Book an
            appointment or contact us for emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Emergency Contact
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
