import SubscriptionCard from '../Subscription Card/subscriptionCard';
import './subscriptionPage.css';

function SubscriptionPage ({ subs, getDetails, switchSorting, updateSubscription }) {
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
                getDetails={getDetails}
                updateSubscription={updateSubscription}
            />
        )
    })
    
    return (
        <div className='subs-page'>
            <select name="sortSubs" id="sortSubs" onChange={switchSorting}>
                    <option value="high" >High-to-Low Price</option>
                    <option value="low" >Low-to-High Price</option>
                </select>
            {subscriptionCards}
        </div>
    )
}
export default SubscriptionPage 