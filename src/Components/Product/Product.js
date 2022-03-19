import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './Product.css'
const Product = (props) => {
    
    const { brand, image, phone_name } = props.product;

    return (

        <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className='card shadow'>
            <img className='w-50 mx-auto p-3' src={image} alt="" />
            <h3>{phone_name}</h3>
            <h4>{brand}</h4>
            <div className='d-flex justify-content-between'>
            
                <button onClick={props.counter} className=' btn bg-success text-white'>Add To Cart</button>
                   
                 <ReactModal product={props.product}></ReactModal>
                <button className=' btn bg-success px-3 text-white'>Delete</button>
               
            </div>
        </div>


    );
};

export default Product;