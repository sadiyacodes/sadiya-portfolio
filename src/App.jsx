
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'
import { IconCloudDemo } from './components/IconCloud'

function App() {
 

  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <IconCloudDemo/>
      <Projects/>      
      <Footer/>
    </>
  )
}

export default App
