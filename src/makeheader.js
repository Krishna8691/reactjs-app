import React from 'react';

function Makeheader(props) {
    return props.tableheaders.map((value, index) => {
        return <th key={index}>{value}</th>
    });
}

export default Makeheader;