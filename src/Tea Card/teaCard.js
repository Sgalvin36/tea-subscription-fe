import './teaCard.css';

function teaCard ({ key, id, title, brewTime, description, temperature}) {
    const convertTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingSeconds = timeInSeconds % 60;

    return `${minutes} min ${remainingSeconds} sec`;
    }

    return (
        <div className={`tea-#${id}`}>
            <h2>{title}</h2>
            <h3>Description: {description}</h3>
            <h3>Temperature: {temperature} </h3>
            <h3>Brewing Time: {convertTime(brewTime)}</h3>
        </div>
    )
}
export default teaCard 
