import React, {useState} from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'


const PrivacyCookies = () => {

    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <section className='bg-checkout-img'>
        <code>
          <h1 className='text-white text-center' style={{paddingTop: '200px', textShadow: '1px 2px #000'}}>
            Privacy & Cookies
          </h1>
        </code>             
      </section>

    
      <section className='mt-5'>
            <Container>
                <Box sx={{ width: '100%', typography: 'body1'}}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Our Privacy Policy" value="1" />
                            <Tab label="Our Cookie Policy" value="2" />
                        </TabList>
                        </Box>
                        <TabPanel value="1" className='text-muted'>
                            <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-3 text-muted'>Craicin Privacy Policy and Data Protection</h1>
                            <h4>We promise to respect your privacy and protect your personal information</h4>
                            <ul>
                                <li>We will be open and honest about the information we are collecting and what we will do with it.</li>
                                <li>We will use the information you give us for the purposes described in our Privacy Policy, which include providing you with services you have requested and enhancing your experience with Rabbie’s.</li>
                                <li>If you would like to stop receiving marketing from us, you can unsubscribe at any time by emailing us at <a href="#" className='text-success'>marketing@Craicin.com</a>. We will, of course, continue to send essential information relating to a tour or service you have purchased to keep you informed about your booking.</li>
                                <li>We promise to collect, store and share your data safely and securely.</li>
                            </ul>
                            <p>You can access our full Privacy Policy <Link to="/privacypolicy" className='text-success'>here</Link> to help you understand how we use your personal information. In it, we explain in more detail the types of personal information we collect, how we collect it, what we may use it for and who we may share it with.</p>

                            <h4>We use cookies on our website</h4>
                            <p>Cookies are tiny files that are downloaded to your device when you visit a website. These cookies are recognized by the originating website on each visit thereafter, or by another website that recognises the cookie.</p>
                            <h5>None of our cookies contain any of your personally identifiable information.</h5>
                            <p>The cookies we use enable us to remember your preferences, let you navigate between pages efficiently and ensure that any adverts you see online are relevant to you and your interests. They also allow a website to recognise which device you are using and to continually improve your website experience. Cookies play an important role. Without them, using the web would be a much more frustrating experience.</p>
                            <p>If you’d like to know more, read our full Cookie Policy <Link to="#" className='text-success'>here</Link>.</p>
                            <p>If you have any questions regarding our Privacy or Cookie policy, you can send us <Link className='text-success' to="#">an email</Link>  or a letter to our Privacy Manager, Rabbie’s Tours, 6 Waterloo Place, Edinburgh, EH1 3EG, UK.</p>
                            
                            <h5><Link className='text-success' to="#">Our privacy policy</Link></h5>
                            <h5><Link className='text-success' to="#">Our cookie policy</Link></h5>

                        </TabPanel>
                        <TabPanel value="2" className='text-muted'>
                            <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-3 text-muted'>Cookie Policy</h1>
                            <p>This is the Cookie Policy for Craicin, accessible from <Link to="/" className='text-success'>www.Craicin.com</Link></p>

                            <p>If you have any questions regarding our Privacy or Cookie policy, you can send <Link to="/contact" className='text-success'>an email</Link> or a letter to our Privacy Manager, Rabbie’s Tours, 6 Waterloo Place, Edinburgh, EH1 3EG, UK.</p>

                            <h4>What are cookies?</h4>
                            <p>Cookies are tiny files that are downloaded to your device when you visit a website. These cookies are recognized by the originating website on each visit thereafter, or by another website that recognises the cookie. Cookies are useful in many ways – they remember your preferences, let you navigate between pages efficiently and they ensure that any adverts you see online are relevant to you and your interests. They also allow a website to recognise which device you are using and to continually improve your website experience. Cookies play an important role. Without them, using the web would be a much more frustrating experience. It is important to note that none of our cookies contain any of your personally identifiable information.</p>
                            <p>This page describes what information cookies gather, how we use that data and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however this may downgrade or 'break' certain elements of the website functionality.</p>
                            <p>For more general information, see the ICO article on cookies <a href="https://ico.org.uk/for-the-public/online/cookies/" className='text-success'>https://ico.org.uk/your-data-matters/online/cookies/</a></p>

                            <h4>Why do we use cookies?</h4>
                            <p>Rabbie’s uses cookies for several reasons, such as:</p>
                            <ul>
                                <li>To remember information about you, so you don’t have to keep giving it to us</li>
                                <li>To remember your preferences, even on different devices (e.g. desktop computer, tablet and smartphone)</li>
                                <li>Help us understand how people are using our website, so we can make your experience better.</li>
                                <li>To find out if our emails have been read and if you find them useful.</li>
                                <li>To remind you of some Rabbie’s products that you have looked at previously. In case it is still of interest to you.</li>
                            </ul>   

                            <h4>What type of cookies do we use?</h4>
                            <p>There are four categories of cookies: Strictly Necessary, Performance, Functionality, and Targeting. Rabbie’s uses all four categories of cookies. Find out more about each cookie category below.</p>
                            <p><strong>1. Strictly Necessary Cookies.</strong> These cookies are essential: they enable you to move around the website and use its features, such as our favourites and shopping basket tools.</p>
                            <p><strong>2. Performance Cookies.</strong> These cookies collect information about how you have used the website, we use this information to continually look to improve the website experience for our visitors.</p>
                            <p><strong>3. Functionality Cookies. </strong> These cookies allow us to show the website in the language you’ve previously used as a preference.</p>
                            <p><strong>4. Targeting Cookies. </strong> Rabbie’s may use these types of cookies to deliver advertising that is relevant to your interests. These cookies can remember that your device has visited a website. This information may be shared with organisations outside Rabbie’s, such as advertising networks to deliver our advertising, and to help measure the effectiveness of an advertising campaign.</p>

                            <h4>How long will cookies stay on my device?</h4>
                            <p>The length of time a cookie will stay on your computer or mobile device depends on whether it is a ‘persistent’ or ‘session’ cookie. Session cookies will only stay on your device until you stop browsing a website. Persistent cookies stay on your computer or mobile device until they expire or are deleted.</p>
                            
                            <h4>First and third-party cookies</h4>
                            <p>First-party cookies are cookies that belong to Rabbie’s, third-party cookies are cookies that another party places on your device through our website. Third-party cookies may be placed on your device by someone providing a service for Rabbie’s, for example to help us understand how our website is being used. Third-party cookies may also be placed on your device so that we can use them to advertise our products and services to you elsewhere on the Internet.</p>

                            <ul>
                                <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
                                <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
                                <li>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</li>
                                <li>As we sell products it's important for us to understand statistics about how many of the visitors to our site make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.</li>
                                <li>We use a cookie which allows us to remind you once you leave the Rabbie’s website, of products you showed an interest in. This enables us to show relevant adverts to you on other websites.</li>
                                <li>Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.</li>
                                <li>We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including; Facebook, Instagram, Twitter, Pinterest, and YouTube will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</li>
                            </ul>

                            <h4>Disabling Cookies</h4>
                            <ul>
                                <li>You can prevent the setting of cookies by Craicin.com by using our cookie management tool when you first visit our website or by clicking the button below.</li>
                                <li>There are also several ways you can manage cookies using your web browser, you can.</li>
                                <li>Delete all cookies.</li>
                                <li>Block all cookies.</li>
                                <li>Allow all cookies.</li>
                                <li>Block third-party cookies.</li>
                                <li>Clear all cookies when you close the browser.</li>
                                <li>Open a 'private browsing' / 'incognito' session, which allows you to browse the internet without storing local data.</li>
                                <li>Install add-ons and plug-ins to extend browser functionality.</li>
                                <li>For more details on how to manage cookies on the various web browsers, see About Cookies.</li>
                            </ul>

                            <h4>More Information</h4>
                            <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
                            <p>However, if you are still looking for more information, then you can contact us through one of the following contact methods:</p>
                            <ul>
                                <li>By Phone: 0131 226 3133</li>
                                <li><Link to="/contact" className='text-success'>By email</Link></li>
                                <li>By Mail: Privacy Manager, Rabbie’s Trail Burners, 6 Waterloo Place, Edinburgh, EH1 3EG, UK.</li>
                            </ul>
                            <button className='btn btn-outline-success my-3'>Renew or change your cookie consent</button>
                        </TabPanel> 
                    </TabContext>
                </Box>
            </Container>
        </section>

    </div>
  )
}

export default PrivacyCookies