import React from 'react';
import '../styles/home.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1900, 2400, 3000, 3500, 5000, 5500, 6000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

  return (
    <div className="home-container">
      <h2>Welcome to ELITE GADGETS</h2>
      <p>
        At ELITE GADGETS, we offer the latest and greatest in electronics, including air conditioners, televisions, laptops, and smartphones.
        Our mission is to provide top-notch products and exceptional customer service to enhance your tech experience.
      </p>
      <h3>Monthly Sales Overview</h3>
      <p>
        Here is a glimpse of our monthly sales performance. We are continuously working to improve our offerings and provide the best deals for our customers!
      </p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Home;
