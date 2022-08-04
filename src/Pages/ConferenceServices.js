import React, {useState} from 'react'
import {Container} from 'react-bootstrap'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'


const ConferenceServices = () => {

    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>

        <section className='bg-checkout-img my-0 py-0'>
            <code>
            <h1 className='text-white text-center pb-5' style={{paddingTop: '150px', textShadow: '1px 2px #000'}}>
                Services
            </h1>
            </code>             
        </section>


        <section className='mt-5'>
            <Container>
                <Box sx={{ width: '100%', typography: 'body1'}}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Conference Services" value="1" />
                            <Tab label="DMC Services" value="2" />
                            <Tab label="Burns Room" value="3" />
                            <Tab label="Transport Services" value="4" />
                        </TabList>
                        </Box>
                        <TabPanel value="1" className='text-muted'>
                            <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-3 text-muted'>Conference services</h1>
                            <p>We are experts in arranging and organising environmentally aware, socially responsible tour programmes and transport logistics for conferences of any size. We promise to get your customers closer to the people, places, history and legends, delivering unique experiences to last a lifetime. If you have chosen Scotland as the venue for your conference and you are looking for a highly professional organisation to handle some of the ground logistics for that event please contact our team for your requirements.</p>
                            <h3>What can Rabbie’s help you with?</h3>
                            <p>Ground logistics including:</p>
                            <ul>
                                <li>Meet and greet services and transfers (airport, rail, evenings)</li>
                                <li>Tour booking and information desk during conference</li>
                                <li>Familiarisation tours for conference organising team</li>
                                <li>Private bespoke half/full day touring options</li>
                            </ul>

                            <p>Programme of scheduled 1-17 day guaranteed departure small group tours including:</p>
                            <ul>
                                <li>8 different one day tours from Edinburgh</li>
                                <li>4 different one day tours from Glasgow</li>
                                <li>20+ different extended tour options</li>
                            </ul>

                            <p>Added Value Services including:</p>
                            <ul>
                                <li>Attraction entrances – ie Edinburgh Castle, Royal Yacht Britannia</li>
                                <li>Guided walking /ghost tours</li>
                                <li>Traditional Scottish Evening</li>
                                <li>Specialist Whisky Tastings</li>
                                <li>Hop-on/Hop-off city sightseeing bus tour tickets</li>
                                <li>Burns Room, a private function/meeting room for hosting delegates</li>
                            </ul>

                            <h3>Product Examples</h3>
                            <h4>Edinburgh Afternoon Tea</h4>
                            <p>Tea consumption increased dramatically during the early nineteenth century and it is around this time that Anna, 7th Duchess of Bedford, is said to have complained of having that ‘sinking feeling’ during the late afternoon. The solution for the Duchess was a pot of tea and a light snack, taken privately in her boudoir during the afternoon. Later friends were invited to join her and this summer practice proved so popular that the Duchess sent cards to her friends asking them to join her for ‘Afternoon Tea’. Other society hostesses quickly picked up on the idea and the practice became respectable enough to move it into the drawing room. Before long fashionable society was sipping tea and nibbling sandwiches in the middle of the afternoon.</p>

                            <h4>Walking Tours of Edinburgh</h4>
                            <h6 className='text-dark' style={{fontStyle: 'italic'}}>Ghost & Ghouls Tour</h6>
                            <p>Centuries of murder, torture, hangings and plague have left a haunting legacy on the city of Edinburgh. This tour will take clients on a journey around the eerie old buildings and narrow closes of the Old Town. Let the cloaked guide lead you down into the Vaults beneath the South Bridge and hear stories of those who once occupied these dark chambers and perhaps still do… Duration 1hr 15 minutes.</p>
                            <q style={{fontStyle: 'italic'}}>Secrets of the Royal Mile</q>
                            <p>The best way to explore Edinburgh is to follow your feet. Where the buses can’t take you, and the guide books don’t show you is where our city’s stories lie – the closes, wynds, courtyards and homes of Old Edinburgh. We’ll visit the sites that are tucked away to see the secrets and tell the tales. We’ll help unlock our fascinating past – the culture, crime, politics and people of Scotland’s capital. Duration 1hr 30 minutes.</p>

                            <h3>Why choose Rabbie’s for your conference?</h3>
                            <ul>
                                <li>Experienced Sales Team and dedicated Conference Planners</li>
                                <li>Fulfill your Corporate Social Responsibility (we are recognised as leaders in Sustainable Tourism)</li>
                                <li>Competitive NET rates or comissionable products to suit you</li>
                                <li>Guaranteed scheduled departures – no minimum numbers required</li>
                                <li>
                                    IT solutions such as:
                                    <ul>
                                        <li>White Label</li>
                                        <li>Exclusive conference promo code</li>
                                    </ul>
                                </li>
                            </ul>

                            <h3>IT Solutions</h3>
                            <p>We provide IT solutions for conferences as well as in-house technical support for our Burns Room.</p>
                            <p>White Label</p>
                            <p>Rabbie's can offer the option of a white page (aka White Label, Mash-Up) version of our scheduled small group tours booking engine, providing your website with a commission based revenue stream for your conference.</p>
                            <p>The white page system has all the booking functionality of our main site, including real-time availability search for all scheduled tours, but is styled in a clear, uncluttered, muted fashion to fit in with the look and feel of your website.</p>
                            <p>We offer commission on referred booking, this is paid in GBP (£) by bank transfer, or for international payments we use a PayPal Account to pay you in the currency and country of your choice, making it simple and hassle free for you!</p>
                            <p>Promo Code</p>
                            <p>We can create a promo code exclusively for your conference. The promo code can be advertised on your conference website and sent to delegates as part of their registration paperwork. The promo code can be used by delegates to make direct bookings with Rabbie’s allowing them the freedom to choose tours that fit with their schedule. We offer a profit share promo code or full discount to delegates as an added value product.</p>

                        </TabPanel>
                        <TabPanel value="2" className='text-muted'>
                            <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-3 text-muted'>DMC services</h1>
                            <p>We provide the professional travel trade with innovative travel experiences for groups and individuals from ad hoc groups and tour series, to city packages and self-drive tours. Our experienced sales team will assist with all enquiries large or small, applying their excellent local knowledge, focussing on excellent customer service and a high quality of delivery. Let us help you create an enriching and memorable experience for your guests that will last a lifetime.</p>

                            <p>We offer:</p>
                            <ul>
                                <li>Dedicated Travel Trade Services</li>
                                <li>Group and Individual travel packages</li>
                                <li>Special interest and themed tours</li>
                                <li>City breaks including Royal Military Tattoo packages</li>
                                <li>Dedicated Rabbie’s contact from the planning stages to the clients’ departure</li>
                                <li>Travel planning and transport logistics</li>
                                <li>Bespoke itineraries to suit your requirements</li>
                                <li>Specially selected activities and entertainments from quality local suppliers</li>
                            </ul>
                            
                            <h3>The Royal Edinburgh Military Tattoo Package</h3>
                            <p>Since 1950 the Edinburgh Military Tattoo has been the largest gathering of military musicians in the UK. Held during the International Festival, it is staged against the stunning backdrop of Edinburgh Castle. The production features a range of superb international performers with the highlight of the evening once again the spine-tingling sights and sounds of the world famous Massed Pipes and Drums, the finest display anyone can witness anywhere in the world.</p>
                            <p>Build your own packages or feature our off the shelf package, to include:</p>
                            <ul>
                                <li>2-3 nights' accommodation at a 3-5* Edinburgh hotel including breakfast;</li>
                                <li>Ticket to the Royal Edinburgh Military Tattoo;</li>
                                <li>Lunch and dinner options required;</li>
                                <li>Private Edinburgh City Tour;</li>
                            </ul>

                            <p>"Thank you for offering such a great range of Tattoo packages, the operation was exceptional and impeccable."</p>
                            <p>European Tour Operator</p>
                            <p>Kraftwerke Corporate Tour</p>
                            <p>International Corporate Group visiting suppliers throughout Scotland in addition to sightseeing.</p>

                            <p>Package includes:</p>
                            <ul>
                                <li>Bespoke itinerary;</li>
                                <li>Executive Coach;</li>
                                <li>German speaking guide;</li>
                                <li>3 nights Hotel accommodation with breakfast;</li>
                                <li>Scottish dining experience;</li>
                                <li>Exclusive whisky tour with ‘bottle your own whisky’ experience;</li>
                                <li>Entrance to Eilean Donan Castle;</li>
                            </ul>
                            
                            <p>"The attention to detail and well thought out itinerary was greatly appreciated by our VIP group."</p>
                            <p>Tour Operator</p>

                            <h4>Cruise Loch Lomond, Distillery Tour and Dinner</h4>
                            <p>The guests will be collected from the hotel by executive coach and fully qualified guide. From here we make our way to Loch Lomond. We travel along the banks of the river Clyde on to Scenic Glen Fruin and on to Loch Lomond. At Tarbet we will board a cruiser for a sail on the Loch, which lies in the shadow of Ben Lomond. Loch Lomond, the ‘Queen of Scottish Lakes’ is the largest expanse of inland water on mainland Great Britain, and the Capercaillie offers you a leisurely one & a half hour afternoon cruise to enjoy the serenity of the ‘bonnie banks’. Cruise under the shadow of Ben Lomond, Scotland’s most southerly Munro (3192ft). Enjoy a cup of tea or coffee whilst listening to an informative, live commentary on the history of the feuding clans, pillaging Vikings & see Rob Roy Macgregor’s Prison. From here we continue to Glengoyne Distillery. History records the distillery as 'Burnfoot of Glenguin' in 1836. At this charming distillery guests will be able to see the malting, mashing, fermentation, distilling and maturation process which is involved in making the ‘Water of Life’. You will be greeted on arrival by a piper and a welcome dram before enjoying a full guided tour of the distillery. After the tour you will enjoy a four course dinner with each course paired with a different whisky before being returned to your hotel.</p>
                            
                            <p>Package includes:</p>
                            <ul>
                                <li>Private executive coach;</li>
                                <li>Fully qualified guide;</li>
                                <li>Private cruise experience on Loch Lomond;</li>
                                <li>Piper on arrival at the distillery;</li>
                                <li>Exclusive whisky tour and dinner;</li>
                            </ul>

                            <p>"Our conference delegates loved the tour and the opportunity to network in informal surroundings, thank you so much for organising everything for us."</p>
                            <p>Conference organiser</p>

                            <h4>Odyssey</h4>
                            <p>Scotland has over 700 island scattered around its coastline, each unique with its own character, charm and history. Explore many of these islands in an awe inspiring adventure into the different cultures and traditions of each island. Sample some of the local food and entertainment while delving into the pre historic history and folklore brought to life by our enthusiastic guides.</p>
                            <p>The specialised package was sold by an Australian Tour Operator through their annual brochure and includes:</p>
                            <ul>
                                <li>17 nights Hotel accommodation with breakfast;</li>
                                <li>2 nights cabin accommodation on board the ferry;</li>
                                <li>9 evening meals;</li>
                                <li>Touring by comfortable and modern minibus;</li>
                                <li>Experienced driver guide;</li>
                                <li>Ferries, field trips and entrance fees;</li>
                            </ul>

                            <p>"A fantastic tour of the Scottish isles."</p>
                            <p>Elspeth A. (Scottish Isles 2013) - Odyssey Traveller</p>
                        </TabPanel>
                        <TabPanel value="3" className='text-muted'>
                            <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-3 text-muted'>Burns Room</h1>
                            <p>With a prestigious Edinburgh location at the East-End of Princes Street, 6 Waterloo Place is home to a stunning room available for private hire. Situated on the first floor and with three metre high floor-to-ceiling picture windows, the Burns Room affords outstanding views the full length of Princes Street right to the West-End.</p>
                            <p>We are proud to offer the Burns Room for private hire for corporate meetings, private events and much more. The room can be used for the following events:</p>
                            <ul>
                                <li>Corporate meeting space</li>
                                <li>Staff training</li>
                                <li>Storytelling sessions</li>
                                <li>Whisky, wine and gin tasting</li>
                                <li>Group welcome meeting location</li>
                            </ul>

                            <h4>Venue Details</h4>
                            <p>Media Facilities</p>
                            <p>Multi-functional presentation screen*</p>
                            <p>Laptop</p>
                            <p>Flip charts</p>
                            <p>Stationary pack</p>
                            <p>IT Support on site</p>
                            <p>Additional equipment on request</p>
                            <p>Capacities**</p>
                            <p>Board Room - 12 people</p>
                            <p>Theatre - 22 people</p>
                            <p>Reception - 35 people</p>
                            <p>**Suggested capacities for maximum comfort but not limited to.</p>
                            <p>*Burns Room AV Equipment</p>

                            <p>The Burns Room is fitted with an 80 inch, high definition LCD smart screen. The room is also equipped with a specially configured laptop with WiFi which connects wirelessly to the AV equipment, allowing mirroring of the laptop screen from the meeting table for presentations, showing websites etc. Presentations can be loaded onto the laptop with a USB memory stick.</p>

                            <h4>Facts</h4>
                            <p>Waverley Train Station – 0.1 miles</p>
                            <p>Tram Stops at St Andrew Square/York Place – 0.3 miles</p>
                            <p>Edinburgh Bus Station – 0.3 miles</p>
                            <p>Edinburgh Airport – 8.6 miles</p>
                            <p>Parking: on street metered parking</p>
                            <p>Accessible venue: no</p>

                            <h4>Price</h4>
                            <p>Hourly - from £75</p>
                            <p>Half Day (4 hours) - from £225</p>
                            <p>Full Day (8 hours) - from £295</p>
                            <p>Evening from £250</p>
                            
                            <p>Catering</p>
                            <p>Our onsite Café at 6 Waterloo Place can provide cold buffet style lunches (sandwiches, quiches, salads etc) as required. Menus and prices on request, discount for Burns room delegates Tea/coffee with assorted baked goods available.</p>
                            <p>Chilled water is provided for all meetings.</p>
                            <p>We held our end of year company conference in the Burns Room at Rabbies and were extremely impressed by the service we received. With around 28 people, including our executive board from London, we were provided with a great meeting room with a huge TV screen for presentations, constantly replenished coffee/tea station and a cracking view of Edinburgh's Princes Street. The staff were friendly and extremely helpful even when we had some minor technical difficulties with our laptops and presentations! All in all a great venue for meetings and corporate events and located just a stones throw from Waverley Station. Highly recommended."</p>
                            <p>Graham Turnbull - Consultant, Harvey Nash</p>
                            <p>"Rabbie's were efficient at both events we were hosting in their upstairs venue. The location is central and excellent. The room is bright and spacious with an amazing view down the length of Princes Street. Locals were impressed, non-locals even more so. The full "room height" Georgian windows lend the room class beyond the price."</p>
                            <p>Richard Meadows - Director, Great Grog</p>
                            <p>"Scottish Enterprise used the Board room within Rabbie’s offices at 6 Waterloo Place for a 2 day team development workshop. The facilities were perfect for our group (up to 20 pax) and the central location (2 minutes walk from Waverly station) was ideal. The room layout and facilities allowed for a comfortable & relaxed working environment. All catering (lunches and morning & afternoon snacks) were delicious. The food was obviously home made on the premises and lunch in particular received high praise (from our normally picky team). The food was fresh, tasty and a lovely change from typical business lunch offerings. We’d have no hesitation in using the venue again, and have already recommended it to colleagues."</p>
                            <p>Aileen Lamb, Tourism Manager, Scottish Enterprise</p>

                        </TabPanel>
                        <TabPanel value="4" className='text-muted'>
                            <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-3 text-muted'>Transport Services</h1>
                            <p>We have a wealth of experience in providing transport and transfers throughout the UK, so if you are looking for someone to handle your ground logistics, look no further.</p>
                            <p>Using either our own low emission modern Mercedes 16-seat coaches or our experienced preferred local partners, we are able to offer transport options for groups of all sizes. Whether you need a taxi to transfer one person to a hotel which is 200 metres away or a coach to take a group from Land’s End to John O’Groats – we’re happy to help!</p>

                            <h4>What can Rabbie’s help you with?</h4>
                            <ul>
                                <li>Leisure transfers by taxi</li>
                                <li>Executive transfers with meet and greet services</li>
                                <li>Private vehicle transportation by car, people carrier, minibus or coach</li>
                                <li>Ferry connections throughout Scotland</li>
                                <li>Freedom of Scotland Travel Passes</li>
                                <li>Car Hire</li>
                            </ul>

                            <h4>Why choose Rabbie’s for your transport needs?</h4>
                            <ul>
                                <li>Established in 1993</li>
                                <li>Over 20 years’ experience in tours and transportation</li>
                                <li>A fleet of 72 luxury Mercedes 16 seat mini-coaches</li>
                                <li>Strong relationships with local partners providing vehicles and coaches of any size</li>
                                <li>Fulfil your Corporate Social Responsibility (we are recognised as leaders in Sustainable Tourism)</li>
                            </ul>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Container>
        </section>
    </div>
  )
}

export default ConferenceServices
