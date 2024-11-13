import { useLocation } from 'react-router-dom'
import CustomerCard from '../Customer Card/customerCard'
import TeaCard from '../Tea Card/teaCard'
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

    const renderTeaCards = (teas) => {
        return teas.map(tea => (
            <TeaCard
                key={tea.id}
                id={tea.id}
                title={tea.title}
                brewTime={tea.brew_time}
                description={tea.description}
                temperature={tea.temperature}
            />
        ))
    }

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
            <section className="teas">
                {subDetails.attributes.teas && renderTeaCards(subDetails.attributes.teas)}
            </section>
        </section>
    )
}
export default SubscriptionDetails 