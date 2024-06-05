import { Col, Image, Row } from 'antd';
import React from 'react';
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/imagesmall.webp'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style';
import { MinusOutlined, PlusOutlined, StarOutlined } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ProductDetailsComponent = () => {
    const onChange= ()=>{}
    return (
        <Row style={{padding:'16px', background:'#fff', borderRadius:'4px'}}>
            <Col span={10} style={{ borderRight:'1px solid #e5e5e5', paddingRight:'8px'}}>
                <Image src={imageProduct} alt='anh' preview={false}/>
                <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='anh' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='anh' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='anh' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='anh' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='anh' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='anh' preview={false}/>
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft:'10px',}}>
                <WrapperStyleNameProduct>
                    Điện Thoại Samsung Galaxy S21 FE 5G - 8GB/128GB
                </WrapperStyleNameProduct>
                <div>
                    <StarOutlined style={{font: "12px", color:"yellow",}}/>
                    <StarOutlined style={{font: "12px", color:"yellow",}}/>
                    <StarOutlined style={{font: "12px", color:"yellow",}}/> 
                    <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>
                        200.000
                    </WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến </span>
                    <span className='address'>Thanh Liệt, Thanh Trì, Hà Nội</span> -
                    <span className='change-address'> Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{margin: ' 10px 0 20px'}}>
                    <div style={{marginBottom:'8px', padding:'10px 0', borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>Số lượng</div>
                    <WrapperQualityProduct>
                        <button style={{border:'none' , background:'transparent'}}>
                            <PlusOutlined style={{color:'#000' ,font:'20px'}} size='small'/>
                        </button>
                        <WrapperInputNumber defaultValue={3} onChange={onChange} />
                        <button style={{border:'none' , background:'transparent'}}>
                            <MinusOutlined style={{color:'#000' ,font:'20px'}} size='small'/>
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{display:'flex', justifyContent:'center', gap:'12px'}}>
                    <ButtonComponent
                        size={20}
                        styleButton={{backgroundColor: 'rgb(255,57,69)', height:' 48px', width:'220px', border:'none'}}
                        textButton='Chọn mua'
                        styleTextButton={{color: '#fff', fontWeight: '500'}}
                    >
                    </ButtonComponent>

                    <ButtonComponent
                        size={20}
                        styleButton={{backgroundColor: '#fff', height:' 48px', width:'220px', border:'1px solid rgb(13,92,182)'}}
                        textButton='Mua trả sau'
                        styleTextButton={{color: 'rgb(13,92,182)', fontWeight: '500'}}
                    >
                    </ButtonComponent>
                </div>
            </Col>
        </Row>
    );
};

export default ProductDetailsComponent;