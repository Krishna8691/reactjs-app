import React from 'react';

class Makeheader extends React.Component {
    render() {
        return this.props.tableheaders.map((value, index) => {
            return <th key={index}>{value}</th>
        });
    }
}

export default Makeheader;