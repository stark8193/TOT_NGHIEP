import { Badge, Col, } from 'antd';
import React from 'react';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import {UserOutlined,CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const HeaderComponent = () => {

    const navigate = useNavigate()
    const user = useSelector((state) => state.user)

    const handleNavigateLogin =()=>{
        navigate('/sign-in')
    }   

    console.log('user', user)
    return (
        <div>
           <WrapperHeader gutter={8}>
                <Col span={6}>
                    <WrapperTextHeader> TLUSHOP </WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                    size ="large"
                    textButton= "Tìm kiếm"
                    placeholder = "Nhập từ khóa"
                    bordered= {false}
                    />
                </Col>
                <Col span={6} style={{display: "flex", gap: "20px", alignItems: "center"}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{fontSize: "30px"}}/>
                        {user?.name ? (
                                <div style={{cursor: 'pointer'}}>{user.name}</div>
                            ):(
                                <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                                    <WrapperTextHeaderSmall>Đăng kí/Đăng nhập</WrapperTextHeaderSmall>
                                    <div>
                                        <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                        <CaretDownOutlined />
                                    </div>
                                </div>
                        )}

                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4}>
                            <ShoppingCartOutlined style={{fontSize: "30px", color: "#fff"}}/>
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default HeaderComponent;