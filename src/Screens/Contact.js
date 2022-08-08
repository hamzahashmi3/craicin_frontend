import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'


const Contact = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const validateEmployee = contactData => {
    const errors = {};
  
    if (!contactData.fullName) {
      errors.Name = 'Please Enter Name';
    } else if (contactData.contactData.length <= 3) {
      errors.contactData = 'Name should be more than 2 characters';
    }  
    if (!contactData.EmailId) {
      errors.EmailId = 'Please Enter Email ID';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactData.EmailId)) {
      errors.EmailId = 'Invalid email address';
    }
    if (!contactData.message) {
      errors.message = 'Please Enter Message';
    } 
  
    return errors;
  };

  const submitHandler = async (e) => {
    e.preventDefault()
    let res = await axios.post('http://localhost:5000/api/contactus', {
      fullName,
      email,
      message,
    }).then(res => res.data, setSuccessMsg('Your Data Submitted Successfully, We Will Contact You Shortly'))
    setTimeout(() => {
      window.location.reload()
    }, 3500)
    validate: validateEmployee
    .catch(err => console.log(err))
  }

  return (

    <div>
      <section className='bg-contact-img'>
        <code>
          <h1 className='text-white text-center' style={{paddingTop: '150px', textShadow: '1px 2px #000'}}>
            Contact Us
          </h1>
        </code>             
      </section>

      
      <section>
        <Container>
            <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-5 text-center text-muted'>Stay in Touch</h1>
            <Row>
                <Col md={6} className='text-muted'>
                    <h3>Our Location</h3>
                    <h4 className='fw-light'>Rabbie's Café, Waterloo Place, Edinburgh, EH1 3EG Scotland.</h4>

                    <h5 className='fw-normal mt-3'>Opening times:</h5>
                    <p className='mb-1'>Mon - Sat: 7:30 to 16:00</p>
                    <p>Sun: 7:30 to 15:00</p>

                    <h4 className='fw-light mb-2'></h4>
                    <h5 className='fw-normal mt-3'>Phone Rabbie's</h5>
                    <p className='mb-0'>Tel: <strong>+44(0) 131 226 3133</strong></p>
                    <p>Mon - Sun: 07:30 - 15:00</p>

                    <h5 className='fw-normal mt-3'>Email Rabbie's</h5>
                    <p className='mb-0'>Tour enquiries: <a className='text-success h6 fw-normal' href="#">tours@rabbies.com</a></p>
                    <p>Press enquiries: <a className='text-success h6 fw-normal' href="#">PR@rabbies.com</a></p>
                </Col>
                <Col md={6}>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" 
                            onChange={(e)=>setFullName(e.target.value)} 
                            value={fullName} name="fullName" 
                            placeholder="Your FullName" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" required 
                            onChange={(e)=>setEmail(e.target.value)} 
                            value={email}
                            name="email" placeholder="Your Email Address" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" 
                            onChange={(e)=>setMessage(e.target.value)} 
                            value={message}
                            name="message" placeholder="You Message here." rows="4"></textarea>
                        </div>
                        <p className={successMsg ? 'alert alert-success py-1': 'd-none'}>{successMsg ? <p className='mt-2'>{successMsg}</p> : ''}</p>
                        <button className="btn btn-outline-success" type="submit">Submit</button>
                    </form>
                </Col>

            </Row>
        </Container>
      </section>


      <section className='mt-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538884.6314185585!2d-4.49875705404658!3d56.25278192596576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c78efefc9a23%3A0x45465a02f12ed373!2sRabbie&#39;s%20Cafe%20Bar!5e0!3m2!1sen!2s!4v1658846429459!5m2!1sen!2s" width="99.8%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

    </div>
  )
}

export default Contact