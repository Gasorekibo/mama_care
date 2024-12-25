import PropTypes from "prop-types";

function HospitalCard({
  hospitalName,
  imageSource,
  description,
  owner,
  time,
  ownerProfile,
}) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <img
          src={imageSource}
          alt="Mountain"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {hospitalName}
          </h2>
          <p className="text-gray-700 leading-tight mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={ownerProfile}
                alt="Avatar"
                className="w-8 h-8 rounded-full mr-2 object-cover"
              />
              <span className="text-gray-800 font-semibold">{owner}</span>
            </div>
            <span className="text-gray-600">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
HospitalCard.propTypes = {
  hospitalName: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  ownerProfile: PropTypes.string.isRequired,
};

export default HospitalCard;
