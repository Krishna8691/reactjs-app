import React from 'react';
import Makeheader from './makeheader';

class Tableheader extends React.Component {
    // render() {
    //     console.log(this.props.tableheaders);
    //     return this.props.tableheaders.map((value, index) => {
    //         return <th>{value}</th>
    //     });
    // }
    render() {
        return <tr key="0">
            <Makeheader tableheaders={this.props.tableheaders} />
        </tr>
    }
}

export default Tableheader;