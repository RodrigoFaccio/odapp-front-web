import React, { useState } from 'react';
import './index.css';
import Table from './components/Table';
import Home from './pages/Home';
import Header from './components/Header';
import { PatientContextProvider } from './context/patientContext';
import SideMenuComponent from './components/SideMenu';

function App() {
  const [active,setActive] = useState(false)
  const handleActive = ()=>{
    setActive(!active)
  }

  return (
    <div style={{ display: 'flex',width:'100%', }}>
      <PatientContextProvider>
      <div style={{ display: 'flex', }}>



          <SideMenuComponent active={active} onActive={handleActive}/>
      </div>


        <div style={{ display: 'flex',width:'100%',flexDirection:'column' }}>
          <Header />
          <Home />
        </div>
      </PatientContextProvider>
    </div>
  );
}

export default App;
