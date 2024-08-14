import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Classes = () => {
  const [classes, setClasses] = useState([]);

  // useEffect(() => {
  //   const fetchClasses = async () => {
  //     try {
  //       const response = await axios.get('/classes'); // Adjust based on your API
  //       setClasses(response.data);
  //     } catch (error) {
  //       console.error('Error fetching classes:', error);
  //     }
  //   };

  //   fetchClasses();
  // }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Classes</h2>
      <ul className="mt-4">
        {classes.map((cls, index) => (
          <li key={index} className="border p-2 mb-2">{cls.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Classes;
