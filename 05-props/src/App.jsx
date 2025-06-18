import React from 'react';
import UserList from './components/UserList';

const App = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">User Profiles</h1>
      <UserList />
    </div>
  );
};

export default App;
