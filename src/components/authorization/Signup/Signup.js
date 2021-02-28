import { Container, TextField, Button } from '@material-ui/core';
import { HowToReg } from '@material-ui/icons';
import React from 'react';

const Signup = () => {
    return (
        <Container component="main" maxWidth="xs">
            <div className="headContainer">
                <h1>SignUp friends!</h1>
                <form className="formLogin">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="signUpUsername"
                        label="Username or Email"
                        name="signUpUsername"
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="signUpPassword"
                        label="Password"
                        name="signUpPassword"
                        autoComplete="password"
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="signUpConfirmPassword"
                        label="Confirm password"
                        name="signUpConfirmPassword"
                        autoComplete="confirm-password"
                    />
                    <Button
                        type="Submit"
                        margin="normal"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        endIcon={<HowToReg />}
                    // onClick={(props)=>{
                    //     if(props.loginUsername == "Igor"){
                    //        this.props.history.push('/home/');
                    //     }
                    // }}
                    >Sign Up </Button>

                </form>
            </div>
        </Container>
    );
};

export default Signup;

