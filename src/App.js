import React, {createContext} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Blue from './componet/Blue';
import Green from './componet/Green';
import Yellow from './componet/Yellow';

function App() {
  return (
    <div className="App">
      <AppContext.Provider> 
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/yellow' element={<Yellow /> } />
          <Route path='/blue' element={<Blue />} />
          <Route path='/green' element={<Green />} />
        </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
