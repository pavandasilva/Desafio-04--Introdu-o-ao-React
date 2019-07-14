import React from 'react';
import logo from '../../../assets/images/facebook.png';
import Icon from '@material-ui/core/Icon';
import './style.css';

export default function() {
  return (
    <header>
      <nav>
        <img id="facebook" src={logo} alt="facebook" />
        <div id="perfil">
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}
