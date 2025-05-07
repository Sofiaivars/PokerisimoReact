import react from 'react';
import './LogoPoker.css';
import logo from '../../assets/logo.png'; 


const LogoPoker = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
        </div>
    );
}

export default LogoPoker;