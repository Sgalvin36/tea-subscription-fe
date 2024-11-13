import { useState, useEffect } from 'react';
import SubscriptionPage from './Subscription Page/subscriptionPage';
import SubscriptionDetails from './Subscription Details/subscriptionDetails';
import cafe from './icons/cafe.png';
import mug from './icons/mug.png';
import tea from './icons/tea.png';
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css';

export default function App() {
  const [subs, setSubs] = useState([])
  const [error, setError] = useState('')
  const icons = [cafe, mug, tea]
  const navigate = useNavigate();

  useEffect(() => {
    getSubscriptions();
  }, [])

  function getSubscriptions() {
    fetch('http://localhost:3000/api/v1/subscriptions')
    .then(response => response.json())
    .then(data => {
      const subDatawithIcons = data.data.map(sub => ({
        ...sub,
        icon: icons[Math.floor(Math.random() * icons.length)]
      }));
      setSubs(subDatawithIcons);
    })
    .catch(error => {
      console.log(error)
      setError('Oops! Something went wrong! Please try again in a couple minutes.')
    })
  }

  function getDetails(event, id) {
    console.log('event', event)
    console.log('id',id)
    fetch(`http://localhost:3000/api/v1/subscriptions/${id}`)
    .then(response => response.json())
    .then(data => navigate(`/subscription/${id}`, { state: { subDetails: data.data}}))
    .catch(error => {
      console.log(error)
      setError('Oops! Something went wrong! Please try again in a couple minutes.')
    })
  }

  return (
<main className='App'>
<Routes>
        <Route path='/' element={<>
              <h1>Tea Time</h1>
              <SubscriptionPage subs={subs} getDetails={getDetails} />
            </>
          }/>
        <Route path='/subscription/:id' element={<>
            <h1>Tea Time Details</h1>
            <SubscriptionDetails />
          </>
        }/>
        <Route path='*' element={<>
            <h1>Something went wrong</h1>
            {error && <h2>{error}</h2>}
          </>
        }/>
      </Routes>
    </main>
  );
}

