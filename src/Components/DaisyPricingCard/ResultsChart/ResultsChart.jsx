import { LineChart,Line, XAxis, YAxis } from 'recharts';
import React from 'react';

let resultData=[
    {
      "id": 1,
      "name": "Alice",
      "physics": 85,
      "chemistry": 78,
      "math": 92
    },
    {
      "id": 2,
      "name": "Bob",
      "physics": 74,
      "chemistry": 88,
      "math": 81
    },
    {
      "id": 3,
      "name": "Charlie",
      "physics": 90,
      "chemistry": 84,
      "math": 87
    },
    {
      "id": 4,
      "name": "David",
      "physics": 66,
      "chemistry": 72,
      "math": 69
    },
    {
      "id": 5,
      "name": "Eva",
      "physics": 92,
      "chemistry": 89,
      "math": 95
    },
    {
      "id": 6,
      "name": "Farhan",
      "physics": 77,
      "chemistry": 85,
      "math": 80
    },
    {
      "id": 7,
      "name": "Grace",
      "physics": 88,
      "chemistry": 91,
      "math": 93
    },
    {
      "id": 8,
      "name": "Hassan",
      "physics": 70,
      "chemistry": 75,
      "math": 68
    },
    {
      "id": 9,
      "name": "Ivy",
      "physics": 83,
      "chemistry": 79,
      "math": 85
    },
    {
      "id": 10,
      "name": "Jack",
      "physics": 78,
      "chemistry": 80,
      "math": 76
    }
  ]
const ResultsChart = () => {
    //console.log(resultData)
    return (
        <div className='mx-10'>
            <LineChart width={800} height={400} data={resultData}>
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math'></Line>
                <Line dataKey='chemistry'  stroke='red'></Line>
                {/* <Line dataKey='physics'></Line> */}
            </LineChart>
        </div>
    );
};

export default ResultsChart;