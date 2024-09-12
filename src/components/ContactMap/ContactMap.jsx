import './ContactMap.css';

function ContactMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.0001592752483!2d35.804181225112465!3d35.52899373832335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ada7c38f8879%3A0x5f66e4e99dbb7a47!2sfocal%20X%20agency!5e0!3m2!1sar!2snl!4v1726086216571!5m2!1sar!2snl"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default ContactMap;
