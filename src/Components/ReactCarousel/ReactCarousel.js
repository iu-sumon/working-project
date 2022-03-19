import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './ReactCarousel.css';


const ReactCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-50 m-auto rounded-3"
                    src="https://images.unsplash.com/photo-1642887276244-db0985cda09a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lMTNwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>iPhone 13 Pro Max</h3>
                    <p>Your new superpower</p>
                    <a className='product_link' href="https://www.apple.com/iphone/" target="Blank">Explore</a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block  w-50 m-auto rounded-3"
                    src="https://images.unsplash.com/photo-1635843644763-0e9419bd4ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lMTNwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>iPhone 13 Pro</h3>
                    <p>Love the power</p>
                    <a className='product_link' href="https://www.apple.com/iphone/" target="Blank">Explore</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  w-50 m-auto rounded-3"
                    src="https://images.unsplash.com/photo-1532435109783-fdb8a2be0baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0d2F0Y2glMjBsYW5kc2NvcGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Apple Watch</h3>
                    <p>
                        Heavy on features.
                        Light on price
                    </p>
                    <a className='product_link' href="https://www.apple.com/watch/" target="Blank">Explore</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  w-50 m-auto rounded-3"
                    src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/02/The-Samsung-Galaxy-S22-Ultra-has-a-6.8-inch-screen-920x613.jpeg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Galaxy S22 Ultra </h3>
                    <p>
                        Heavy on features.
                        Light on price
                    </p>
                    <a className='product_link' href="https://www.samsung.com/us/mobile/phones/galaxy-s/" target="Blank">Explore</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  w-50 m-auto rounded-3"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhJrZLl9AjLQ_gdnLRRmN9yImsZfBI_SAjw&usqp=CAU"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Galaxy S20 Ultra 5G 128GB</h3>
                    <p>
                        Heavy on features.
                        Light on price
                    </p>
                    <a className='product_link' href="https://www.samsung.com/us/smartphones/galaxy-s-series/certified-re-newed-store/buy/?modelCode=SM5G988UZKAXAA" target="Blank">Explore</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default ReactCarousel;