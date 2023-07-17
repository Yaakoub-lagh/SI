import React from 'react';
import './stylesheet/Main.css'
import Sidebar from './components/Sidebar';
import Client from './pages/Client';
import AddClient from './pages/AddClient';
import AddContact from './pages/AddContact';
import Contact from './pages/Contact';
import Lettre from './pages/Lettre';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './pages/login';
import AddLettre from './pages/AddLettre';
import Livreur from './pages/Livreur';
import Commercial from './pages/Commerciale';
const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/client' element={<Client />} />
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/letter' element={<Lettre />} />
            <Route path='/addLettre' element={<AddLettre />} />
            <Route path='/addClient' element={<AddClient />} />
            <Route path='/addContact' element={<AddContact />} />
            <Route path='/livreur' element={<Livreur/>} />
            <Route path='/Comercial' element={<Commercial/>}/>
           </Routes>
      </BrowserRouter>
  );
};

export default App;
