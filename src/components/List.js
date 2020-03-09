import React from 'react';
import ListItems from "./ListItems"

//List
const List = ({ items, name, itemClick }) => (
  <div>
    <h2>{name}</h2>
    <ul> 
      { items.map( item => < ListItems key={item.id} {...item} itemClick={itemClick} /> )}
    </ul>
  </div>
 )

 export default List;