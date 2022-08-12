import { useState } from 'react'
import TopNavBar from './TopNav'
import { Link } from 'react-router-dom'
import {AiOutlinePhone} from 'react-icons/ai'


const Navbar = () => {

  const [alertShow, setAlertShow] = useState(true);
  const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
      if(window.scrollY >= 50){
        setNavbar(true);
      }else{
        setNavbar(false);
      }
    }

    window.addEventListener('scroll', changeBackground)

  return (

    <div>
      <TopNavBar show={alertShow} setShow={setAlertShow}/>

      <nav 
      className={navbar ? 
        'navbar fixed-top navbar-expand-lg navbar-white p-md-2 mb-3 scrollBg' 
      : 'navbar fixed-top navbar-expand-lg navbar-light bg-light p-md-2 mb-3'}
        style={ alertShow ? { marginTop:'45px'} : {marginTop : '0px'}} >
        <div className="container">
          <Link className="navbar-brand m-auto" to="/">
            <img
              src="logo.png"
              alt="Nav_logo.png"
              className="img-fluid"
              style={{ width: "65px" }}
            />
          </Link>
          <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="btn btn-outline-success">Menu</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <Link className="nav-link ms-sm-1" to="#">
                  Destinations
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link ms-sm-1" to="#">
                  Ways to travel
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link ms-sm-1" to="#">
                  Deals
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link ms-sm-1" to="#">
                  Purpose
                </Link>
              </li>

            </ul>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to="#">About us</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="#">Private Tours</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="#"><AiOutlinePhone /></Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    </div>
  )
}

export default Navbar
