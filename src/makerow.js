import React from 'react';
import './makerow.css';


class Makerow extends React.Component {
    
    handleDelete = function(i) {
        this.props.onDeleteClick(i);
    }

    render() {
        return <tr key={this.props.id}>
            <td>{this.props.id+1}</td>
            <td>{this.props.item}</td>
            {/* <td><button id={this.props.id} onClick={this.props.onDeleteClick.bind(this, this.props.id)}>Delete</button></td> */}
            <td><button className="rowbtn" id={this.props.id} onClick={this.handleDelete.bind(this, this.props.id)}>Delete</button></td>
        </tr>
    }
}

export default Makerow;