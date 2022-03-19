 import './Header.css'
const Header = (props) => {
    
    return (
        <div>
          
            <nav className='row color1'>

                <div className='col-2'>
                    <h1>TECH DEN</h1>
                </div>

                 
                <div  className='col-10 d-flex justify-content-end align-items-center'>
                        <li><a href="https://www.techdenbd.com/" target="Blank">Home</a></li>
                        <li><a href="https://www.apple.com/" target="Blank" >Shop</a></li>
                        <li>Cart<sup className='text-danger fs-5'>{props.count}</sup></li>
                        <li><a href="https://www.facebook.com/spsumoniu/" target="Blank">Contact</a></li>
                    </div>
            </nav>

        </div>
    );
};

export default Header;