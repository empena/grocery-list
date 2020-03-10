import React from 'react';

//Todo
const ListItems = ({ id, name, complete, itemClick }) => (
  <li class="card"
    style={ complete ? { ...styles.item, ...styles.complete } : styles.item }
    onClick={ () => itemClick(id) }
  >
   { name }
  </li>
);

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default ListItems;