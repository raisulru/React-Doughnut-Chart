import React, { Component } from 'react';
import './app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DoughnutCharts from './graph';


class App extends Component {
  render() {
    return (
          <div className='doughnut-chart'>
            <DoughnutCharts />
          </div>
    );
  }
}

export default App;
