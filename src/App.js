import React from 'react';
import './App.css';
import Time from './Time';
import Addrowbutton from './add_row';
import Table from './table';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      tabledata: [],
      tableheaders: ["No.", "Time", "Action"],
    };
  }

  handleClick = function () {
    const tabledata = this.state.tabledata.slice();
    tabledata.push(this.state.date);
    this.setState({
      tabledata: tabledata,
    });
  }

  handleDeleteClick = function (index) {
    var updatedData = [];
    for (var i = 0; i < this.state.tabledata.length; i++) {
      if (i === index) {
        continue;
      }
      else {
        updatedData.push(this.state.tabledata[i]);
      }
    }
    this.setState({
      tabledata: updatedData,
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>My App</h1>
        <Time date={this.state.date} />
        <Addrowbutton onclick={this.handleClick.bind(this)} /> <br />
        <Table tabledata={this.state.tabledata} tableheaders={this.state.tableheaders}
          onDeleteClick={this.handleDeleteClick.bind(this)} />
      </div>
    );
  }
}

export default App;
