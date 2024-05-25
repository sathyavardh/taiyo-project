import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { fetchHistoricalData } from '../../api/covidApi';
import Loader from '../common/Loader';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const { data, error, isLoading } = useQuery('historicalData', fetchHistoricalData);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading data...</p>;

  if (!data) return <p>No data available</p>;

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      },
      {
        label: 'Deaths',
        data: Object.values(data.deaths),
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        tension: 0.1
      },
      {
        label: 'Recovered',
        data: Object.values(data.recovered),
        fill: false,
        borderColor: 'rgba(153,102,255,1)',
        tension: 0.1
      }
    ]
  };

  const options = {
    aspectRatio: 2,
    maintainAspectRatio: true,
    // You can add more options as needed
  };

  return (
    <div>
    <div className="text-xl mb-4">COVID-19 Graph</div>
    <div className="p-4 bg-white shadow-md rounded-md">
      <Line data={chartData} options={options} />
    </div>
    </div>
  );
};

export default LineGraph;
