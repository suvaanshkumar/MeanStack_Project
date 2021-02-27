import React from "react";

import { useState } from "react";
import CreatePostForm from "./CreatePostForm";
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

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