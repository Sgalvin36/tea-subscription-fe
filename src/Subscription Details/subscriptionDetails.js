import { useLocation } from 'react-router-dom'
import CustomerCard from '../Customer Card/customerCard'
import './subscriptionDetails.css';

function SubscriptionDetails () {
    const location = useLocation();
    const { subDetails } = location.state || {};
    
    const renderCustomerCards = (customers, status) => {
        return customers.map(customer => (
            <CustomerCard
                id={customer.id}
                key={customer.id}
                firstName={customer.first_name}
                lastName={customer.last_name}
                address={customer.address}
                cityState={`${customer.city}, ${customer.state}`}
                zipCode={customer.zip_code}
                email={customer.email}
                status={status}
            />
        ));
    };

    return (
        <section>
            <h2>{subDetails.attributes.title}</h2>
            <h3>{subDetails.attributes.price}</h3>
            <h4>{subDetails.attributes.frequency}</h4>
            <h4>{subDetails.attributes.status}</h4>
            <section className='customers'>
                {subDetails.attributes.active_customers && renderCustomerCards(subDetails.attributes.active_customers, 'active')}
                {subDetails.attributes.inactive_customers && renderCustomerCards(subDetails.attributes.inactive_customers, 'inactive')}
            </section>
        </section>
    )
}
export default SubscriptionDetails 