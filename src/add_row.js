import React from 'react';
import './add_row.css';

function Addrowbutton(props) {
    return <button className="add-row-btn" onClick={props.onclick}>Add New Row</button>;
}

export default Addrowbutton;