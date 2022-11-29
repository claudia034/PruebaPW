import React, { useState } from 'react';

import {Routes, Route} from "react-router-dom";

import NotFoundView from './views/NotFoundView/NotFoundView';

// IMPORTAMOS LOS COMPONENTES

import classes from './App.module.scss';

import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';

import PerfilContainer from './components/Body/PerfilContainer/PerfilContainer';

// VIEWS

import HomeView from './views/HomeView/HomeView';

import AuthView from './views/AuthView/AuthView';

import UserView from './views/UserView/UserView';

import AdminView from './views/AdminView/AdminView';

// USUARIO

import { useUserContext } from './contexts/UserContext';

import { useNavigate } from 'react-router-dom';

function App() {

  const { user } = useUserContext();
  const Navigate = useNavigate();

  return (
      <div className={classes["App"]} >
        { /* HEADER */}
        <Header/>

        { /* MAIN > Los hijos son reemplazables */}
        <main> 
          <Routes> 

            <Route index element={<HomeView/>} />

            <Route path='auth/*' element={<AuthView/>} />

            <Route path='user/*' element={ user && user.roles == "user" ? (<UserView/>) : (<Navigate to = "/"/> ) } />

            <Route path="/user/profile" element={<PerfilContainer/>}/>

            <Route path='admin/*' element={  user && user.roles == "admin" ? (<AdminView/>) : (<Navigate to = "/"/> ) } />

            <Route path="*" element={<NotFoundView/>} />
          </Routes>
        </main>

        { /* FOOTER */}
        <Footer />
      </div>
  )
}

export default App;
