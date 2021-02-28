import React from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import { SendOutlined } from '@material-ui/icons';
import './Login.css';

const Login = () => {
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
                        id="loginUsername"
                        label="Username or Email"
                        name="loginUsername"
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="loginPassword"
                        label="Password"
                        name="loginPassword"
                        autoComplete="password"
                    />
                    <Button
                    type="Submit"
                    margin="normal"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    endIcon={<SendOutlined/>}
                    // onClick={(props)=>{
                    //     if(props.loginUsername == "Igor"){
                    //        this.props.history.push('/home/');
                    //     }
                    // }}
                    >Log In </Button>
                    
                </form>
            </div>
        </Container>
    );
};


export default Login;

