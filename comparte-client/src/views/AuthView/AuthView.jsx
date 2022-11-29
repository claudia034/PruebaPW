import { Routes, Route, Navigate } from 'react-router-dom';

import classes from './AuthView.module.scss';

import LoginForm from '../../components/Body/LogInContainer/LogInContainer';

import SignUpForm from '../../components/Body/CrearPerfilContainer/CrearPerfilContainer';

import { useUserContext } from '../../contexts/UserContext';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AuthView = () => {

  const navigate = useNavigate();
  const { login, user } = useUserContext();

  const onLoginHandler = async (identifier, password) => {
    //Ejecutar el servicio de login <- User context
    console.log(identifier);
    await login(identifier, password);
  }

  useEffect(() => {
    if (user) {
      if (user.roles == 'admin') {
        navigate('/admin/cards');
      } else if (user.roles == 'user') {
        navigate("/");
      }
    }
  }, [user])  

  return (
    <div className={classes["container"]}>
      <Routes>
        <Route path='signin' element={<LoginForm onLogin={onLoginHandler} />} />
        <Route path='signup' element={<SignUpForm />} />

        <Route path='*' element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  )
}

export default AuthView;