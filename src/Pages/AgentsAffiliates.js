import React from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const AgentsAffiliates = () => {
  return (
    <div>
        <section className='bg-checkout-img'>
        <code>
          <h1 className='text-white text-center' style={{paddingTop: '200px', textShadow: '1px 2px #000'}}>
            Agents & Affiliates
          </h1>
        </code>             
      </section>
        
        <section className='mt-5 mb-5'>
            <Container>
                <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-5 text-center text-muted'>Working Together</h1>
                <h5>Rabbie's Agents Online</h5>
                <p>If you would like to work with us on an ongoing basis and establish yourself as an online booking agent please contact <a href="#" className='text-success h6'>agent@rabbies.com</a>. <br /> Existing online booking agents Login Here</p>

                <h5>Travel Trade Resources</h5>
                <p>Access Rabbie's tour photo library and tour itineraries and tariffs. Login Here or apply to use these resources by contacting <a href="#" className='text-success h6'>agent@rabbies.com</a>.</p>

                <h5>Affiliate Programme</h5>
                <p>Join our affiliate programme and earn 5% commission for every confirmed Rabbie’s tour booking generated from your website.</p>
                <p>For more information, please subscribe via our affiliate network partner, <a href="https://www.awin.com/gb" className='text-success'>AWIN</a>. If you’re already a member of AWIN you can add us to your advertiser portfolio. If you’re not a member, you’ll be asked to register to start selling and earning commission.</p>
                <p>Join today at the <a href="https://www.awin.com/gb" className='text-success'>AWIN website</a>.</p>
            </Container>
        </section>
    </div>
  )
}

export default AgentsAffiliates