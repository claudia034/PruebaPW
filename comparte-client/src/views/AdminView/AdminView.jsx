import { Routes, Route, Navigate } from 'react-router-dom';

import classes from './AdminView.module.scss';

// ADMIN VIEWS

import UserContainer from "../../components/Body/UserContainer/UserContainer";

import PointsContainer from "../../components/Body/PointsContainer/PointsContainer";

import DatesContainer from "../../components/Body/DatesContainer/DatesContainer";

import CardContainer from '../../components/Body/CardContainer/CardContainer';

import MenuContainer from '../../components/Header/Navbar/NavbarMenu/NavbarMenu';

// USE NAVIGATE

import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

const adminView = () => {

    const navigate = useNavigate();

    return (
        <div className={classes["container"]}>
            <Routes>
                { /* Rutas de ADMIN */}
                <Route path='cards' element={<CardContainer />} />
                <Route path='users' element={<UserContainer />} />
                <Route path='points' element={<PointsContainer />} />
                <Route path='dates' element={<DatesContainer />} />
                <Route path='menu' element={<MenuContainer />} />

                <Route path='*' element={<Navigate to="/not-found" />} />
            </Routes>
        </div>
    )
}

export default adminView;