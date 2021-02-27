import React from "react";
import { Box, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { Bookmark, Favorite, MoreVert } from "@material-ui/icons";

const Post = (props) => {

    return (
        <Box width="40%" marginTop="20px" marginX="auto">
            <Card>
                <CardHeader title={props.post.title}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert/>
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography>
                        {props.post.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="like">
                        <Favorite/>
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                        <Bookmark/>
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
        
     
    );
  };
export default Post;