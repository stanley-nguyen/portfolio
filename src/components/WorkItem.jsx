import './WorkItem.css';

const WorkItem = ({ role, company, duration, bullets }) => {

    return (
        <div className="work-item">
            <h3 className="work-role">{role}</h3>
            <p className="work-company">{company}</p>
            <p className="work-duration">{duration}</p>
            <ul className="work-bullets">
                {bullets.map((bullet, index) => (
                    <li key={index} className="work-bullet">{bullet}</li>
                ))}
            </ul>
        </div>
    );
}

export default WorkItem;