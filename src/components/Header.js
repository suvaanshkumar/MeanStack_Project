import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {

    return (
        <div>
            <AppBar position="static" className="header">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className="header">
                        Blog
                    </Typography>

                    <span className="spacer"/>

                    <Button color="inherit" href="/posts">Posts</Button>
                    <Button color="inherit">Categories</Button>
                    <Button color="inherit">Contact Us</Button>

                    <span className="spacer"/>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button>
                </Toolbar>
            </AppBar>
        </div>
    );

};

export default Header;