import React, { useState } from 'react';

const App = () => {
  // 1. Declare a state variable named 'count' and a function to update it named 'setCount'.
  //    The initial value of 'count' is set to 0.
  const [count, setCount] = useState(0);

  // 2. Event handler to increment the count
  const handleIncrement = () => {
    // When calling setCount, React re-renders the component with the new 'count' value.
    setCount(count + 1);
  };

  // 3. Event handler to decrement the count
  const handleDecrement = () => {
    // Ensure count doesn't go below zero (optional, but good practice for a counter)
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // 4. Event handler to reset the count
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4 font-inter">
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center max-w-md w-full transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 drop-shadow-md">
          Simple Counter
        </h1>

        {/* Display the current count */}
        <p className="text-6xl sm:text-7xl font-bold text-blue-600 mb-8 select-none">
          {count}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Decrement Button */}
          <button
            onClick={handleDecrement}
            className="flex-1 bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out shadow-md hover:shadow-lg text-lg"
          >
            Decrement
          </button>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="flex-1 bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-200 ease-in-out shadow-md hover:shadow-lg text-lg"
          >
            Reset
          </button>

          {/* Increment Button */}
          <button
            onClick={handleIncrement}
            className="flex-1 bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-200 ease-in-out shadow-md hover:shadow-lg text-lg"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
