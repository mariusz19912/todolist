import React, { Component } from "react";
class ViewList extends Component {
  handleClick = (e) => { // get event
    
    this.props.RemoveItem(e);
        
    }
  render() {
    
    return (
      <div className="item-list">
        <ul>
          {this.props.itemList.map((x, index) => {
      return <div className="container-item"><input type="checkbox"></input><li key={x} value={index} onClick={() => this.handleClick(index)}>{index + 1}. {x}</li></div>
    })}
        </ul>
      </div>
    );
  }
}


export default ViewList;

