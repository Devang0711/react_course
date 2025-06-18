import React from 'react';

const UserCard = ({ name, age, location, avatar }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <img src={avatar} alt={name} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-semibold text-center mt-4">{name}</h2>
      <p className="text-center text-gray-600">Age: {age}</p>
      <p className="text-center text-gray-600">Location: {location}</p>
    </div>
  );
};

export default UserCard;
