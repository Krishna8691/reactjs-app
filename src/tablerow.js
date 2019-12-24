import React from 'react';
import Makerow from './makerow';

function Tablerow(props) {
    return props.tabledata.map((value, index)=>{
        return <Makerow item={value} id={index} onDeleteClick={props.onDeleteClick} key={index} />
    });
}

export default Tablerow;