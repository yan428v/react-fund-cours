import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <div className="App">
            <h1 style={{textAlign : "center"}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} nember={index + 1} post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;





























































