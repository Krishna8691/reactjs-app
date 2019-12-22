import React from 'react';
// import Table from './table';
// import Addrowbutton from './add_row';
import './time.css';


class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabledata: [],
            headers: ["No.", "Time", "Action"]
        }
    }

    // handleClick = function () {
    //     const tabledata = this.state.tabledata.slice();
    //     tabledata.push(this.props.date);
    //     this.setState({
    //         tabledata: tabledata,
    //     });
    // }

    render() {
        return <div><h2>Current Time is : {this.props.date}</h2> <br />
            {/* <Addrowbutton onclick={this.handleClick.bind(this)} />  <br /><br /> */}

            {/* <table id="tabdata">
                <tbody>
                    <Table data={this.state.tabledata} />
                </tbody>
            </table> */}

            {/* <Table data={this.state.tabledata} headers={this.state.headers} /> */}

        </div>

    }
}

export default Time;