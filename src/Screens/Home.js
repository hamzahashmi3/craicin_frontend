import {useState} from 'react'

import {Link} from 'react-router-dom'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import {Container, Row, Col} from 'react-bootstrap'

import {FaInstagram} from 'react-icons/fa'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BiDownArrowAlt} from 'react-icons/bi'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import {imageGallery} from '../data'


const Home = () => {
  
  const [show, setShow] = useState(9)

  const loadMore = () => {
    setShow((prevValue) => prevValue + 3)
  }

  const {text} = useTypewriter({
    words: [' guidebooks', ' Imaginations', ' Limits', ' Comfort Level'],
    loop: 0,
    delaySpeed: 1000,
    typeSpeed: 70,
    deleteSpeed: 50,
    onLoopDone: () => console.log(`TypeWriter loops.`),
  })

  // Masonry instagram Image Gallery
  const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));


  return (
    <div className='bg-light'>

      <header className='bg-img'>
        <code>
          <h1 className='text-white text-center  mt-5 typewriter' style={{paddingTop: '100px',textShadow: '1px 2px #000'}}>
            Go beyond the {text} 
            <Cursor cursorStyle="_" />
          </h1>
        </code>
        
        <div className="col-md-6 m-auto mt-5 pt-5 search_header">
          <small className="form-text text-white">Search our small group tours.</small>
          <div className="input-group mb-2">
            <input type="text" className="form-control py-2" style={{width: "35%"}} placeholder="Search..." />
            <input type="date" className="mx-2 form-control" />
            <button className='btn btn-danger'>Search <AiOutlineArrowRight /></button>
          </div>
        </div>

      </header>


      <section>
        <Container className='bg-light text-muted mt-5'>
          <h2 style={{fontFamily: 'Open Sans'}} className=' py-3 text-center'>4 REASONS TO CHOOSE CRAICIN</h2>
          <Row className="text-center">
            <Col md={3}>
              <img src="imgs/money-back.png" alt="icon-van.png" className='' />
              <p>Travel in small groups or <a href="#" className='text-success'>private tours</a></p>
            </Col>
            <Col md={3}>
              <img src="imgs/money-back.png" alt="money-back.png" />
              <p>You'll have a guaranteed experience or your money back</p>
            </Col>
            <Col md={3}>
              <img src="imgs/guaranteed-departures.png" alt="guaranteed-departures.png" />
              <p>Guaranteed departures: you book, you go</p>
            </Col>
            <Col md={3}>
              <img src="imgs/leaf.png" alt="leaf.png" />
              <p>Our eco-friendly tours support local communities</p>
            </Col>
          </Row>
          <hr className='w-25 hr m-auto mt-4' />
          <Col md={8} className="text-center m-auto mt-5">
            <p>Get your suitcases, cameras, and thermos flasks ready, because it’s time to combine little-known legends with classic destinations on our friendly mini-coach tours of the UK & Europe.</p>
            <p>Each trip comes with a driver-guide who knows the stories, sights, and secrets of the areas you travel through; every itinerary is tested by travel-loving locals; and you get the chance to support the communities you visit.</p>
            <p>So, what are you waiting for? Get planning, get packing, and go beyond the guidebooks.</p>
          </Col>
        </Container>
      </section>


      <section>
        <Container className='ms-auto'>
          <h1 style={{fontFamily: 'Open Sans'}} className='display-5 py-3 text-center'>Where would you like to go?</h1>
          <Row className='mb-4 m-auto'>
          <Col md={3}>
              <Link to="/tourdetails">
                <div className="card border-0 bg-light">
                  <img className="card-img-top" src="imgs/home/iceland.jpg" loading='lazy' style={{height: "275px"}}  alt="IceLand" />
                  <div className="card-body">
                      <p className="card-title fw-bold">
                        Ice Land
                      </p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={3}>
              <div className="card border-0 bg-light">
                <img className="card-img-top" src="imgs/home/argentine.jpg" loading='lazy' style={{height: "275px"}} alt="Argentina" />
                <div className="card-body">
                  <p className="card-title fw-bold">
                    Argentina
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card border-0 bg-light">
                <img className="card-img-top" src="imgs/home/australia.jpg" loading='lazy' style={{height: "275px"}} alt="Australia" />
                <div className="card-body">
                  <p className="card-title fw-bold">
                    Australia
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card border-0 bg-light">
                <img className="card-img-top" src="imgs/home/mount_nepal.jpg" loading='lazy' style={{height: "275px"}}  alt="Nepal_mountain" />
                <div className="card-body">
                  <p className="card-title fw-bold">
                    Nepal
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card border-0 bg-light">
                <img className="card-img-top" src="imgs/home/India_taj-mahal.jpg" loading='lazy' style={{height: "275px"}}  alt="" />
                <div className="card-body">
                  <p className="card-title fw-bold">
                    India
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card border-0 bg-light">
                <img className="card-img-top" src="imgs/home/italy.jpg" loading='lazy' style={{height: "275px"}} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-title fw-bold">
                    Italy
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card border-0 bg-light">
                <img className="card-img-top" src="imgs/home/sri_lanka.jpeg" loading='lazy' style={{height: "275px"}} alt="Sri Lanka" />
                <div className="card-body">
                  <p className="card-title fw-bold">
                    Sri Lanka
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card bg-light border-0">
                <img className="card-img-top" src="imgs/home/tanzania_jungle.jpg" loading='lazy' style={{height: "275px"}}  alt="Tanzania_Jungle" />
                <div className="card-body">
                    <p className="card-title fw-bold">
                      Tanzania
                    </p>
                </div>
              </div>
            </Col>
          </Row>
          <hr className='w-25 hr m-auto mt-4' />
        </Container>
      </section>


      <section className='my-5'>
        <Container>
          <h2 className='text-center fw-normal'>EXPLORE MORE</h2>
          <p className='text-center'>The Insight Difference</p>
          <Row>
            <Col md={3}>
              <div className="card border-0">
                <img className="card-img-top" src="imgs/home/argentine.jpg" style={{height: "245px"}}  alt="Card image cap" />
                <div className="card-body bg-primary">
                  <p className="card-title fw-normal text-white m-0 p-0">
                    <small>UNIQUE INSIGHT EXPERIENCES</small> 
                    <span className='float-right'>
                      <MdOutlineArrowForwardIos />
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card border-0">
                <img className="card-img-top" src="imgs/home/australia.jpg" style={{height: "245px"}} alt="Card image cap" />
                <div className="card-body bg-primary">
                    <p className="card-title fw-normal text-white p-0 m-0">
                      <small>DELICIOUS AUTHENTIC DINING</small>
                      <span className='float-right'>
                        <MdOutlineArrowForwardIos />
                      </span>
                    </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card border-0">
                <img className="card-img-top" src="imgs/home/italy.jpg" style={{height: "245px"}} alt="Card image cap" />
                <div className="card-body bg-primary">
                    <p className="card-title fw-normal text-white p-0 m-0">
                      WE MAKE TRAVEL MATTER
                      <span className='float-right'>
                        <MdOutlineArrowForwardIos />
                      </span>
                    </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card border-0">
                <img className="card-img-top" src="imgs/home/sri_lanka.jpeg" style={{height: "245px"}}  alt="Card image cap" />
                <div className="card-body bg-primary">
                    <p className="card-title fw-normal text-white p-0 m-0">
                      STAY IN STYLE
                      <span className='float-right'>
                        <MdOutlineArrowForwardIos />
                      </span>
                    </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container className='my-4'>
          <h1 style={{fontFamily: 'Open Sans'}} className='display-5 mt-5 mb-3 text-center'>#Craicintours</h1>
          <Row>
            <Box sx={{ width: 1200, minHeight: 829 }} className='m-auto'>
              <Masonry columns={3} spacing={2}>
                {imageGallery.slice(0, show).map((item, index) => (
                  <div key={index}>
                    <a href="https://www.instagram.com/" className='text-success' target="_blank">
                      <Label><FaInstagram className='text-success' /></Label>
                      <img
                        src={`${item.img}?w=162&auto=format`}
                        srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        className='images_shadow'
                        style={{
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 4,
                          display: 'block',
                          width: '100%',
                        }}
                      />
                    </a>
                  </div>
                ))}
              </Masonry>
            </Box>
              <button className="btn btn-outline-success col-sm-3 m-auto" onClick={loadMore}>
                See More
                <BiDownArrowAlt className="ml-1" />
              </button>
          </Row>
        </Container>
      </section>

      
      <Container fluid>
        <h1 style={{fontFamily: 'Open Sans'}} className='display-5 mt-5 mb-3 text-muted text-center'>Our Awards</h1>
        <Row className='text-center home-award-bg'>
          <Col md={1}></Col>
          <Col md={2} className='py-5 my-3'>
            <img src="imgs/awards/BTA_2018.png" alt="BTA Award 2018" className='img-fluid' />
          </Col>
          <Col md={2} className='py-5 my-3'>
            <img src="imgs/awards/TC_2021_LL_TRANSPARENT_BG_RGB-01.png" alt="LL_TRANSPARENT_BG_RGB" className='img-fluid' />
          </Col>
          <Col md={2} className='py-5 my-3'>
            <img src="imgs/awards/awards-british-travel-awards-2019.png" alt="BTA Award 2019" className='img-fluid' />
          </Col>
          <Col md={2} className='py-5 my-3'>
            <img src="imgs/awards/grn.png" alt="GRN Awards" className='img-fluid' />
          </Col>
          <Col md={2} className='py-5 my-3'>
            <img src="imgs/awards/awards_5stars.png" alt="5 start award" className='img-fluid' />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>


      <section>
        <div className='home_newsletter_bg'>
          <Row>
            <Col md={4} className="m-auto my-5 py-3">
              <h4 className='text-white text-center'>Stay Up to date with our newsletter.</h4>
              <div className='input-group'>
                <input type="email" required className='form-control' placeholder='Enter Your Email' />
                <button className='btn btn-success btn-sm ml-2'>Subscribe</button>
              </div>
            </Col>
          </Row>
        </div>
      </section>

    </div>
  )
}

export default Home
