
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Chartbox = ({ metric }) => {
  const [series, setSeries] = useState([{ data: [] }]);
  const [options] = useState({
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: ` ${metric}`,
      align: 'left',
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'category',
      categories: [],
    },
    yaxis: {
      max: 100,
    },
    legend: {
      show: true,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new data
      const newData = Array.from({ length: 10 }, () => ({
        x: new Date().toISOString(), // Current timestamp
        y: Math.floor(Math.random() * (90 - 10 + 1)) + 10, // Random value between 10 and 90
      }));

      setSeries([{ data: newData }]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default Chartbox;
