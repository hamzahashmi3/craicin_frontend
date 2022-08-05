import React from 'react'
import {Container, Col, Accordion } from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Faq = () => {
  return (
    <div>
      <section className='bg-checkout-img'>
        <code>
          <h1 className='text-white text-center pb-4' style={{paddingTop: '200px', textShadow: '1px 2px #000'}}>
            Frequently Asked Question
          </h1>
        </code>             
      </section>


        <section className='text-muted'>
            <Container>
                <h1 className='fw-normal display-4 mt-5 mb-3'>Frequently Asked Questions</h1>
                <p>Where are we? When will we stop for lunch? What’s that great big cow with horns doing in the middle of the road?</p>
                <p>Travelling to new places can prompt many questions. So, we’ve created this list of FAQs to help you out.</p>
                <p>If you can’t find the answer you’re looking for, you can contact our friendly team <Link to="/contact" className='text-success'>here</Link>. You can also find out about our coronavirus safety measures <Link className='text-success' to="/covid">here</Link>.</p>

                <h2 className='fw-normal display-6 my-3'>Before You Go</h2>
                <Col md={10}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h6>How to book your tour</h6></Accordion.Header>
                            <Accordion.Body className='text-muted'>
                                <h6>Where can I book my tour?</h6>
                                <p>You can book a Rabbie’s tour <Link className='text-success' to="/">online</Link>, <Link className='text-success' to="/contact">by email</Link>, over the <a className='text-success' type="tel" href="+44(0) 131 226 3133">phone</a>, at one of our <Link className='text-success' to="/contact">locations in Edinburgh</Link>, and in various Tourist Information Centres and hotels.</p>
                                <h6>How far in advance should I book?</h6>
                                <p>We accept reservations up to the day of departure on most of our tours. But they sell out fast, so it’s best to book in advance.</p>
                                <p>Please let us know if anyone in your group booked their tour separately, so we can get you on the same mini-coach.</p>
                                <h6>What’s the maximum number of people I can book the tour for?</h6>
                                <p>Eight is the maximum number of people you can book a tour for. If you want to travel in a larger group, please have a look at our <Link to="/privatetours" className='text-success'>private tours</Link> section for further information and suggestions.</p>
                                <h6>Are tours available all year round?</h6>
                                <p>We operate tours all year round, however there are less choices and departures throughout the winter. Click here to check tour availability.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h6>Traveller age range & concessions</h6></Accordion.Header>
                            <Accordion.Body className='text-muted'>
                                <h6>Can I bring my child/children on the tour?</h6>
                                <p>We don’t carry children under the age of five on our scheduled tours. Children under 18 need to be accompanied by an adult. You can ask us about the tours we recommend for younger children. And if your child is less than 1.35m tall, you should let us know in advance so we can provide them with a suitable booster seat.</p>
                                <p>*Unfortunately, we don't accept children on Europe tours in Switzerland, Portugal, Italy and Spain.</p>
                                <h6>Is there an age limit for your tours?</h6>
                                <p>No. From five years’ young to over 100 years’ young, we take passengers of all ages. <Link to="/contact" className='text-success'>Get in touch</Link> If you wish to enquire about the physical demands of particular tours.</p>
                                <p>*Please note that the age limit for our Europe tours in Switzerland, Portugal, Italy and Spain is 15+.</p>
                                <h6>Do you offer concession prices?</h6>
                                <p>Yes. On our UK & Ireland tours; students (anyone at school or university in the UK and internationally), seniors over 60 and children (between five and 15 years old) receive a concession price.</p>
                                <p>*Unfortunately, there is only one price for our Europe tours, there are no discounts for seniors or other concessions.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h6>Visas</h6></Accordion.Header>
                            <Accordion.Body className='text-muted'>
                                <h6>Do I need a visa to go on a Rabbie’s tour?</h6>
                                <p>This depends on your country of citizenship and where you’re visiting. You can find up-to-date and reliable information on the official tourism website of the country you’re visiting, or from their embassy or consulate. To find out whether you require a visa to travel within the United Kingdom (England, Scotland, Wales and Northern Ireland) <a href="https://www.gov.uk/check-uk-visa" className='text-success'>see here</a>. To determine whether you need a visa to visit the Republic of Ireland, <a className='text-success' href="https://www.irishimmigration.ie/wp-content/uploads/2021/07/Immigration-Service-Delivery-Visa-and-Non-Visa-Required-Countries.pdf">see here</a>. And to find out about visas to Europe, <a className='text-success' href="https://home-affairs.ec.europa.eu/schengen-borders-and-visa/schengen-visa_en">see here</a>. Visa applications take time, so organise this ahead of your departure date. Also remember to double check your passport’s expiry date.</p>
                                <h5>Will my passport be checked between borders?</h5>
                                <p>Passports aren’t checked when crossing between countries within the United Kingdom and Europe.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><h6>Accommodation</h6></Accordion.Header>
                            <Accordion.Body className='text-muted'>
                                <h6>Work Needs to be Done here.....</h6>
                                <p>We don’t carry children under the age of five on our scheduled tours. Children under 18 need to be accompanied by an adult. You can ask us about the tours we recommend for younger children. And if your child is less than 1.35m tall, you should let us know in advance so we can provide them with a suitable booster seat.</p>
                                <p>*Unfortunately, we don't accept children on Europe tours in Switzerland, Portugal, Italy and Spain.</p>
                                <h6>Is there an age limit for your tours?</h6>
                                <p>No. From five years’ young to over 100 years’ young, we take passengers of all ages. <Link to="/contact" className='text-success'>Get in touch</Link> If you wish to enquire about the physical demands of particular tours.</p>
                                <p>*Please note that the age limit for our Europe tours in Switzerland, Portugal, Italy and Spain is 15+.</p>
                                <h6>Do you offer concession prices?</h6>
                                <p>Yes. On our UK & Ireland tours; students (anyone at school or university in the UK and internationally), seniors over 60 and children (between five and 15 years old) receive a concession price.</p>
                                <p>*Unfortunately, there is only one price for our Europe tours, there are no discounts for seniors or other concessions.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><h6>Cancellation policies</h6></Accordion.Header>
                            <Accordion.Body className='text-muted'>
                                <h6>What is guaranteed departure?</h6>
                                <p>We’ll never cancel your tour because of minimum numbers. At times, we may need to cancel due to unavoidable and extraordinary circumstances which are outwith our control, or which might jeopardise your safety. Please refer to our <Link to="/termsconditions" className='text-success'>terms and conditions</Link>.</p>
                                <h5>Is there flexibility to change my tour?</h5>
                                <p>You can transfer to another tour if there is availability, as long as the request to do so is outside the tour cancellation period. You must inform us by email. We won't charge a fee for this, but you will pay for any difference in price where the cost of the new tour is higher. Please note, any amends may affect your accommodation choices.</p>
                                <h5>What are your cancellation policies?</h5>
                                <p>For our UK & Ireland tours, we have a cancellation period of 48 hours for our one day tours, 15 days for two to nine day tours, and 21 days for 10+ day tours. If cancelled outside this period, we'll give you a full refund minus a 10% admin charge. If you cancel inside this period, refunds are at our discretion. Click here to view full terms and conditions.</p>
                                <p>For our Europe tours, we have a cancellation period of 42 days. If cancelled outside this period, we'll give you a full refund minus a 10% admin charge. If you cancel inside this period, you will be liable for all the cost of the tour package.</p>
                                <p><Link to="/termsconditions" className='text-success'>Click here</Link> to view full terms and conditions.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header><h6>Tour language</h6></Accordion.Header>
                            <Accordion.Body className='text-muted'>
                                <h6>What languages are your tours in?</h6>
                                <p>All of our tours are conducted in clear spoken English.</p>
                                <h6>Can I view my tour itinerary in a language other than English?</h6>
                                <p>Yes. Some of our tour summaries are translated into French, Spanish, Italian and German on our website. You can change the language of our website by clicking the globe icon at the top of the page.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>    
            </Container>
        </section>

    </div>
  )
}

export default Faq