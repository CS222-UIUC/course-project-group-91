import React, { useState } from 'react';
const NewPost = (props) => {
    return(
        <div>
            <div className='forumBody'>
                <text> {props.name} {props.brand} </text>
            </div>
            <div className='forumBody'>
                <text> {props.name} {props.brand} </text>
            </div>
            <div className='forumBody'>
                <text> {props.name} {props.brand} </text>
            </div>
            <div className='forumBody'>
                <text> {props.name} {props.brand} </text>
            </div>
            <div className='forumBody'>
                <text> {props.name} {props.brand} </text>
            </div>
        </div>
        
    );
}
export default NewPost;