
import Header from './components/Header'
import './App.css';
import Banner from './components/Banner';
import ServicesExperiences from './components/ServicesExperiences';
import Projects from './components/projects';
import Footer from './components/Footres';

function App() {
  return (
      <div>
        <Header />
        <Banner />
        <ServicesExperiences />
        <Projects />
        <Footer />
      </div>
  )    
}

export default App;
