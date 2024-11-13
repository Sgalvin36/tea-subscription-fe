import SubscriptionCard from '../Subscription Card/subscriptionCard';
import './subscriptionPage.css';

function SubscriptionPage ({ subs }) {
    const subscriptionCards = subs.map(sub => {
        return (
            <SubscriptionCard
                icon={sub.icon}
                id={sub.id}
                key={sub.id}
                title={sub.attributes.title}
                price={sub.attributes.price}
                frequency={sub.attributes.frequency}
                status={sub.attributes.status}
            />
        )
    })
    
    return (
        <div className='subs-page'>
            {subscriptionCards}
        </div>
    )
}
export default SubscriptionPage 