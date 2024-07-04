import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/message_con.png'
import mail_icon from '../../assets/mail_icon.jpg'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import white_arrow from  '../../assets/white_arrow.jpg'
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7bce3373-2ab5-4b23-8a08-338061170628");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
        <h2>Send us a message <img src={msg_icon} alt="" /></h2>
        <p>ከታች ባሰዉ ፎርም በኩል እኛን ለማግኘት ነፃነት ይሰማዎ ። የእኛን አድራሻ መረጃ ከታች ያግኙ።  የእርስዎ አስተያየት፣ጥያቄዎች እና ጥቆማዎች ለእኛ አስፈላጊ ናቸው ለኡማችን ልዩ አገልግሎት ለመስጠት እንጥራለን።</p> 
        <ul>
            <li><img src={mail_icon} alt="" /> Ihsan-Islamic-Online-Education</li>
            <li> <img src={phone_icon} alt="" /> 251-984735563</li>
            <li> <img src={location_icon} alt="" /> Addis Ababa,  Ethiopia</li></ul>       
        </div>
<div className="contact-col">
  <form  onSubmit={onSubmit}>
    <label >ስም</label>
    <input type="text" name='name' placeholder='Enter your name' required />
    <label >ስልክ ቁጥር</label>
    <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
    <label>መልእክቶን እዚህ ያስፍሩ</label>
    <textarea name="message" id="" rows="6" placeholder='enter your message' required></textarea>
  <button type='submit' className=' btn dark-btn'> ሲጨርሱ ይጫኑት <img src={white_arrow} alt="" /></button>
  </form>
  <span>{result} </span>
</div>
    </div>
  )
}

export default Contact