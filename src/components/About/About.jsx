import AboutCard from '../AboutCard/AboutCard'
import AboutImage from '../AboutImage/AboutImage'
import AboutInfo from '../AboutInfo/AboutInfo'
import AboutInfo2 from '../AboutInfo2/AboutInfo2'
import AboutVideo from '../AboutVideo/AboutVideo'
import Title from '../Title/Title'
import './About.css'
function About() {
  return (
    <div>
       <Title title="About Us" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
       <div className="video-info  d-flex justify-content-center container mb-5 gap-2 flex-lg-row flex-column">
        <AboutVideo />
        <AboutInfo />
       </div>
      <div className='d-flex justify-content-center'>
      {/* <AboutCard/> */}
      </div>
      {/* <div className='container d-flex justify-content-between my-5  gap-2 flex-lg-row flex-column'>
        <AboutImage/>
        <AboutInfo2/>
      </div> */}
    </div>
  )
}

export default About