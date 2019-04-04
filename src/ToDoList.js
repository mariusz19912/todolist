import React, { Component } from 'react';
import ViewList from './ViewList';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }
    addToDo = () => {
        let inputValue = this.InputValue.value;
        if (inputValue === ''){
            alert('The ToDo field can not be empty!')
         }else{
             this.setState({
                 list: this.state.list.concat([inputValue]),   
         });
         }
    }
    removeItem = (i) => {
        let newToDo = this.state.list.filter((element,index)=>{return index !== i});
        this.setState({
            list: newToDo 
    });
    }
   
    render() { 
        return ( 
            <div className="input-to-do">
            <input type="text" placeholder="Enter Task" ref={input => this.InputValue = input}/>
            <button className="add" onClick={this.addToDo}>Add Task</button>
            <ViewList 
            itemList = {this.state.list}
            RemoveItem = {this.removeItem}
            />
            </div>
           
         );
    }
}
 
export default ToDoList ;