import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TimeTable = () => {
  const [timeTable, setTimeTable] = useState([]);

  // useEffect(() => {
  //   const fetchTimeTable = async () => {
  //     try {
  //       const response = await axios.get('/timetable'); // Adjust based on your API
  //       setTimeTable(response.data);
  //     } catch (error) {
  //       console.error('Error fetching time table:', error);
  //     }
  //   };

  //   fetchTimeTable();
  // }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Time-Table</h2>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Day</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">End Time</th>
          </tr>
        </thead>
        <tbody>
          {timeTable.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{entry.day}</td>
              <td className="border p-2">{entry.startTime}</td>
              <td className="border p-2">{entry.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
