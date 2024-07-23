// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">

<Router>
      <div>
          <Navbar /> 
     <Alert alert = "This is alert"/> 
        
        <Routes>
          <Route path="/" element={<TextForm/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>


     
    
    
  
     
        {/* <Route path = "/about" element ={<About/>}/> */}
        

        {/* <Route path = "/" element={<TextForm/>}/> */}

     

</div>

  );
}

export default App;
