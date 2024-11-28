import React from 'react';
import Child from './child';

const Parent = () => {
  const data = [
    {
      name: "touseef",
      cast: "khan",
      age: 18,
      qualification: "icom",
      gender: "male",
    },
    {
      name: "mahnoor",
      cast: "Khan",
      age: 20,
      qualification: "msit",
      gender: "female",
    },
    {
      name: "naba",
      cast: "khan",
      age: 24,
      qualification: "b com",
      gender: "female",
    },
  ];

  return (
    <div>
      {data.map((person, index) => (
        <Child
          key={index} 
          name={person.name}
          cast={person.cast}
          age={person.age}
          qualification={person.qualification}
          gender={person.gender}
        />
      ))}
    </div>
  );
};

export default Parent;