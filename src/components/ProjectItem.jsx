import './ProjectItem.css';
import { allTechs } from "./Stack";

const extraTechs = [
    {
        name: 'OAuth2',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg',
    },
    {
        name: 'Whisper AI',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/6/66/OpenAI_logo_2025_%28symbol%29.svg',
    },
    {
        name: 'Transformers.js',
        icon: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg',
    },
    {
        name: 'C#',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    },
    {
        name: 'NumPy',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
    },
    {
        name: 'Matplotlib',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg',
    },
    {
        name: 'Unity',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
    },
    {
        name: 'Tauri',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg',
    }
];

const ProjectItem = ({ title, subtitle, desc, role, techStack, ghLink, demoLink }) => {
    return (
    <div className="project-item">
        <div className="project-header">
            <h2 className="project-title"><a href={ghLink}>{title}</a></h2>
            {subtitle && <h3 className="project-subtitle">{subtitle}</h3>}
        </div>
        {role && <div>
            <strong>Role:</strong> {role}
            </div>
            }

        <div className="project-description">
            {desc}
        </div>

        <div className="project-footer">
            {techStack && (
                <div className="project-stack">
                    {techStack.map((techItem, index) => {
                        const tech = [...allTechs, ...extraTechs].find(t => t.name.toLowerCase() === techItem.toLowerCase());
                        if (!tech) {
                            return <span className="tech-item" key={index}>{techItem}</span>;
                        }
                        return (
                            <div className={"tech-item"} key={index}>
                                <img src={tech.icon} title={tech.name} className="tech-icon" width="32" height="32" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        );
                    })}
                </div>
            )}
            <div className="project-links">
                <a href={ghLink} className="gh-link" target="_blank" rel="noopener noreferrer">
                    <svg fill="#000000" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
                </a>
                {demoLink && <a href={demoLink} className="demo-link" target="_blank" rel="noopener noreferrer">
                    <i class='bx  bx-rocket'/> 
                    Live Demo
                </a>}
            </div>
        </div>
    </div>
    )
}

export default ProjectItem;