import { useState, useEffect } from 'react';
import SubscriptionPage from './Subscription Page/subscriptionPage';
import './App.css';

export default function App() {
  const [subs, setSubs] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getSubscriptions();
  }, [])

  function getSubscriptions() {
    fetch('http://localhost:3000/api/v1/subscriptions')
    .then(response => response.json())
    .then(data => setSubs(data.data))
    .catch(error => {
      console.log(error)
      setError('Oops! Something went wrong! Please try again in a couple minutes.')
    })
  }

  return (
<main className='App'>
      <h1>Tea Time</h1>
      {error && <h2>{error}</h2>}
      <SubscriptionPage subs={subs} />
    </main>
  );
}

