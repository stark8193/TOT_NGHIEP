import styled, { keyframes } from "styled-components";

export const AreaStyle = styled.div`
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100%;
    height:100vh;
`
export const CirclesStyle = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    & li{
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;
    }
`
export const Child_1 = styled.li`
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: {KEY} 0s;
`
export const Child_2 = styled.li`
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: {KEY} 2s;
    animation-duration: {KEY} 12s;
`
export const Child_3 = styled.li`
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: {KEY} 4s;
`
export const Child_4 = styled.li`
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: {KEY} 0s;
    animation-duration: {KEY} 18s;
`
export const Child_5 = styled.li`
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: {KEY} 0s;
`
export const Child_6 = styled.li`
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: {KEY} 3s;
`
export const Child_7 = styled.li`
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: {KEY} 7s;
`
export const Child_8 = styled.li`
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: {KEY} 15s;
    animation-duration: {KEY} 45s;
`
export const Child_9 = styled.li`
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: {KEY} 2s;
    animation-duration: {KEY} 35s;
`
export const Child_10 = styled.li`
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: {KEY} 0s;
    animation-duration: {KEY} 11s;
`

export const KEY = keyframes`
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`