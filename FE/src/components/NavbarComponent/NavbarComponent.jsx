import React from 'react';
import { WrapperContent, WrapperLabelStyle, WrapperPrice, WrapperTextValue } from './style';
import { Checkbox, Rate, } from 'antd';

const NavbarComponent = () => {
    const onChange = ()=>{}
    const renderContent= (type, options) =>{
        switch (type) {
            case 'text':
                return (options.map((option)=>{
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>  
                    )
                }))
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection:'column', gap: '12px'}} onChange={onChange}>
                        {options.map((option)=>{
                            return <Checkbox value={option.value}>{option.label}</Checkbox>
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                    return options.map((option)=>{
                        return (
                        <div style={{display:'flex'}}>
                            <Rate style={{fontSize: '12px'}} disabled defaultValue={option}/>
                            <span>{`từ ${option} sao`}</span>
                        </div>
                        )
                    })
            case 'price':
                return options.map((option)=>{
                    return (
                    <WrapperPrice>
                        <span>{`từ ${option}`}</span>
                    </WrapperPrice>
                    )
                })
                     
            default:
                return {}
        }
    }

    return (
        <div>
            <WrapperLabelStyle>LAbel</WrapperLabelStyle>
            <div>
             <WrapperContent>{renderContent('text', ['Tivi', 'Tu lanh', 'Laptop'])}</WrapperContent>
             {/* <WrapperContent>
                {renderContent('checkbox',[
                    {value: 'a', label: 'A',},
                    {value: 'b', label: 'B',}
                ])}
             </WrapperContent>
             <WrapperContent>
                {renderContent('star',[3,4,5])}
             </WrapperContent>
             <WrapperContent>
                {renderContent('price',['1000'])}
             </WrapperContent> */}
            </div>
        </div>
    );
};

export default NavbarComponent;