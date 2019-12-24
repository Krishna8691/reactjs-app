import React from 'react';
import './makerow.css';

class Makerow extends React.Component {
    render() {
        return <tr key={this.props.id}>
            <td>{this.props.id+1}</td>
            <td>{this.props.item}</td>
            <td><button className="rowbtn" id={this.props.id}
            onClick={() => {
                this.props.onDeleteClick(this.props.id)
            }}>X</button></td>
        </tr>
    }
}

export default Makerow;