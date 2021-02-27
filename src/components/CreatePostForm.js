import { Box, Button, Card, CardContent, CardHeader, FormGroup, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useContext } from 'react';
import PostsContext from '../contexts/PostsContext';

const CreatePostForm = (props) => {

    const [post, setPost] = useState({

    });

    const handleChange = (e) => {
        setPost( {...post, [e.target.name] : e.target.value} );
        console.log(post);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPost(post);
        setPost({
            title:'',
            content:''
        });
    }

    return (
        <Box width="60%" marginX="auto" marginTop="40px">
        <Card>
            <CardContent>
                <form>
                    <h2>Create New Post</h2>
                    <hr/>
                    <Box display="flex" flexDirection="row" alignItems="center"
                     width="80%" marginTop="20px">
                        <Typography variant="h6">Post Title:</Typography>
                        <Box marginLeft="10px">
                            <TextField required variant="outlined" label="Title" size="small"
                                name="title" onChange={handleChange} value={post.title}/>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" alignItems="flex-start" marginTop="30px">
                        <Typography variant="h6">Post Content:</Typography>
                        <Box display="block" marginTop="10px" width="100%">
                            <TextField variant="outlined" label="Content" multiline rows={4} fullWidth
                                name="content" onChange={handleChange} value={post.content}/>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="center" marginTop="40px">
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
                    </Box>

                </form>
                

            </CardContent>
        </Card>
        </Box>
    );

}

export default CreatePostForm;