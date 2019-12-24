import React from 'react';
import Makeheader from './makeheader';

function Tableheader(props) {
    return <tr key="0">
        <Makeheader tableheaders={props.tableheaders} />
    </tr>
}

export default Tableheader;