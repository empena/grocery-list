import React from 'react';

const styles = {
  link: { 
    cursor: 'pointer',
    padding: '10px 20px 10px 20px',
    borderRadius: '5px',
    marginLeft: '10px',
    marginRight: '10px',
    backgroundColor: '#282c34',
    color: 'white',
  }
}

const filterLink = (current, name, setFilter) => { 
  if (current === name)
    return <span>{name}</span>
  else
    return <span style={styles.link} onClick={() => setFilter(name) }>{name}</span>
}

const Footer = ({ filter, setFilter }) => (
  <div class='menu'>
    { ['All', 'Active', 'Complete'].map( f => filterLink(filter, f, setFilter) ) }
  </div>
)

export default Footer;