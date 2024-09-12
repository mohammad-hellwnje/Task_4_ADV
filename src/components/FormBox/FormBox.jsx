import FormInput from '../FormInput/FormInput'
import Title from '../Title/Title'
import './FormBox.css'
function FormBox() {
  return (
   <div className='formbox py-4'>
     <Title title="MAKE AN APPOINTMENT" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
     <FormInput/>
   </div>
      
  )
}

export default FormBox