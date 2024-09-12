import './AboutImage.css'
import img1 from './../../assets/img/features.jpg'
function AboutImage() {
  return (
    <div className='col-lg-7 col-12'>
        <img src={img1} alt="features" className='w-100 h-100' />
    </div>
  )
}

export default AboutImage