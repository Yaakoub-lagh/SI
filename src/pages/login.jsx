import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../stylesheet/img/logo.png'

const Login = () => {
    return (
        
        <div className='login'>
            
            <form>
                <div className="form__content">
                <div className="image">
                    <img src={Logo} alt="" />
                </div>
                <div className="form">
                    <TextField
                id="outlined-disabled"
                className='input'
                label="Login"
                
                />
                <TextField
                id="outlined-password-input"
                className='input'
                label="Mot de passe"
                type="password"
                autoComplete="current-password"
                />
            </div>
            <Link to={"/client"}>
            <div className="submit button">Login</div>
            </Link>
                </div>
            </form>

        </div>
    );
}

export default Login;
