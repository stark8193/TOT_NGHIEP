import React from 'react';
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent';

const ProductDetailsPage = () => {
    return (
        <div style={{padding: '0 120px',background:'#efefef', height:'640px'}}>
            <p style={{paddingTop:'10px', marginTop:'0', color:'silver'}}>Trang chủ</p>
            <ProductDetailsComponent/>
        </div>
    );
};

export default ProductDetailsPage;