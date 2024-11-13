import './subscriptionCard.css';

function SubscriptionCard ({ id, icon, title, price, frequency, status, getDetails, updateSubscription }) {
    const handleClick = (event, action) => {
        event.stopPropagation()
        let userConfirmed
        let statusUpdate
        if (action === 'cancel') {
            statusUpdate = 'canceled'
            userConfirmed = window.confirm("Are you sure you want to cancel the subscription? It will cancel it for all currently active customers");
        } else if (action === 'renew') {
            statusUpdate = 'active'
            userConfirmed = window.confirm("Are you wanting to renew this subscription?")
        }
        if (userConfirmed) {
            console.log("LOL, okay")
            updateSubscription(id, statusUpdate)
        }

    }
    
    return (
        <div 
            className={`subscription-card ${status === 'canceled' ? 'subscription-canceled' : ''}`}
            id = {id}
            onClick={event => getDetails(event, id)}
        >
                <img src={icon} alt="subscription icon" className="subscription-icon" />
                <div className='subscription'>
                    <h2>{title}</h2>
                    <h3>{price}</h3>
                    <h3>{frequency}</h3>
                    <h3 className={status}>{status}</h3>
                    <button onClick={(event) => handleClick(event, status === 'canceled' ? 'renew' : 'cancel')}>
                        {status === 'canceled' ? 'Renew Subscription' : 'Cancel Subscription'}
                    </button>
                </div>
        </div>
    )
}
export default SubscriptionCard 

