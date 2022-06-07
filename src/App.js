import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponents from './components/Navbar/NavbarComponents';
import IntroComponents from './components/Projects/IntroComponents';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <NavbarComponents/>
      
      {/* Intro Text */}
      <Container>
        <IntroComponents/>
      </Container>
      
      {/* Projects List */}
      <Container>

      </Container>
    </div>    
  );
}

export default App;
