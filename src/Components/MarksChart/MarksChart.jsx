import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import React, { use } from 'react';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise)
    const marksData=marksDataRes.data;
   // console.log(marksData)
    //data processing for the chart
    let marksChartData = marksData.map(studentData=> {
        let student ={
            id:studentData.id,
            name : studentData.name,
            physics: studentData.physics,
            math:studentData.math,
            chemistry: studentData.chemistry
        }
        let avg=(student.physics+student.math+student.chemistry)/3
        student.avg=avg;

        return student;
    } )
    console.log(marksChartData)
    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey='chemistry' fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;