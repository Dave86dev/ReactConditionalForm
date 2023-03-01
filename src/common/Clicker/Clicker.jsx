
import React from 'react';
import './Clicker.css';


export const Clicker = ({ functionality, title, design }) => {

    return (
        <div
            onClick={()=>functionality()}
            className={`clickerDesign ${design}`}
        >
            {title}
        </div>
    )
}