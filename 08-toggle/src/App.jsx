import React, { useState } from 'react';

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <button
          onClick={toggleHandler}
          className={`px-6 py-3 rounded-full text-white text-lg font-semibold transition-all duration-300 
            ${isOn ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
        >
          {isOn ? 'ON' : 'OFF'}
        </button>

        <p className="mt-4 text-xl font-medium">
          Toggle is <span className="font-bold text-blue-600">{isOn ? 'Enabled' : 'Disabled'}</span>
        </p>
      </div>
    </div>
  );
};

export default App;
