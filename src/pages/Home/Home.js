import React from 'react';
 import Navbar from '../../components/shared/Navbar/Navbar';
import Banner from '../../components/pages/Home/Banner';
import Projects from '../../components/pages/Home/Projects';
import Technologies from '../../components/pages/Home/Technologies';
import AboutMe  from '../../components/pages/Home/AboutMe';
import PersonalAcomplishments from '../../components/pages/Home/PersonalAcomplishments';
import Contact from '../../components/pages/Home/Contact';
import Pricing from '../../components/pages/Home/Pricing';
import Comments from '../../components/pages/Home/Comments';
import Subscribe from '../../components/pages/Home/Subscribe';
import Footer from '../../components/shared/Footer/Footer';
const Home=()=>{
    return(
        <div className='home-page'> 
            <Navbar/>
             <Banner />
            <Projects/>
            <Technologies/>
            <AboutMe/>
            <PersonalAcomplishments/>
            <Contact/>
            <Pricing/>
            <Comments/>
            <Subscribe/>
            <Footer/>

        </div>
    )
}
export default Home;