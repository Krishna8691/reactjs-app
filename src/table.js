import React from 'react';
import Tableheader from './tableheader';
import Tablerow from './tablerow';

function Table(props) {
    return <table>
        <tbody>
            <Tableheader tableheaders={props.tableheaders} />
            <Tablerow tabledata={props.tabledata} onDeleteClick={props.onDeleteClick} />
        </tbody>
    </table>
}

export default Table;