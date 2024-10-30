import './Etusivu.css';
import { Bodytext, Headertext } from './text-components/TextElements.jsx';



const Etusivu = () => {
    return (
        
 <div className="etusivu-container">
    <div className="logo-container">
  <Headertext teksti="Leevi Pohja" size={40} /></div>
  <div className="etusivu-content-container">
  <Headertext teksti="Welcome to my homepage" size={60} />
    <Bodytext teksti="Explore this page to learn more about me and my projects"size={30} /></div>
 </div>
        
    )
}


export default Etusivu