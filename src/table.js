import React from 'react';
import Tableheader from './tableheader';
import Tablerow from './tablerow';

class Table extends React.Component {
    render() {
        const tableheaders = ["No.", "Time", "Action"];
        return <table>
            <tbody>
                    <Tableheader tableheaders={tableheaders} />
                    <Tablerow tabledata={this.props.tabledata} onDeleteClick={this.props.onDeleteClick} />
            </tbody>
        </table>
    }
}

export default Table;