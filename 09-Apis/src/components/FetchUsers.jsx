import React, { useState, useEffect } from 'react';

const FetchUsers = () => {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-4">Loading dog image...</p>;

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Random Dog Image</h2>
      <img src={dogImage} alt="Random Dog" className="rounded-md shadow-md mx-auto w-64 h-64 object-cover" />
    </div>
  );
};

export default FetchUsers;
