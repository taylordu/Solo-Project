import React, { Component } from 'react';
import Item from './ListItem.jsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [<Item />, <Item />, <Item />, <Item />];
    return (
      <div>
        <div className="listHeader">
          <h3>Things To Do:</h3>
        </div>
        <div className="listButtons">
          <Button variant="outlined">Add Item</Button>
          <Button variant="outlined">Delete Item</Button>
        </div>
        <div className="listItems">
          <List>{items}</List>
        </div>
      </div>
    );
  }
}

export default ToDoList;
