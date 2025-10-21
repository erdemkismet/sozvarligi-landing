import BackgroundPattern from './components/BackgroundPattern'
import BackgroundEffects from './components/BackgroundEffects'
import MainHeading from './components/MainHeading'
import Divider from './components/Divider'
import './App.css'

function App() {
  return (
    <div className="landing-container">
      <BackgroundPattern />
      <BackgroundEffects />

      <main className="content-wrapper">
        <MainHeading className="animate-fade-in" />
        <Divider />
      </main>
    </div>
  )
}

export default App
