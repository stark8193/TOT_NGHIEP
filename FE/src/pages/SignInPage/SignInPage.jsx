import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { Image } from 'antd';
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_login from '../../assets/images/logo-login.png';
import BackgroundComponent from '../../components/BackgroundComponent/BackgroundComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import InputForm from '../../components/InputForm/InputForm';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import { useMutationHook } from '../../hooks/useMutationHook';
import * as UserService from '../../service/UserService';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/sildes/userSlide';

const SignInPage = () => {

    const navigate = useNavigate()

    const handleNavigateSignUp =()=>{
        navigate('/sign-up')
    }   

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email,setEmail]= useState('')
    const [password, setPassword]= useState('')
    const dispatch = useDispatch()

    const mutation = useMutationHook(
        data => UserService.loginUser(data)
    )   
    const {data, isPending, isSuccess, isError} = mutation
    // console.log('data', mutation) 

    useEffect(()=>{
        if(isSuccess){
            navigate('/')
            // console.log('data', data)
            localStorage.setItem('access_token', data?.access_token)
            if(data?.access_token){
                const decoded = jwtDecode(data?.access_token);
                if(decoded?.id){
                    handleGetDetailsUser(decoded?.id, data?.access_token)
                }
            }
        }
        
    },[isSuccess])

    const handleGetDetailsUser = async (id, access_token)=>{
        const res = await UserService.getDetailsUser(id, access_token)
        dispatch(updateUser({...res?.data, access_token: access_token}))
        console.log('res', res)
    }

    const handleOnchangeEmail =(value)=>{
        setEmail(value)
    }

    const handleOnchangePassword =(value)=>{
        setPassword(value)
    }

    const handleSignIn =()=>{
        mutation.mutate({
            email,
            password,
        })
        // console.log('sign-in', email, password)
    }

    //style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', background: 'rgba(0,0,0,0.4)' }}
    return (
        <div style={{position:'relative'}}>
            <BackgroundComponent  style={{position:'absolute', top:'0', left:'0', right:'0', bottom:'0  '}}/>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex', position:'absolute' , top:'100px', left:'280px'}}>
                <WrapperContainerLeft>
                    <h1 style={{ opacity: '0.8' }}>Đăng nhập</h1>
                    <p style={{ opacity: '0.7', margin: '-5px 0 20px 0' }}>Đăng nhập và tạo tài khoản</p>
                    <InputForm style={{ marginBottom: '10px' }} placeholder='abc123@gmail.com'  value={email} onChange={handleOnchangeEmail}/>
                    <div style={{ position: 'relative' }}>
                            <span
                                onClick={()=> setIsShowPassword(!isShowPassword)}
                                style={{
                                    zIndex: 10,
                                    position: 'absolute',
                                    top: '4px',
                                    right: '8px'
                                }}
                            >
                            {
                                isShowPassword ? (
                                <EyeFilled />
                                ) : (
                                <EyeInvisibleFilled />
                                )
                            }
                            </span>
                            <InputForm
                            value={password} onChange={handleOnchangePassword}
                            placeholder="password"
                            type={isShowPassword ? "text" : "password"}
                            />
                        </div>

                    {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
                    <LoadingComponent isLoading={isPending}>
                    <ButtonComponent
                        disabled={!email.length ||!password.length }
                        onClick ={handleSignIn}
                        size={20}
                        styleButton={{
                            backgroundColor: 'rgb(255,57,69)',
                            height: ' 48px',
                            width: '100%',
                            border: 'none',
                            margin: '26px 0 10px'
                        }}
                        textButton='Đăng nhập'
                        styleTextButton={{ color: '#fff', fontWeight: '500' }}
                    >
                    </ButtonComponent>
                    </LoadingComponent>

                    <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
                    <p>Chưa có tài khoản? &nbsp; <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight></p>
                </WrapperContainerLeft>

                <WrapperContainerRight>
                    <Image src={logo_login} preview={false} alt='Anh' height={203} width={203} />
                    <h4 style={{ opacity: '0.6' }}>Mua sắm tại TLUSHOP</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
};

export default SignInPage;