import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../Assets/css/style.css'
import {AiOutlineCheck} from 'react-icons/ai'
import {BiDownArrowAlt} from 'react-icons/bi'


const StudentTours = () => {

    const [show, setShow] = useState(12)
    const loadMore = () => {
        setShow((prevValue) => prevValue + 3)
    }

  return (
    <div>

      <section className='bg-checkout-img'>
        <code>
          <h1 className='text-white text-center' style={{paddingTop: '200px', textShadow: '1px 2px #000'}}>
            Student Tours Scotland
          </h1>
        </code>             
      </section>

        <section className='mt-5 text-center text-muted'>
            <Container className='mt-5'>
                <h2>Student Tours</h2>
                <p>We offer student discounts on all our Scotland tours. So, if you’re studying anywhere in the world, don’t miss your chance to explore this wonderful country at an affordable price.</p>
                <p>Scotland is full of fun local bars, majestic mountains, and the most memorable stories you’ll ever hear. And we cover all of it on our wide selection of tours, and also organise private student tours if you’re looking for a tailor-made itinerary of Scotland with your friends.</p>
                <p>You travel with an expert local guide who will show you the best of the country and take you off-the-beaten track as much as possible.</p>
                <p>Check our selection of tours by departure point below.</p>

                <h4>Scotland Fact File:</h4>
                <p><strong>Population:</strong> 5.2 mill | <strong>Languages:</strong> English, Gaelic, Scots | <strong>Size:</strong> 82,077 km²</p>
                <p><strong>National Animal:</strong> Unicorn | <strong>National Flower:</strong> Thistle</p>
            </Container>
        </section>

        <hr className='w-25 hr m-auto mt-4 mb-4' />

        <section className='text-muted'>
        <Container>
            <Row>
                <h2 className='text-center fw-normal mt-4'>Why you'll love Scotland</h2>
                <Col md={6} className='my-3'>
                    <div className="card border-0">
                        <img className="card-img-top" src="imgs/studenttours/House_Torridon_700_x_467.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Visit the highlights</h5>
                            <p className="card-text">
                                Our tours take you to Scotland’s must-see landmarks and attractions, such us Loch Ness, the Highlands or Skye. From day tours to multi-day tours, make sure you visit these Scottish highlights while you can still get a student discount!
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='my-3'>
                    <div className="card border-0">
                        <img className="card-img-top" src="imgs/studenttours/Stirling_Castle_700_x_467.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Take a day tour</h5>
                            <p className="card-text">Our days tours take you through Scotland's most fascinating sights, such as Loch Lomond, Stirling Castle, Rosslyn Chapel, the Scottish Borders, and St. Andrews.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='my-3'>
                    <div className="card border-0">
                        <img className="card-img-top" src="imgs/studenttours/Highland_Cow_edited.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Escape to the wild</h5>
                            <p className="card-text">If you want to escape into the wild, check out our fantastic tour selection to 'lesser-known' places in Scotland. You can experience the authentic Scottish way of life, visit the gorgeous Isle of Mull or Arran, embark on a four-day Scottish castle adventure, or go up north to Orkney.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='my-3'>
                    <div className="card border-0">
                        <img className="card-img-top" src="imgs/studenttours/glenfinnan_viaduct_700_x_467.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">See the film and TV locations</h5>
                            <p className="card-text">Secluded beaches, rugged mountains, and ancient castles: Our jaw-dropping scenery provides the perfect backdrop for big and small productions. Explore Scotland and feel like you’re going to Hogwarts, escaping the Highlands with 007, or travelling back in time with Claire Randall.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>


      <section className='bg-light pb-3'>
        <Container className='text-muted mt-5'>
          <h1 style={{fontFamily: 'Open Sans'}} className=' pb-3 pt-5 text-center fw-normal'>The Rabbie's experience</h1>
          <Row className="text-center">
            <Col md={3}>
              <img src="imgs/icon-van.png" alt="icon-van.png" className='my-3' />
              <p>Cool mini-coach for up to 16 passengers</p>
            </Col>
            <Col md={3}>
              <img src="imgs/money-back.png" alt="money-back.png" />
              <p>Special student discounts on all tours</p>
            </Col>
            <Col md={3}>
              <img src="imgs/guaranteed-departures.png" alt="guaranteed-departures.png" />
              <p>You can choose the accommodation and attractions that suit your budget</p>
            </Col>
            <Col md={3}>
              <img src="imgs/leaf.png" alt="leaf.png" />
              <p>Internationally recognised for our award winning experiences</p>
            </Col>
          </Row>
        </Container>
      </section>

        <hr className='w-25 hr m-auto my-5' />

        <section className='mt-5'>
            <Container>
                <Row>
                    <Col md={3}>
                        Elastic Search Area    
                    </Col>    
                    <Col md={9}>
                        <Row className='text-muted my-3'>
                            <Col md={4}>
                                <img src="imgs/slider/img5.jpg" className="card-img-top img-fluid" alt="..." />
                            </Col>
                            <Col md={4} className='mt-4'>
                                <div>
                                    <h5 className="card-title my-2">The Isle of Skye - 3 day tour</h5>
                                    <p className="card-text">Roam the breathtaking Isle of Skye and its beautifully unique landscape on this tour from Edinburgh.</p>
                                    <small>Departing from: <strong>EDINBURGH</strong></small>
                                </div>
                            </Col>
                            <Col md={4} className='mt-4'>
                                <small>
                                    <AiOutlineCheck className='text-success mr-2' />
                                    16 seat mini-coaches
                                </small> <br />
                                <small>
                                    <AiOutlineCheck className='text-success mr-2' />
                                    Time off the bus to explore
                                </small> <br />
                                <small>
                                    <AiOutlineCheck className='text-success mr-2' />
                                    Stories from a friendly guide
                                </small> <br />
                                <button className='btn btn-outline-success my-2 w-100'>Find out more</button>
                            </Col>
                        </Row>
                        <Row className='text-muted'>
                            <Col md={4}>
                                <img src="imgs/slider/img5.jpg" className="card-img-top img-fluid" alt="..." />
                            </Col>
                            <Col md={4} className='mt-3'>
                                <div>
                                    <h5 className="card-title my-2">The Isle of Skye - 3 day tour</h5>
                                    <p className="card-text">Roam the breathtaking Isle of Skye and its beautifully unique landscape on this tour from Edinburgh.</p>
                                    <small>Departing from: <strong>EDINBURGH</strong></small>
                                </div>
                            </Col>
                            <Col md={4} className='mt-4'>
                                <small>
                                    <AiOutlineCheck className='text-success mr-2' />
                                    16 seat mini-coaches
                                </small> <br />
                                <small>
                                    <AiOutlineCheck className='text-success mr-2' />
                                    Time off the bus to explore
                                </small> <br />
                                <small>
                                    <AiOutlineCheck className='text-success mr-2' />
                                    Stories from a friendly guide
                                </small> <br />
                                <button className='btn btn-outline-success my-2 w-100'>Find out more</button>
                            </Col>
                        </Row>
                        <hr className='w-25 hr m-auto my-5' />
                        <button className="btn btn-outline-success col-sm-3 mx-auto my-4" onClick={loadMore}>
                            Load More Tours
                            <BiDownArrowAlt className="ml-1" />
                        </button>
                    </Col>
                </Row>    
            </Container>        
        </section>

    </div>
  )
}

export default StudentTours
