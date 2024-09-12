import ContactAddres from '../ContactAddres/ContactAddres'
import ContactForm from '../ContactForm/ContactForm'
import ContactMap from '../ContactMap/ContactMap'
import Title from '../Title/Title'
import './Contact.css'
function Contact() {
  return (
    <div>
        <Title title="Contact" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
        <ContactMap/>
        <div className='d-flex container my-5  flex-lg-row flex-column '> 
            <ContactAddres/>
            <ContactForm/>
        </div>
    </div>
  )
}

export default Contact