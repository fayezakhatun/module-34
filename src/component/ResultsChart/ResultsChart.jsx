import { LineChart, Line, XAxis, YAxis } from 'recharts';
import React from 'react';


const resultData = [
  {
    "student_id": 1,
    "name": "Rahim",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "student_id": 2,
    "name": "Karim",
    "physics": 72,
    "chemistry": 80,
    "math": 75
  },
  {
    "student_id": 3,
    "name": "Ayesha",
    "physics": 91,
    "chemistry": 89,
    "math": 95
  },
  {
    "student_id": 4,
    "name": "Nusrat",
    "physics": 67,
    "chemistry": 70,
    "math": 65
  },
  {
    "student_id": 5,
    "name": "Sakib",
    "physics": 78,
    "chemistry": 82,
    "math": 80
  }
]


const ResultsChart = () => {
    return (
        <div>
            <LineChart width={600} height={400} data={resultData}>
                <XAxis  dataKey="name"></XAxis>
                <YAxis></YAxis>
              <Line  dataKey="math"></Line> 
              <Line  dataKey={'chemistry'} stroke= 'orange'></Line> 
              <Line  dataKey={'physics'} stroke= 'red'></Line> 
            </LineChart>
        </div>
    );
};

export default ResultsChart;