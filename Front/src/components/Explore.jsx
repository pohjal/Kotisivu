import './Explore.css';


const IconLink = ({ route }) => {
    return (
      <div>
        <a href={route} target="_blank" rel="noopener noreferrer">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </a>
      </div>
    );
  };
  
  

const InfoCard = ({kuva, linkRoute, teksti, otsikko}) => {
    return (
        <div className="infoCard-container">
            <img src={kuva} alt="InfoCard" className="infoCard-picture" />
            <div className="largeText">{otsikko}</div>
            <div className="smallText">On this page you find more info about my studies, previous work history and contact info.</div>
            <div className="info-link"><a href={linkRoute}>{teksti}</a>  <IconLink/></div>
            
        </div>
    )
}


const Explore = () => {
    return (
        <div className="explore-container">
        <InfoCard otsikko={"About me page"} teksti={"Check it out"} kuva={'/info.jpg'}/>
        <InfoCard otsikko={"Projects Page"} teksti={"More About Projects"} kuva={'/projektit.jpg'}/>
        </div>
    )

}



export default Explore