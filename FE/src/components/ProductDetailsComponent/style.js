import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    width: 64px!important;
    height: 64px!important;
`
export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    display: flex;
`
export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36,36,36);
    font-size: 24px;
    font-weight: 400;
    line-height: 12px;
    word-break: break-all;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120,120,120);
`

export const WrapperPriceProduct = styled.div`
    background: rgb(250,250,250);
    border-radius: 4px;
`
export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    font-weight: 600;
    margin-right: 8px;
    line-height: 40px;
    padding: 10px;
    margin-top: 10px;
`

export const WrapperAddressProduct = styled.div`
    span.address{
        font-size: 15px;
        font-weight: 500;
        line-height: 24px;
        white-space: nowrap;
        text-decoration: underline;
        text-overflow: ellipsis;
        overflow: hidden;
    };
    span.change-address{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: rgb(11, 116, 229);
    }
`
export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 120px;
    border: 1px #ccc solid;
    border-radius: 4px;
`


export const WrapperInputNumber = styled(InputNumber)`
    border-radius: 0px;
    border-top:none;
    border-bottom: none;
    &.ant-input-number.ant-input-number-sm{
        width: 60px;
    } 
`