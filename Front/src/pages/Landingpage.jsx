import Etusivu from '../components/Etusivu.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Purpose from '../components/Purpose.jsx';
import Explore from '../components/Explore.jsx';
import Footer from '../components/Footer.jsx';
import AboutMe from '../components/AboutMe.jsx';


const Landingpage = () => {

    return (
        <>
        <Sidebar/> 
        <Etusivu/>
        <Purpose/>
        <Explore/>
        <AboutMe/>
        <Footer/>
        </>
    )
}

export default Landingpage