import { Routes, Route, Navigate } from 'react-router-dom';

import classes from './UserView.module.scss';

// USER VIEW

import RequisitosContainer from '../../components/Body/RequisitosContainer/RequisitosContainer';

import FechaCitaContainer from '../../components/Body/FechaCitaContainer/FechaCitaContainer';

import PerfilContainer from '../../components/Body/PerfilContainer/PerfilContainer';

import EditarPerfilContainer from '../../components/Body/EditarPerfilContainer/EditarPerfilContainer';

import { useUserContext } from '../../contexts/UserContext';

// USE NAVIGATE

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const userView = () => {

  const navigate = useNavigate();

  const { user } = useUserContext();

  return (
    <div className={classes["container"]}>
        <Routes>
            { /* Rutas de usuario */}

            <Route path='requisitos' element={<RequisitosContainer />}/>
            <Route path='select-date' element={<FechaCitaContainer />}/>
            <Route path='profile' element={<PerfilContainer/>}/>
            <Route path='edit-profile' element={<EditarPerfilContainer/>}/>

          <Route path='*' element={<Navigate to="/not-found" />} />
        </Routes>
    </div>
  )
}

export default userView;