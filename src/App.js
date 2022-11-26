import React from 'react';
import Navbar from "./Components/Navbar";

import {
	BrowserRouter as Router,
	Route
  } from 'react-router-dom';

  import { Routes } from 'react-router-dom'; 
  
  import About from './pages/About/About';
  import Contact from './pages/Contact/Contact';
  import Home from './pages/Home/Home';
  import Services from './pages/Service/Services';
  import Testimonial from './pages/Testimonial/Testimonial';
  

function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Router>
            <main>
                <Routes>
                    <Route exact path="/" element ={<Home/>}/>
                    <Route exact path="/about" element ={<About/>}/>
                    <Route exact path="/services" element ={<Services/>}/>
                    <Route exact path="/testimonial" element={<Testimonial/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                </Routes>
            </main>
        </Router>
		</React.Fragment>
	);
}

export default App;
