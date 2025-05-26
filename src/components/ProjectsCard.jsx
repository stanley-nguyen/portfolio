import './ProjectsCard.css';
import Card from './Card';
import ProjectItem from './ProjectItem';

const ProjectsCard = () => {
    return (
        <Card id='projects'>
            <h2>Projects</h2>
            <div className="project-list">
                <ProjectItem
                    title="Rent a Lackey"
                    subtitle="Job Marketplace Platform"
                    role="Backend Developer (Team Project)"
                    desc="Developed the backend for a marketplace platform that allows users to post and accept job listings. Implemented secure authentication with OAuth2, dynamic job listing APIs, and used MySQL to store user data, job posts, and transaction records."
                    techStack={['Python', 'FastAPI', 'MySQL', 'OAuth2']}
                    ghLink="https://github.com/chennitoa/watermelon-table"
                />

                <ProjectItem
                    title="YT2Sub"
                    subtitle="YouTube Transcription Tool"
                    desc="A full-stack web app that lets users upload YouTube videos or audio files and automatically transcribes their speech to text using Whisper AI. It allows selection of different transcription models for speed or accuracy."
                    techStack={['Vue.js', 'Node.js', 'Whisper AI', 'Transformers.js']}
                    ghLink="https://github.com/stanley-nguyen/yt2sub"
                    demoLink="https://yt2sub.onrender.com/"
                />
            </div>
        </Card>
    )
}

export default ProjectsCard;