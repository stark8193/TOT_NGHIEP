import Slider from "react-slick";
import styled from "styled-components";
//color: rgb(255, 255, 0.5);
export const WrapperSliderStyle = styled(Slider)`
    & .slick-arrow.slick-prev { 
        left: 12px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #fff;
        }
    }
    & .slick-arrow.slick-next {
        right: 28px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #fff;
        }
    }
    & .slick-dots {
        z-index: 10;
        bottom: -2px !important;
        li {
            margin-right: -16px;
            button {
                &::before {
                    color: rgb(255, 255, 0.5);  
                }
            }
        }
        li.active {
            button {
                &::before {
                    color: #fff;
                }
            }
        }
    }
    & .slick-dots span{
        display: inline-block;
        width: 16px;
        height: 2px;
        background: #000;
        margin-right: -4px;
    }
`