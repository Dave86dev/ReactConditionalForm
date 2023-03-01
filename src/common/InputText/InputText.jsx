
import React from 'react';
import './InputText.css';

export const InputText = ({
    name,
    type,
    value,
    placeholder,
    // blurBehaviour,
    changeBehaviour
}) => {

    return (
        <div>
            <input
                className="inputDesign"
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                // onBlur={blurBehaviour}
                onChange={changeBehaviour}
            />
        </div>
    )

}