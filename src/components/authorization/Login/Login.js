import React, { useState } from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import { SendOutlined } from '@material-ui/icons';
import './Login.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const history = useHistory();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let config = {
        headers: {
            'Content-Type': 'application/json',
        },
        };
        let data = {
        email: loginData.email,
        password: loginData.password,
        };
        try {
            const response = await axios.post(
                'http://localhost:4000/api/auth/login',
                data,
                config
            );

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                history.push('/posts');
            }

        } catch (err) {
            console.log(err.response.data.errors);
        }
      };



    return (
        <Container component="main" maxWidth="xs">
            <div className="headContainer">
                <h1>LogIn friends!</h1>
                <form className="formLogin">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        type="password"
                        margin="normal"
                        required
                        fullWidth
                        id="loginPassword"
                        label="Password"
                        name="password"
                        autoComplete="password"
                        onChange={handleChange}
                    />
                    <Button
                    type="Submit"
                    margin="normal"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    endIcon={<SendOutlined/>}
                    onClick={handleSubmit}
                    >Log In </Button>
                    
                </form>
            </div>
        </Container>
    );
};


export default Login;

