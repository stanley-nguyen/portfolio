import './App.css'
import ContactCard from './components/ContactCard'
import HomeCard from './components/HomeCard'
import ProjectsCard from './components/ProjectsCard'
import StickyNav from './components/StickyNav'
import WorkCard from './components/WorkCard'

function App() {
  return (
    <>
      <StickyNav/>
      <div className="cards-container">
        <HomeCard/>
        <ProjectsCard/>
        <WorkCard/>
        <ContactCard/>
      </div>
      <footer className="footer">
        <p>© 2025 Stanley Nguyen</p>
        <p>Built with <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a> and <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a></p>
        <p>Source code available on <a href="" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </footer>
    </>
  )
}

export default App
