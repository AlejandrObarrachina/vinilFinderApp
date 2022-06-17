import React from "react";
import "./App.scss";



const Buscador = () => {
    
    return (
        <div className="buscador-wrapper">
            <div className="buscador">
                <label htmlFor="buscador">Busca por nombre</label>
                <input type="text" name="buscador" id="buscador" placeholder="Búsca tu vinilo favorito"/>

            </div>
            <div className="buscador">
                <label htmlFor="genero">Busca por género</label>
                <select id="genero">
                    <option value="cualquiera">Cualquiera</option>
                    <option value="rock">Rock&Roll</option>
                    <option value="american-pop">American Pop</option>
                    <option value="spanish-pop">Spanish Pop</option>
                </select>
            </div>
            <a href="#" className="buscar-btn">Buscar</a>
            
          
        </div>
    );
   
};

export default Buscador;
