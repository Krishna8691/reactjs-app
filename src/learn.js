import React from 'react';
import './learn.css';

export default class Learn extends React.Component {

        state = {
            isScrollingDown: false,
            previousX: 0,
            previousY: 0,
        }

    static getDerivedStateFromProps(nextprops, state) {
        if(nextprops.y !== state.previousY) {
            return {
                isScrollingDown: true,
                previousX: nextprops.x,
                previousY: nextprops.y,
            }
        }
        else {
            return {
                isScrollingDown: false,
                previousX: nextprops.x,
                previousY: state.previousY,
            }
        }
    }

    render() {
        return <div className="learnclass" onMouseMove={this.props.mousemove}>
            X : {this.state.previousX} Y : {this.state.previousY} <br />
            {this.state.isScrollingDown && <h1>Y is changing</h1>}
        </div>
    }
}