import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row} from 'react-bootstrap'
import {FaFacebookF, FaTwitter, FaPinterest} from 'react-icons/fa'
import {ImInstagram, ImYoutube2, ImLocation2} from 'react-icons/im'


const Footer = () => {

  return (
    <div>

        <footer className="text-center" style={{background:"#7EB09B"}}>
          {/* Footers Main menu */}

          <Container>
            <Row>
              <div className='d-flex'>
                <Link to="/">
                  <img src="logo.png" alt="imgs/logo.png" className='img-fluid' style={{width: "125px"}} />
                </Link>
                <span className="mt-4 pt-4 text-white justify-content-center"> &copy; copyright 2022 Craicin.Inc.</span>
                <Link class="nav-link text-white ml-3 mt-5" to="/privacypolicy">Privacy Policy</Link>
              </div>

              <ul className="nav">
                
                <div className="d-flex ms-auto me-5">
                  <li className="nav-item h1 me-3"><Link to="https://www.facebook.com/" target="_blank" className="text-white" rel="noreferrer"><FaFacebookF /></Link></li>
                  <li className="nav-item h1 me-3"><Link to="https://www.instagram.com/" target="_blank" className="text-white" rel="noreferrer"><ImInstagram /></Link></li>
                  <li className="nav-item h1 me-3"><Link to="https://www.twitter.com/" target="_blank" className="text-white" rel="noreferrer"><FaTwitter /></Link></li>
                  <li className="nav-item h1 me-3"><Link to="https://www.pinterest.com/" target="_blank" className="text-white" rel="noreferrer"><FaPinterest /></Link></li>
                  <li className="nav-item h1"><Link to="https://www.youtube.com/" target="_blank" className="text-white" rel="noreferrer"><ImYoutube2 /></Link></li>
                </div>
              </ul>

              <ul class="nav mb-3">
                <li class="nav-item">
                  <Link class="nav-link text-white active" to="/faq">Faqs</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/termsconditions">Booking Terms</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/termsconditions">Terms of Use</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/">About Kensington Tours</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/">Media Center</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/">Careers</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/contact">Contact</Link>
                </li>
              </ul>
            </Row>
          </Container>

      </footer>
    </div>
  )
}

export default Footer
