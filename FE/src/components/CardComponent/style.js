import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img{
        height: 200px;
        width: 200px;
    }
    position: relative;
`

export const WrapperImageStyle = styled.img`
    position: absolute;
    top: -1px;
    left: -1px;
    width: 68px !important;
    height: 16px !important; 
    border-top-left-radius: 3px;
`

export const StyleNameProduct = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(56, 56, 61);
`

export const WrapperReport = styled.div`
    color: rgb(128, 128, 137);
    font-size: 10px;
    display: flex;
    align-items: center;
    margin: 5px 0;
`

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-weight: 500;
    font-size: 16px;
`

export const WrapperDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-weight: 500;
    font-size: 12px;
    margin-left: 4px;
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120,120,120);
`
