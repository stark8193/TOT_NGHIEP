
import React, { useState } from 'react';
import { WrapperInput } from './style';

const InputForm = (props) => {
    // const [valueInput, setValueInput]= useState('');
    const {placeholder, ...rests} =props
    const handleOnchangeInput =(e)=>{
        props.onChange(e.target.value)
    }

    return (
        <WrapperInput placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput}/>
        
    );
};

export default InputForm; 