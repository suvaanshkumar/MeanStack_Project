import React, { useState } from "react";
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import { Bookmark, Favorite, MoreVert } from "@material-ui/icons";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import MapDialog from "./MapDialog";

const Post = (props) => {

  const [openMap, setOpenMap] = useState(false);

  const handleOpenMap = () => {
    setOpenMap(true);
  }

  const handleCloseMap = () => {
    setOpenMap(false);
  }

    return (
      <Box width="100%">
        <MapDialog open={openMap} close={handleCloseMap}/>
        <Box width="40%" marginTop="20px" marginX="auto">
          
            <Card>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVert />
                    </IconButton>
                  }
                  title={props.post.title}
                  subheader={
                    <Box className="post-subheader" onClick={handleOpenMap}>
                      {props.post.place}, {props.post.country}
                    </Box>
                  }
                />
                {(props.post.image != null) &&
                  <Box width="100%">
                    <img src={props.post.image.url} alt="content" className="responsive-image"/>
                  </Box>
                }
                
                <CardContent>
                    <Typography>
                        {props.post.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="like" 
                    onClick={() => {
                        store.addNotification({
                          title: 'Liked !',
                          message: 'Someone Like your post',
                          type: 'default',                         // 'default', 'success', 'info', 'warning'
                          container: 'bottom-left',                // where to position the notifications
                          animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                          animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                          dismiss: {
                            duration: 3000
                          }
                        })
                      }}>
                        <Favorite/>
                    </IconButton>
                    <IconButton aria-label="add to favorites"
                    onClick={() => {
                        store.addNotification({
                          title: 'Favourite !',
                          message: 'Someone Favourited your post',
                          type: 'success',                         // 'default', 'success', 'info', 'warning'
                          container: 'bottom-left',                // where to position the notifications
                          animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                          animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                          dismiss: {
                            duration: 3000
                          }
                        })
                      }}>
                        <Bookmark/>
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
        </Box>
        
     
    );
  };
export default Post;