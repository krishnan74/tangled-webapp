import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-between bg-white text-gray-800 w-10/12 shadow-md p-4 rounded-3xl">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-200 w-16 h-16 rounded-3xl overflow-hidden">
            {/* You can replace the src with an actual image URL */}
            <img
              src="https://via.placeholder.com/150" // Placeholder image URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-semibold">{props.name}</p>
            <p className="text-gray-500">{props.speciality}</p>
            <p className="text-gray-500">{props.patient_count} Patients</p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 mr-3 px-4 rounded-lg">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
