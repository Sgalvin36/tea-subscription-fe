import './subscriptionCard.css';

function SubscriptionCard ({ id, icon, title, price, frequency, status, getDetails }) {
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
                </div>
        </div>
    )
}
export default SubscriptionCard 

