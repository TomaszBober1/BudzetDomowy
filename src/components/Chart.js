import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function Chart(props) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'Money flow',
        },
    },
    };
    
    
    //{/*data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),*/}
    const data = {
    labels: props.labels,
    datasets: [
        {
        label: 'Income',
        data: props.data1,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'Outcome',
        data: props.data2,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    };

  return(
    <>
      <div className='graph_chart'>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default Chart;