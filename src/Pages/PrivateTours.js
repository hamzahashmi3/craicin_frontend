import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import {ImLocation} from 'react-icons/im'
import {MdOutlineFamilyRestroom} from 'react-icons/md'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {FaPenFancy, FaWalking, FaPhoneAlt} from 'react-icons/fa'


const PrivateTours = () => {
  return (
    <div className='text-muted'>
        <section className='bg-checkout-img'>
        <code>
          <h1 className='text-white text-center' style={{paddingTop: '200px', textShadow: '1px 2px #000'}}>
            Private Tours
          </h1>
        </code>             
      </section>


      <section>
        <Container className='text-center mt-5'>
            <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-3 text-muted'>Create Your Tour</h1>
            <p>If you want to go on an exclusive trip, you can create a private tour.</p>
            <p>Your vehicle can range from a saloon car to any size of coach, and your guide will be an expert in storytelling and local insights.</p>
            <p>To arrange your tour, please fill in the form below or email <a href="mailto:explore@rabbies.com" className='text-success'>explore@rabbies.com</a></p>
            <p className='my-3'>If you've got any questions about scheduled tours, please <Link to="/contact" className='text-success'>contact us here.</Link></p>

            <hr className='w-25 hr m-auto mt-4 mb-4' />

            <h4 className='mt-4'>Why should you pick a private tour?</h4>
            <Row className="my-4">
                <Col md={3}>
                    <h1 className='display-4 text-success'><FaPenFancy /></h1>
                    <p>Choose from our scheduled tours or create your own itinerary.</p>
                </Col>
                <Col md={3}>
                    <h1 className='display-4 text-success'><MdOutlineFamilyRestroom /></h1>
                    <p>Go on an exclusive adventure with just you, your friends, and family.</p>
                </Col>
                <Col md={3}>
                    <h1 className='display-4 text-success'><FaWalking /></h1>
                    <p>Pick your style of a trip from luxury castles to backpacking adventures.</p>
                </Col>
                <Col md={3}>
                    <h1 className='display-4 text-success'><FaPhoneAlt /></h1>
                    <p>Ask us to reserve restaurant tables, book attractions, and take care of all the details.</p>
                </Col>
            </Row>
        </Container>
      </section>


      <section>
        <Container>
            <Row>
                <h4 className='text-center'>Who is a private tour for?</h4>
                <Col md={6} className='my-3'>
                    <div className="card border-0">
                        <img className="card-img-top" src="imgs/slider/img5.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Passionate Travellers</h5>
                            <p className="card-text">
                                Maybe you dream of drinking every dram of whisky on a custom tour of Scotland. Perhaps you want to follow in the footsteps of Shakespeare. Whatever you're passionate about, we can help bring it to life.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='my-3'>
                    <div className="card border-0">
                        <img className="card-img-top" src="imgs/privatetours/Old_Man_Storr_Skye_2.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Friends & Family</h5>
                            <p className="card-text">A private tour gives you and your friends the space and freedom to do what you want to do in the way you want to do it.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='my-3'>
                    <div className="card border-0">
                        <img className="card-img-top" src="imgs/privatetours/Chatsworth_House_6.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Work Days Out</h5>
                            <p className="card-text">Be more creative with your team-building days out. Forget the pubs and paintball and go to a famous castle or take a gin-tasting trip around Edinburgh instead.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='my-3'>
                    <div className="card border-0">
                        <img className="card-img-top" src="imgs/privatetours/Torridon_Kilt_Man.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Heritage Journeys</h5>
                            <p className="card-text">Trace your family story and discover the castles and landscapes your ancestors once roamed.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>

      <hr className='w-25 hr m-auto mt-4 mb-4' />

      <section>
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>   
                    <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-3 text-center text-muted'>Get in touch</h1>
                    <p className='text-center'>Help us create your perfect trip by filling in the form with as much detail as you can.</p>
                    <p className='text-center'><strong>Please note</strong>, due to high demand and limited availability, we may not be able to quote for a private tour with less than one month's notice.</p>
                    <p className='text-center'>If you've got any questions about scheduled tours, please <Link to="/contact" className='text-success'>contact us here</Link>.</p>                 

                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Your name</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Number of adults</label>
                            <input type="number" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Number of children</label>
                            <input type="number" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <p>Where and when would you like to go: *</p>

                        <div className="row">
                            <div className="col">
                                <label for="inlineFormInputGroup">Start:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text text-success"><ImLocation /></div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Starting Point..." />
                                </div>
                            </div>
                            <div className="col">
                                <label for="inlineFormInputGroup">Finish:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text text-success"><ImLocation /></div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Finish Point..." />
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col">
                                <label for="inlineFormInputGroup">Start Date:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text text-success"><BsFillCalendarEventFill /></div>
                                    </div>
                                    <input type="date" className="form-control" id="inlineFormInputGroupUsername" placeholder="Finish Point..." />
                                </div>
                            </div>
                            <div className="col">
                                <label for="inlineFormInputGroup">Finish Date:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text text-success"><BsFillCalendarEventFill /></div>
                                    </div>
                                    <input type="date" className="form-control" id="inlineFormInputGroupUsername" placeholder="Finish Point..." />
                                </div>
                            </div>
                        </div>
                        <label>Describe your ideal itinerary:</label>
                        <textarea className='form-control' placeholder='e.g. I want to stop at all beaches and coastlines'>
                        </textarea>

                        <h1>Recaptcha will be here...</h1>
                        <button type="submit" className="btn btn-outline-success btn-lg">Send</button>
                    </form>

                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default PrivateTours