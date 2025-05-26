import { useState } from 'react';
import './Stack.css';

export const allTechs = [
  // Languages
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', categories: ['Languages'] },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', categories: ['Languages'] },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', categories: ['Languages'] },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', categories: ['Languages'] },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', categories: ['Languages'] },

  // Frameworks/Libraries
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', categories: ['Frameworks/Libraries'] },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', categories: ['Frameworks/Libraries'] },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', categories: ['Frameworks/Libraries'] },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', categories: ['Frameworks/Libraries'] },

  // Databases
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', categories: ['Databases'] },

  // Tools/Platforms
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', categories: ['Tools/Platforms'] },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', categories: ['Tools/Platforms'] },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', categories: ['Tools/Platforms'] },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', categories: ['Tools/Platforms'] },
  { name: 'Google Colab', icon: 'https://raw.githubusercontent.com/devicons/devicon/45fecd6b63bb1dd0b1c2a48bb5e1e512156da6cb/icons/googlecolab/googlecolab-original.svg', categories: ['Tools/Platforms'] },
];

const Stack = () => {
    const [filter, setFilter] = useState('All');
    const [transitioning, setTransitioning] = useState('');

    const filteredTechs = filter === 'All' ? allTechs : allTechs.filter(tech => tech.categories.includes(filter));

    const handleFilterChange = (newFilter) => {
        if (newFilter !== filter) {
            setTransitioning(newFilter);

            setTimeout(() => {
                setFilter(newFilter);
                setTransitioning('');
            }, 200);
        }
    }

    return (
        <section className="stack">
            <div className="filter-buttons">
                <button className={`filter-button ${filter === 'All' || transitioning === 'All' ? 'inactive' : ''}`} onClick={() => handleFilterChange('All')}>All</button>
                <button className={`filter-button ${filter === 'Languages' || transitioning === 'Languages' ? 'inactive' : ''}`} onClick={() => handleFilterChange('Languages')}>Languages</button>
                <button className={`filter-button ${filter === 'Frameworks/Libraries' || transitioning === 'Frameworks/Libraries' ? 'inactive' : ''}`} onClick={() => handleFilterChange('Frameworks/Libraries')}>Frameworks/Libraries</button>
                <button className={`filter-button ${filter === 'Databases' || transitioning === 'Databases' ? 'inactive' : ''}`} onClick={() => handleFilterChange('Databases')}>Databases</button>
                <button className={`filter-button ${filter === 'Tools/Platforms' || transitioning === 'Tools/Platforms' ? 'inactive' : ''}`} onClick={() => handleFilterChange('Tools/Platforms')}>Tools/Platforms</button>
            </div>

            <div className="stack-grid">
                {filteredTechs.map((tech, index) => (
                    <div className={`stack-item ${transitioning ? 'transition' : ''}`} key={index}>
                        <img src={tech.icon} alt={tech.name} title={tech.name} className="stack-icon" />
                        <span className="stack-name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stack;