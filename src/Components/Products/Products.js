import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = (props) => {

    const inputRef = React.createRef() //method

    const [products, setProducts] = useState([])


    const [value, setValue] = useState("");

    function handle() {

        // const inputText = inputRef;
        const inputText = inputRef.current.value; //destructuring
        setValue(inputText)
        // console.log(inputText);
    }

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${value}`)
            .then(res => res.json())
            .then(data => setProducts(data.data))
    }, [value])
    return (
        <div>

            <div className='container mt-3 pt-3'>

                <div className='searchBox'>

                    <input ref={inputRef} className='text-center px-5' type="text" placeholder='Search your Products' />

                    <button onClick={handle} className='px-3 rounded'><i className="fa-solid fa-magnifying-glass"></i></button>

                </div>

                 <div className='parent w-75 mx-auto'>
                    {
                        products.map((product, index) => <Product counter={props.counter}  key={index} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;