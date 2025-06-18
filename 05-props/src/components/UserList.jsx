import React from 'react';
import UserCard from './UserCard';

const users = [
  {
    name: "Devang Jadav",
    age: 24,
    location: "Ahmedabad",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Neha Sharma",
    age: 29,
    location: "Delhi",
    avatar: "https://i.pravatar.cc/150?img=6"
  },
  {
    name: "Ravi Kumar",
    age: 32,
    location: "Mumbai",
    avatar: "https://i.pravatar.cc/150?img=12"
  }
];

const UserList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {users.map((user, index) => (
        <UserCard 
          key={index}
          name={user.name}
          age={user.age}
          location={user.location}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
};

export default UserList;
