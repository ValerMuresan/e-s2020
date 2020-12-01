import React from 'react';
import { connect } from 'react-redux';
import { selectMenuContainerSections } from '../../redux/menu-container-redux/menu-container.selectors';
import { createStructuredSelector } from 'reselect';
import './menu-container.scss';
import '../menu-item/menu-item.jsx';
import MenuItem from '../menu-item/menu-item.jsx';

const MenuContainer = ({ sections }) => ( 
  <div className='menu-container'>
    {sections.map(({id, ...otherSectionProps }) => (
    <MenuItem key={id} {...otherSectionProps}/>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectMenuContainerSections,
})

export default connect(mapStateToProps)(MenuContainer);