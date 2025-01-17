import { Button } from "flowbite-react";
import PropTypes from "prop-types";
function HospitalCard({ hospital }) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div className="relative group/image overflow-hidden cursor-pointer">
          <img
            src={hospital?.profilePicture}
            alt="Hospital"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
            <div className="p-4 transform translate-y-full group-hover/image:translate-y-0 transition-transform duration-300">
              <div className="mb-2">
                <h1 className="font-extrabold mb-2 text-xl underline">
                  Our Services
                </h1>
                <p className="grid grid-cols-3 gap-2 font-semibold text-sm">
                  {hospital?.servicesOffered?.map((service) => (
                    <span key={service} className="text-gray-800">
                      {service}
                    </span>
                  ))}
                </p>
              </div>
              <div className="col-span-2">
                <h1 className="font-extrabold mb-2 text-xl underline">
                  More Info
                </h1>

                <p className="font-semibold">
                  Phone:
                  <span className="font-normal mx-2">{hospital?.contactNumber}</span>
                </p>
                <p className="font-semibold">
                  Email:<span className="font-normal mx-2">{hospital?.email}</span>
                </p>
                <p className="font-semibold">
                  Open:
                  <span className="font-normal mx-2">{hospital?.openingTime}</span>
                </p>

                <p className="font-semibold">
                  Close:
                  <span className="font-normal mx-2">{hospital?.closingTime}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {hospital?.name}
          </h2>

          <div className="flex justify-between gap-16 items-center">
            <div className="flex items-center">
              <img
                src={hospital?.profilePicture || "https://i.pravatar.cc/300"}
                alt="Avatar"
                className="w-8 h-8 rounded-full mr-2 object-cover"
              />
              <span className="text-gray-800 font-semibold">
                {hospital.owner || "Gasore Mugwaneza"}
              </span>
            </div>
            <div className="text-gray-600">
              <p>
                {hospital?.location?.province} - {hospital?.location?.region}{" "}
                {hospital?.location?.address}
              </p>
            </div>
          </div>

          <Button
            color="blue"
            className="bg-blue-700 hover:bg-blue-800 mx-auto mt-4"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

HospitalCard.propTypes = {
  hospital: PropTypes.object.isRequired,
};

export default HospitalCard;
