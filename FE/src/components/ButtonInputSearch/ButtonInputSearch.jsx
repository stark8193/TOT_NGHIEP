import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const { size,
            placeholder,
            textButton, 
            bordered, 
            backgroundInput ='#fff', 
            backgroundButton ='rgb(13,92,182)',
            colorButton='#fff'} = props;
    return (
        <div style={{display: 'flex'}}>
            <InputComponent 
            size={size} 
            placeholder={placeholder} 
            bordered={bordered} 
            style={{ backgroundColor: backgroundInput, borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
            />
            <ButtonComponent
                size={size}
                styleButton={{backgroundColor: backgroundButton, border: !bordered && 'none' , borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}
                icon={<SearchOutlined color={colorButton} style={{color: '#fff'}}/>}
                textButton={textButton}
                styleTextButton={{color: colorButton}}
            /> 
            
        </div>
    );
};

export default ButtonInputSearch;