import ServiceBox from '../ServiceBox/ServiceBox';
import Title from '../Title/Title';
import './Service.css';
import {serviceData} from './../../Data/ServiceData/ServiceData'
function Service() {


  return (
    <div>
      <Title title="Service" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      <ServiceBox serviceData={serviceData} />
    </div>
  );
}

export default Service;
