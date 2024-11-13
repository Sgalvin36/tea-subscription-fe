import './customerCard.css';

function CustomerCard({ id, firstName, lastName, address, cityState, zipCode, email, status}) {
    return (
        <div className={`customer ${status}`}>
            <h2>{firstName} {lastName}</h2>
            <h3>{email}</h3>
            <h3>{address}</h3>
            <h3>{cityState} {zipCode}</h3>
        </div>
    )
}
export default CustomerCard
