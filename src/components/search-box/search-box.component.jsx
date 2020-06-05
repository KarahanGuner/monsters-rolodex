import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (// parametreye {} koyunca gelen arugamnı direk destructure ediyo
    <input className='search' type='search' placeholder={placeholder} onChange={handleChange}/>
)