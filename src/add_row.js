import React from 'react';
import './add_row.css';


class Addrowbutton extends React.Component {

    render() {
        return <button className="add-row-btn" onClick={this.props.onclick}>Add Row</button>;
    }

}

export default Addrowbutton;