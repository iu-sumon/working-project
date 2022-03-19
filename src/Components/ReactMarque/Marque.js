import React from 'react';
import Marquee from "react-fast-marquee";
 const ReactMarque = () => {
    return (
        <div >
            <Marquee speed={100}>
               <p className='text-white fs-5 fw-bold bg-danger mt-3 px-3 rounded-3 '>GREAT FREEDOM FESTIVAL 20<sup>th</sup>-31<sup>th</sup>December</p>
            </Marquee>
        </div>
    );
};

export default ReactMarque;