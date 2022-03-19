import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css"
import ReactCarousel from './Components/ReactCarousel/ReactCarousel';
import Footer from './Components/Footer/Footer';
import Marquee from 'react-fast-marquee';
import ReactMarque from './Components/ReactMarque/Marque';

function App() {
  const [count, setCount] = useState(0)

  const counter = () => {
    setCount(count + 1)
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <div className="App ">
      <div>

        <Header count={count}></Header>

      </div>
      <div className=' container bg-secondary rounded-3'>
        <Products counter={counter}></Products>
      </div>
      <div>
      <ReactMarque></ReactMarque>
      </div>

      <div className='mt-5 bg-secondary p-5'>

        <ReactCarousel></ReactCarousel>

      </div>

     
      
       <div>
         <Footer></Footer>
       </div>
    </div>
  );
}

export default App;
