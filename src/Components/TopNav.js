import {Alert} from 'react-bootstrap'
import {TiDelete} from 'react-icons/ti'


const TopNav = ({show, setShow}) => {

  return (
    <div id="top_nav">
      <Alert show={show} variant="danger" className={show ? 'text-dark text-center m-0 h6 fw-normal': 'm-0'}>
        We are open. Find out about our
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?adgroupsurvey={adgroupsurvey}&gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2HNcazaGyRy9YSGNPHZ4s7BWD_A-GztsyELvrxzgqkGrePwE6rwzbAaAgouEALw_wcB" target="_blank" rel="noreferrer" className='ms-2 me-3'>
          Covid-19 Information here.
        </a>        
        <i>close <TiDelete onClick={() => setShow(false)} /></i>
      </Alert>
    </div>
  )
}

export default TopNav
