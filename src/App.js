import logo from './logo.svg';
import './App.css';
import Mainroutes from './routes/Mainroutes';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = () => {
    setLoading(true);

    // Simulating a fetch operation
    setTimeout(() => {
      // Replace this with your actual fetch logic
      setData('Fetched data here');
      setLoading(false);
    }, 2000); // Simulated 2-second delay
  };
  return (
    <Mainroutes/>

  );
}

export default App;
