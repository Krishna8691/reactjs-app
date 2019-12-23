import React from 'react';
import './time.css';

function Time(props) {
    return <div><h2>Current Time : {props.date}</h2> <br /></div>;
}

export default Time;