import React from 'react';
import './App.css';
import Time from './Time';
import Addrowbutton from './add_row';
import Table from './table';
import Learn from './learn';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      tabledata: [],
      tableheaders: ["No.", "Time", "Action"],
      y: 0
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
    var updatedData = this.state.tabledata.filter((value, i)=>{
      if(index !== i) { return true; }
      else { return false; }
    });
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

  addRowButtonClick = this.handleClick.bind(this);
  deleteButtonClick = this.handleDeleteClick.bind(this);


  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    const { tabledata, tableheaders } = this.state;
    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this)}>
        <h1><u>Assignment 4</u></h1>
        <Time date={this.state.date} />
        <Addrowbutton onclick={this.addRowButtonClick} /> <br />
        <Table tabledata={tabledata} tableheaders={tableheaders}
          onDeleteClick={this.deleteButtonClick} />
        <Learn x={this.state.x} y={this.state.y} mousemove={this._onMouseMove.bind(this)} />
      </div>
    );
  }
}

export default App;
