import Card from './Card';
import WorkItem from './WorkItem';
import './WorkCard.css';

const workData = [
    {
        role: "Embedded Systems Technician",
        company: "TTEK LLC",
        duration: "Aug 2020 - Present",
        bullets: [
            'Designed and implemented Python-based automation scripts for testing logic chips using Arduino microcontrollers, improving diagnostic throughput and consistency.',
            'Developed testing workflows that reduced manual verification time by 50% and improved hardware validation accuracy.',
            'Diagnosed and repaired PCB-related hardware issues, integrating hardware troubleshooting with automated signal validation tools.'
        ]
    }
]

const WorkCard = () => {
    return (
        <Card id='work'>
            <h2>Work Experience</h2>
            <div className="timeline">
                {workData.map((work, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-marker"/>
                        <div className="timeline-content">
                            <WorkItem
                                key={index}
                                role={work.role}
                                company={work.company}
                                duration={work.duration}
                                bullets={work.bullets}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}

export default WorkCard;