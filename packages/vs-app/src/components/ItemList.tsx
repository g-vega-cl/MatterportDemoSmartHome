import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { ItemDesc } from '../types';

interface Props {
  items: ItemDesc[];
  onSelected?: (item: ItemDesc) => void;
}

export class ItemList extends Component<Props,{}> {
  constructor (props: Props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
  }

  onClick(event: React.MouseEvent) {
    console.log("CLICKED ITEM LIST 1");
    if (this.props.onSelected) {
      console.log("this props onselected");
      for (const item of this.props.items) {
        console.log("item on props.item ", item);
        console.log("event.currentTarget.textContext: ", event.currentTarget.textContent)
        if (item.name === event.currentTarget.textContent) {
          this.props.onSelected(item);
          console.log("item.name === event.currentTarget.textContent ", item.name, item);
        }
      }
    }
  }

  render() {
    if (this.props.items.length === 0) {
      return null;
    }

    return (
      <div className='list-wrapper'>
        <List className='list'>
          {this.props.items.map((item: ItemDesc, index: number) => {
            return (
              <ListItem className= 'list-item' button key={index} onClick={this.onClick}>
                <ListItemText primary={item.name} onClick={this.onClick}/>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}