import React, { useState, useEffect } from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Image } from 'antd';
import logo_login from  '../../assets/images/logo-login.png'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import * as UserService from '../../service/UserService'
import { useMutationHook } from '../../hooks/useMutationHook';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import * as message from '../../components/Message/Message'

const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [email,setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [confirmPassword, setConfirmPassword]= useState('')

    // console.log('data', mutation)

    const handleOnchangeEmail =(value)=>{
        setEmail(value)
    }

    const mutation = useMutationHook(
        data => UserService.signupUser(data)
    )   
    const {data, isPending, isSuccess, isError} = mutation

    useEffect(()=>{
        if(isSuccess){
            message.success()
            handleNavigateSignIn()
        }
        else if(isError){
            message.error()
        }
    },[isSuccess, isError])

    const handleOnchangePassword =(value)=>{
        setPassword(value)
    }

    const handleOnchangeConfirmPassword =(value)=>{
        setConfirmPassword(value)
    }

    const handleSignUp =()=>{
        mutation.mutate({
            email, password, confirmPassword
        })
        console.log('sign-up', email, password, confirmPassword)
    }

    const navigate = useNavigate()

    const handleNavigateSignIn =()=>{
        navigate('/sign-in')
    }   

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', width:'100vw', background:'rgba(0,0,0,0.4)'}}>
            <div style={{width: '800px', height:'445px', borderRadius:'6px', background:'#fff', display:'flex'}}>
                <WrapperContainerLeft>
                    <h1>Đăng ký</h1>
                    <p style={{color: '#949090', margin:'-5px 0 20px 0'}}>Đăng nhập và tạo tài khoản</p>
                    <InputForm style={{marginBottom:'10px'}} placeholder='abc123@gmail.com' value={email} onChange={handleOnchangeEmail}/>
                    <div style={{ position: 'relative' }}>
                            <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                            >{
                                isShowPassword ? (
                                <EyeFilled />
                                ) : (
                                <EyeInvisibleFilled />
                                )
                            }
                            </span>
                            <InputForm placeholder="password" style={{ marginBottom: '10px' }} value={password} onChange={handleOnchangePassword} type={isShowPassword ? "text" : "password"}
                           />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span
                            onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                            >{
                                isShowConfirmPassword ? (
                                <EyeFilled />
                                ) : (
                                <EyeInvisibleFilled />
                                )
                            }
                            </span>
                            <InputForm placeholder="comfirm password" value={confirmPassword} onChange={handleOnchangeConfirmPassword} type={isShowConfirmPassword ? "text" : "password"}
                            />
                        </div>
                    
                        {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
                    <LoadingComponent isLoading={isPending}>
                    <ButtonComponent
                                disabled={!email.length ||!password.length || !confirmPassword.length}
                                onClick={handleSignUp}
                                size={20}
                                styleButton={{
                                    backgroundColor: 'rgb(255,57,69)', 
                                    height:' 48px', 
                                    width:'100%', 
                                    border:'none',
                                    margin: '26px 0 10px'
                                }}
                                textButton='Đăng ký'
                                styleTextButton={{color: '#fff', fontWeight: '500'}}
                    >
                    </ButtonComponent>
                    </LoadingComponent>

                    <p>Bạn đã có tài khoản? &nbsp; <WrapperTextLight onClick={handleNavigateSignIn}>Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>

                <WrapperContainerRight>
                    <Image src={logo_login} preview={false} alt='Anh' height={203} width={203}/>
                    <h4>Mua sắm tại TLUSHOP</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
};

export default SignUpPage;