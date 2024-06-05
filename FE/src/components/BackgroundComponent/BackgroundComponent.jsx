import React from 'react';
import './styles.css'
const BackgroundComponent = ({children}) => {
    return (
        <div style={{margin:'0', padding:'0'}}>
            <div className="area" >
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div >
        </div>
    );
};

export default BackgroundComponent;