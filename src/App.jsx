import './App.css'
import HomeCard from './components/HomeCard'
import ProjectsCard from './components/ProjectsCard'

function App() {
  return (
    <>
      <div className="cards-container">
        <HomeCard/>
        <ProjectsCard/>
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
