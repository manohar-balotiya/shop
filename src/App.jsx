import React from 'react';
import { Navbar } from './component/Navbar';
import { Product } from './component/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact } from './component/Contact';
import { Feature } from './component/Feature';
import About from './component/About';
import Support from './component/Support';
import Login from './component/Login';
import { Sign } from './component/Sign';
import { View } from './component/View';
import { Footer } from './component/Footer';

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Product />

//     </>
//   );
// };

const App = () => {
  return (
    <>
      {/* // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/feature" element={<Feature />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/support" element={<Support />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/sign" element={<Sign />} />
    //     <Route path="/view" element={<View />} />

    //   </Routes>
    // </BrowserRouter> */}
      <Navbar />
      <Product />
      <Footer />
    </>

  );
};

export default App;
