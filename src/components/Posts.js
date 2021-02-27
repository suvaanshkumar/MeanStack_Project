import React from "react";
import { Box, Button } from '@material-ui/core';
import { useEffect } from "react";

import { useState } from "react";
import CreatePostForm from "./CreatePostForm";
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        console.log(posts);
    });

    const handleCreatePost = (newPost) => {
        setPosts([
            ...posts,
            newPost
        ]);
    };

    return (

        <div>
            {posts.map((p) => (
                <Post post={p}/> 
            ))}
            <CreatePostForm createPost={handleCreatePost}/>
        </div>
     
    );
  };
export default Posts;