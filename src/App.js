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
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status); 
      }
      return response.json()
    })
    .then(data => {
      const subDatawithIcons = data.data.map(sub => ({
        ...sub,
        icon: icons[Math.floor(Math.random() * icons.length)]
      }));
      
      sortSubs(subDatawithIcons);
    })
    .catch(error => {
      console.log(error)
      setError('Oops! Something went wrong! Please try again in a couple minutes.')
    })
  }

  function getDetails(event, id) {
    fetch(`http://localhost:3000/api/v1/subscriptions/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status); 
      }
      return response.json()
    })
    .then(data => navigate(`/subscription/${id}`, { state: { subDetails: data.data}}))
    .catch(error => {
      console.log(error)
      setError('Oops! Something went wrong! Please try again in a couple minutes.')
    })
  }

  function updateSubscription(id, status) {
    fetch(`http://localhost:3000/api/v1/subscriptions/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({'status': status}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status); 
      }
      return response.json()
    })
    .then(data => updateSubs(data.data))
    .catch(error => {
      console.log(error)
      setError('Opps! Something went wrong! Please try again in a couple minutes.')
    })
  }

  function updateSubs(detailedSub) {
    console.log(detailedSub.attributes.status);
    console.log(detailedSub.id)
    const updatedSubs = subs.map(sub => 
      Number(sub.id) === detailedSub.id 
      ? { 
        ...sub, 
          attributes: {
            ...sub.attributes,
              status: detailedSub.attributes.status
          } 
        }
        : sub
    )
    console.log(subs)
    setSubs(updatedSubs)
  }

  function sortSubs(subData, sort='high') {
    const activeSubs = subData.filter(sub => sub.attributes.status === 'active')
    const canceledSubs = subData.filter(sub => sub.attributes.status === 'canceled')
    let sortedSubs
    if (sort === 'high'){
      sortedSubs = activeSubs.sort((a, b) => b.attributes.price - a.attributes.price);
    } else {
      sortedSubs = activeSubs.sort((a, b) => a.attributes.price - b.attributes.price);
    }
    const mergedSubs = [...sortedSubs, ...canceledSubs]
    setSubs(mergedSubs)
  }

  const switchSorting = (e) => {
    const sortValue = e.target.value;
    sortSubs(subs, sortValue);
  }
  return (
<main className='App'>
<Routes>
        <Route path='/' element={<>
              <header>
              <img src={tea} alt="Home" onClick={()=>{navigate('/')}}/>
              <h1>Tea Time</h1>
              <img src={tea} alt="Home" onClick={()=>{navigate('/')}}/>
              </header>
              <SubscriptionPage subs={subs} getDetails={getDetails} switchSorting={switchSorting} updateSubscription={updateSubscription}/>
            </>
          }/>
        <Route path='/subscription/:id' element={<>
          <header>
            <img src={tea} alt="Home" onClick={()=>{navigate('/')}}/>
            <h1>Tea Time Details</h1>
            <img src={tea} alt="Home" onClick={()=>{navigate('/')}}/>
          </header>
            <SubscriptionDetails />
          </>
        }/>
        <Route path='*' element={<>
            <h1>Something went wrong</h1>
            <img src={tea} alt="Home" onClick={()=>{navigate('/')}}/>
            {error && <h2>{error}</h2>}
          </>
        }/>
      </Routes>
    </main>
  );
}

