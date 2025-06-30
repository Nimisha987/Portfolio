import React from 'react'
import './contact.css'
import Mail from '../../assets/Untitled_ design5.svg';
import Call from '../../assets/Untitled_design4.svg';
import Location from '../../assets/Untitled_design6.svg';

const Contact=()=>{

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9a057e8a-65fb-42fd-aa6b-acaa4a4e8730");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

    return (
        <div id="contact" className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>
                        Let's talk
                    </h1>
                    <p>
                        Have a project in mind or just want to say hello? Feel free to reach out! I’m always open to new opportunities, collaborations, or a quick chat about design and development. Let’s connect and bring your ideas to life.
                    </p>
                    <div className="contact-details">
                        {/* <div className="contact-detail">
                            <img src={Mail} alt=''></img>
                            <p>nimishaagrawal@gmail.com</p>
                            
                        </div>
                        <div className="contact-detail">
                              <img src={Call} alt=''></img>
                            <p>6395428620</p>
                        </div>
                        <div className="contact-detail">
                            <img src={Location} alt=''></img>
                            <p>Ghaziabad</p>
                            
                        </div> */}
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter Your Name' name='name'/>
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email'/>
                    <label htmlFor=''>Write your message here</label>
                    <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                    <button  type='submit'className='contact-submit'>Submit Now</button>
                </form>
            </div>

        </div>
    )
}
export default Contact