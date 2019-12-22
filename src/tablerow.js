import React from 'react';
import Makerow from './makerow';

class Tablerow extends React.Component {
    // render() {
    //     return this.props.tabledata.map((value, index) => {
    //         return <tr key={index}>
    //             <td>{index}</td>
    //             <td>{value}</td>
    //             <td><button onClick={this.props.onDeleteClick.bind(this, index)}>Delete</button></td>
    //         </tr>
    //     });
    // }
    render() {
        return this.props.tabledata.map((value, index)=>{
            return <Makerow item={value} id={index} onDeleteClick={this.props.onDeleteClick} key={index} />
        });
    }
}

export default Tablerow;