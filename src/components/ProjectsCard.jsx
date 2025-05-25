import './ProjectsCard.css';
import Card from './Card';

const ProjectsCard = () => {
    return (
        <Card id='projects'>
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project-item">
                    <h3>project 1</h3>
                    <p>description</p>
                </div>
            </div>
        </Card>
    )
}

export default ProjectsCard;