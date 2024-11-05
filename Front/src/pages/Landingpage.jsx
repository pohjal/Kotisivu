import Etusivu from '../components/Etusivu.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Purpose from '../components/Purpose.jsx';
import Explore from '../components/Explore.jsx';


const Landingpage = () => {

    return (
        <>
        <Sidebar/> 
        <Etusivu/>
        <Purpose/>
        <Explore/>
        </>
    )
}

export default Landingpage