import React from 'react';
import './add_row.css';


// class Addrowbutton extends React.Component {

//     render() {
//         return <button className="add-row-btn" onClick={this.props.onclick}>Add New Row</button>;
//     }

// }

function Addrowbutton(props) {
    return <button className="add-row-btn" onClick={props.onclick}>Add New Row</button>;
}

export default Addrowbutton;