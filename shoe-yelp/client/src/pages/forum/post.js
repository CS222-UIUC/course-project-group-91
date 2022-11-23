import React, { useState } from 'react';
import "./forum.css"
const Post = (props) => {
    return(
        <div className='forumBody'>
            <text> {props.name} {props.brand} </text>
        </div>
    );
}
export default Post;