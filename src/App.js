import './App.css';
// IMPORT COMPONENTS
import Header from './componets/Header';
import Footer from './componets/Footer';
import { Route,Routes } from 'react-router';
// IMPORT PAGES
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
    // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash

    const URL='https://mackenzie-fullstack-portfolio.herokuapp.com/' 
  
  return (
    <div className="App">

    
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects URL={URL} />} />
      <Route path="/about" element={<About URL={URL} />} />
    </Routes>
    <Footer/>
      
    </div>
  );
}

export default App;
