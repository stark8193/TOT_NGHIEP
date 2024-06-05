import React from 'react';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReport, WrapperStyleTextSell } from './style';
import { StarOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.png'

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            style={{ width: 200 }}
            bodyStyle={{padding: "10px"}}
            cover={<img alt="example" src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png" />}
        >
            <WrapperImageStyle src={logo}/>
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReport style={{marginLeft: "4px"}}>
                <span>5 </span> 
                <span><StarOutlined style={{font: "12px", color:"yellow",}}/></span> 
                <WrapperStyleTextSell>|Da ban 1000+</WrapperStyleTextSell>
            </WrapperReport>
            <WrapperPriceText>
                19.000.000d
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    );
};

export default CardComponent;