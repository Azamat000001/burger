
import './App.css';
import HamburgerCOntainer from './HamburgerCOntainer';
import PriceContainer from './PriceContainer'
import { Routes, Route } from 'react-router-dom';

import OrederContainer from './OrederContainer';

function App() {  

  
 
      
  
  return (
    <div className="App"> 
       
       <Routes>
         <Route path='/' element={ <HamburgerCOntainer/> }/>
         <Route path='/success/*' element={<PriceContainer/>}/>
         <Route path='/order/' element={<OrederContainer/>}/>
       </Routes>
       
    </div>
  );
}

export default App; 
