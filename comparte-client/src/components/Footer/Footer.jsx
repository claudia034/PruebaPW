
// IMPORTAMOS LA LIBRERIA 

import React from "react";

// IMPORTAR EL MODULO CSS

import classes from './Footer.module.scss';

// IMPORTAMOS EL BOTON 

import Logo from '../../assets/images/LogoComparteINC.png';

// CREAMOS EL COMPONENTE 

const Footer = () => {
    return (
        <footer className={classes["footer"]}>

                <div className={classes["footer-info"]}>

                    <div className={classes["footer-logo"]}>
                        <figure>
                            <img src = {Logo} alt = "ComparteINC Logo"></img>
                        </figure>

                        <h1> ComparteINC </h1>
                    </div>

                    <div className={classes["footer-desc"]}>
                        <p>
                            Comparte fue creado con la finalidad de motivar a la población a donar sangre con el fin de ayudar a quien lo necesite. 
                        </p>
                    </div>

                </div> 

                <div className={classes["footer-contacts"]}>
                    <h1> Contactos </h1>
                    <p> +503 1234-5678 </p>
                    <p> +503 8765-4321 </p>
                    <p> comparte@gmail.com </p>
                </div>

                <div className={classes["footer-rights"]}>
                    <p> © ComparteINC 2022. All rights reserved </p>
                </div>
        </footer>
    );
};

// EXPORTAMOS EL COMPONENTE

export default Footer;
