import React, { useState } from 'react';
import LifecycleDemo from './components/LifecycleDemo';

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-700"> React Lifecycle</h1>
      
      <button
        onClick={() => setShow(!show)}
        className="mb-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {show ? 'Hide' : 'Show'} Component
      </button>

      {show && <LifecycleDemo />}
    </div>
  );
};

export default App;
