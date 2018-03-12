import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';


const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 20
      }
    }
  }

class DoughnutCharts extends Component {
    render() {
        return (
           <Doughnut 
                data={data}
                width={600}
                height={500}
                options={options} 
            />
    );
  }
}

export default DoughnutCharts;
