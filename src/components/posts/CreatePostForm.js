import { Box, Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import CustomMap from './CustomMap';


const CreatePostForm = (props) => {

    const [post, setPost] = useState({
        title: '',
        place: '',
        country: '',
        image: null,
        description: ''
    });
    const fileInputRef = useRef();
    const mapRef = useRef();
    const [focus, setFocus] = useState(false); 

    const handleChange = (e) => {
        setPost( {...post, [e.target.name] : e.target.value} );
    };

    const handleChangeLocation = (latitude, longitude) => {
        setPost({...post, lat: latitude, lng: longitude});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(post);
        const location = (mapRef.current.state.markerPosition);
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-auth-token': localStorage.getItem('token')
            },
        };

        let formData = new FormData();
        formData.append('title', 'kek');
        formData.append('place', post.place);
        formData.append('country', post.country);
        formData.append('image', post.image);
        formData.append('description', post.description);
        formData.append('lat', location.lat());
        formData.append('lng', location.lng());

        try {
            const response = await axios.post(
                'http://localhost:4000/api/posts',
                formData,
                config
            );

            console.log(response);

        } catch (err) {
            console.log(err.response.data);
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDragEnter = (e) => {
        e.preventDefault();
        setFocus(true);
    }

    const handleDragLeave = (e) => {
        e.preventDefault();
        setFocus(false);
    }

    const handleFileDrop = (e) => {
        e.preventDefault();
        setPost({...post, image: e.dataTransfer.files[0]});
    }

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const fileSelected = () => {
        setPost({...post, image: fileInputRef.current.files[0]});
    }

    return (
        <Box width="60%" marginX="auto" marginTop="40px">
        <Card>
            <CardContent>
                {/* <form onSubmit={handleSubmit} encType="multipart"> */}
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

                    <Box display="flex" flexDirection="row" alignItems="center"
                     width="80%" marginTop="20px">
                        <Typography variant="h6">Place:</Typography>
                        <Box marginLeft="10px">
                            <TextField required variant="outlined" label="Place" size="small"
                                name="place" onChange={handleChange} value={post.place}/>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="row" alignItems="center"
                     width="80%" marginTop="20px">
                        <Typography variant="h6">Country:</Typography>
                        <Box marginLeft="10px">
                            <TextField required variant="outlined" label="Country" size="small"
                                name="country" onChange={handleChange} value={post.country}/>
                        </Box>
                    </Box>

                    <Box width="100%" marginTop="20px">
                        <Typography variant="h6">Location:</Typography>
                        <Box width="100%" height="200px">                          
                            <CustomMap 
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&language=EN&key=
                                ${process.env.REACT_APP_GOOGLE_KEY}`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `100%` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                ref={mapRef} setCoordinates={handleChangeLocation}
                            />
                        </Box>
                    </Box>

                    <Box marginTop="20px">
                        <Typography variant="h6">Picture:</Typography>
                    
                        <Box width="60%" height="100px" marginTop="10px" display="flex" justifyContent="center" alignItems="center"
                        className={(focus) || (post.image) ? 'dropzone-focused' : 'dropzone'} onClick={fileInputClicked}
                        onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleFileDrop}
                        onDragOver={handleDragOver}>
                            {(post.image) &&
                                <div>{post.image.name}</div>
                            }
                            {(!post.image) &&
                                <div>Drop Image here or click to Upload</div>
                            }
                        </Box>
                        <Box display="none">
                            <input ref={fileInputRef} type="file" onChange={fileSelected}/>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" alignItems="flex-start" marginTop="30px">
                        <Typography variant="h6">Description:</Typography>
                        <Box display="block" marginTop="10px" width="100%">
                            <TextField variant="outlined" label="Description" multiline rows={4} fullWidth
                                name="description" onChange={handleChange} value={post.description}/>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="center" marginTop="40px">
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
                    </Box>

                {/* </form> */}
                

            </CardContent>
        </Card>
        </Box>
    );

}

export default CreatePostForm;