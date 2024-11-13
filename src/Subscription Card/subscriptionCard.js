import './subscriptionCard.css';

function SubscriptionCard ({ id, key, title, price, frequency, status }) {
    return (
        <div className={`subscription#${id}`} key={key}>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <h3>{frequency}</h3>
            <h3>{status}</h3>
        </div>
    )
}
export default SubscriptionCard 

