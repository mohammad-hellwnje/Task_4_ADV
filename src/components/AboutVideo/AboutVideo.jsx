import './AboutVideo.css';
import img1 from './../../assets/img/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'; 

function AboutVideo() {
  return (
    <div className='col-lg-6 col-12 position-relative'>
      <img src={img1} alt="about-img" className='w-100 h-100' />
      
      <div className="outcircle position-absolute top-50 start-50 translate-middle rounded-circle">
        
        <div className="incircle position-absolute top-50 start-50 translate-middle rounded-circle">
          <FontAwesomeIcon icon={faPlay} color='white' className="position-absolute top-50 start-50 translate-middle" />  
        </div>
        
      </div>
    </div>
  );
}

export default AboutVideo;
