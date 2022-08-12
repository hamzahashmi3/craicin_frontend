import {useState} from 'react'

import {Link} from 'react-router-dom'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import {Container, Row, Col} from 'react-bootstrap'

import {FaInstagram} from 'react-icons/fa'
import {AiOutlineArrowRight, AiOutlineSearch} from 'react-icons/ai'
import {BiDownArrowAlt} from 'react-icons/bi'

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
          <h1 className='text-white text-center' style={{paddingTop: '235px', textShadow: '1px 2px #000'}}>
            Go beyond the {text} 
            <Cursor cursorStyle="_" />
          </h1>
        </code>
        
        <div className="col-md-6 m-auto mt-5 pt-2">
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
          <h1 style={{fontFamily: 'Open Sans'}} className='display-4 py-3 text-center'>Award-Winning Tours</h1>
          <Row className="text-center">
            <Col md={3}>
              <img src="imgs/icon-van.png" alt="icon-van.png" className='my-3' />
              <p>Travel in small groups or <a href="#" className='text-success'>private tours</a></p>
            </Col>
            <Col md={3}>
              <img src="imgs/money-back.png" alt="money-back.png" />
              <p>You'll have a guaranteed experience or your money back</p>
            </Col>
            <Col md={3}>
              <img src="imgs/guaranteed-departures.png" alt="guaranteed-departures.png" />
              <p>Guaranteed departures: We'll never cancel your tour because of minimum numbers</p>
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
        <Container className='text-muted ms-auto'>
          <h1 style={{fontFamily: 'Open Sans'}} className='display-5 py-3 text-center'>Where would you like to go?</h1>
          <Row className='mb-4 m-auto'>
            <div className='col-md-2'></div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="imgs/tours/countries_widget2.jpg" className='img-fluid images_shadow' alt="countries_widget2.jpg" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="imgs/tours/countries_widget4.jpg" className='img-fluid images_shadow' alt="countries_widget4.jpg" />
              </Link>
            </div>
            <div className='col-md-2'></div>
          </Row>

          <Row className='mb-4 m-auto'>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="imgs/tours/countries_widget6.jpg" className='img-fluid images_shadow' alt="countries_widget6.jpg" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="imgs/tours/countries_widget8.jpg" className='img-fluid images_shadow' alt="countries_widget8.jpg" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to='/'>
                <img src="imgs/tours/countries_widget10.jpg" className='img-fluid images_shadow' alt="countries_widget10.jpg" />
              </Link>
            </div>
          </Row>
          <Row className='m-auto'>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="imgs/tours/countries_widget14.jpg" className='img-fluid images_shadow' alt="countries_widget12.jpg" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="imgs/tours/countries_widget16.jpg" className='img-fluid images_shadow' alt="countries_widget14.jpg" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="imgs/tours/countries_widget18.jpg" className='img-fluid images_shadow' alt="countries_widget16.jpg" />
              </Link>
            </div>
            <button className='btn btn-outline-success rounded-pill col-md-4 my-4 m-auto'>Explore all our tours</button>
          </Row>
          <hr className='w-25 hr m-auto mt-4' />
        </Container>
      </section>


      <section>
        <Container className='text-muted'>
          <h1 style={{fontFamily: 'Open Sans'}} className='display-5 py-3 text-center'>Explore more</h1>
          <Row className='m-auto'>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="imgs/tours/countries_widget14.jpg" className='img-fluid images_shadow' alt="countries_widget12.jpg" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="imgs/tours/Covid_homepage_dark.png" className='img-fluid images_shadow' alt="countries_widget14.jpg" />
              </Link>
            </div>
            <div className='col-md-4 mb-2'>
              <Link to="/">
                <img src="imgs/tours/countries_widget18.jpg" className='img-fluid images_shadow' alt="countries_widget16.jpg" />
              </Link>
            </div>
          </Row>
        </Container>
      </section>


      <section>
        <Container className='my-4'>
          <h1 style={{fontFamily: 'Open Sans'}} className='display-5 mt-5 mb-3 text-center'>#rabbiestours</h1>
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
