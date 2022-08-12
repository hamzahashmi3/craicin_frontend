import React from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const TermsConditions = () => {
  return (
    <div>
      <section className='bg-checkout-img'>
        <code>
          <h1 className='text-white text-center' style={{paddingTop: '200px', textShadow: '1px 2px #000'}}>
            Student Tours Scotland
          </h1>
        </code>             
      </section>


        <section>
            <Container className='text-muted'>
                <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-5 text-left text-muted'>Craicin Terms and Conditions</h1>
                <h4>Your booking is made subject to the following terms and conditions:</h4>
                <h4 className='fw-normal my-3'>General</h4>
                <p>These terms and conditions, together with any other written information brought to your attention before we confirm your booking, shall form the basis of your contract with Craicin Trail Burners Limited (a company incorporated in Scotland, No: SC164516) or, in respect of tours undertaken in Ireland, [Rabbie’s (Ireland) Limited] (a company incorporated in Ireland, No.634982) (in either case being 'us', 'we' or the 'Company') in respect of the relevant tour or other holiday experience (together referred to in these terms and conditions as ‘tours’) to be provided by the Company. Please read these terms and conditions carefully and contact us if you have any queries.</p>
                <p>Within these conditions, 'you' and 'your' means all persons named on the booking. By making a booking, the 'lead passenger' specified in the booking will be deemed to have accepted these conditions on behalf of all passengers named within the booking. For the avoidance of doubt, ‘written’ or ‘in writing’ shall, where used in these terms and conditions, include email.</p>
                <p>We endeavour to ensure that the information and prices in our brochures and on our website are accurate; however occasionally changes and errors occur and we reserve the right to correct prices and other details in such circumstances. You should check the current price and all other details relating to the arrangements that you wish to book before your booking request is made. All tours are sold subject to availability.</p>
                <p>None of these terms are intended to contravene or contradict the Package Travel and Linked Travel Arrangements Regulations 2018 (the “2018 Regulations”) (so far as applicable to your booking) or the Consumer Rights Act 2015 and your statutory rights under any such legislation are not affected. In the event that your booking constitutes a ‘linked travel arrangement’ in terms of the 2018 Regulations, you should refer to the section below entitled ‘Your Protection’.</p>

                <h4 className='my-3 fw-normal'>Booking Process</h4>
                <p>Bookings can be made via our website at <Link to="/" className='text-success'>www.Craicin.com</Link>, by telephone, <Link to="/contact" className='text-success'>by email</Link>, or in person at our booking office.</p>
                <p>Your booking is not confirmed until we have issued your booking confirmation. At that point a binding contract will be entered into between us. For scheduled tours (being single day tours, or tours of more than one day, with a specific itinerary, which are available for booking on scheduled dates from scheduled departure points), full payment will be required at the time of booking and (unless otherwise agreed), a booking confirmation will only be issued once we have received full payment from you. We cannot be held responsible if any tour in which you are interested becomes fully booked or otherwise unavailable prior to full payment being received from you.</p>

                <h4 className='mt-4 mb-3'>Accommodation and Other Services</h4>
                <p>Admission fees or guided tours are not included in the tour price unless expressly stated in the tour description.</p>
                <p>Unless otherwise expressly stated in the tour description, the cost of accommodation is not included in the price, although we can arrange accommodation on your behalf. If you wish us to do so, we will endeavour to book accommodation falling within the price bracket specified by you. If accommodation within the specified price bracket is not available or cannot be booked for any reason, we will discuss this with you before booking any alternative accommodation on your behalf. The costs of any special requests or supplements (including single supplements and/or child prices) will vary depending on, for example, the policies of the relevant accommodation providers or other suppliers. Please ask us about this at the time of making your booking enquiry. Bookings are made subject to the terms and conditions of the relevant accommodation (or other service) provider. By booking accommodation or other services through us, you enter into a direct contractual relationship with the relevant third party provider and we act solely as an intermediary, transmitting the details of your reservation to the relevant accommodation (or other service) provider. Unless otherwise advised, payment for accommodation or other services booked on your behalf should be made directly by you to the relevant third party provider.</p>
                <p>In addition to the cancellation charges outlined in these terms, cancellation of accommodation or other services booked by us on your behalf may also result in you being liable for cancellation charges levied by the relevant third party provider. Typically the charge made will be the cost of one night’s accommodation for each separate accommodation booked (unless the effective cancellation date is within 72 hours of the departure date for the relevant tour, in which event you may be liable for all accommodation costs). Any such costs or charges should be payable to us, so that we may remit them to the relevant provider on your behalf. Please contact <a href="mailto:rooms@Craicin.com" className='text-success'>rooms@Craicin.com</a> if you would like details of supplier cancellation charges relevant to your booking.</p>

                <h4 className='my-3 fw-normal'>Tailor Made Tours</h4>
                <p>In addition to scheduled tours, tours which are tailored to your/your party’s requirements may also be made available. These may include various elements such as transport, accommodation, meals, car/bus hire, entrance to attractions, guided tours and/or other value added services (together “Tailor Made Tours”).</p>
                <p>If you wish to make a Tailor Made Tour (which includes the booking of a scheduled tour for 10 or more individuals) then please contact us to discuss your requirements further. Tailor Made Tours are generally sold through our associated business, Rabbie’s Solutions LLP (No. SO304470) (the “LLP”). We reserve the right to direct any enquiry made in respect of Tailor Made Tours to the LLP, which will then be subject to the LLP’s separate terms and conditions of booking, which can be accessed here .</p>
                <p>In the event that we offer any Tailor Made Tours through the Company from time to time then the relevant provisions of these terms and conditions shall apply. If we quote a price for a Tailor Made Tour which is based upon a specified number of individuals then, in the event of the size of the group increasing or decreasing in size, we may alter our quoted price accordingly to reflect the revised numbers.</p>
                <p>Any changes made following the issue of your booking confirmation may be subject to an administration fee, which is at the discretion of the Company. The fee is typically 10% of the total cost of the tour, up to a maximum of £200, and may be subject to any costs or charges incurred or imposed by any of our suppliers.</p>
                <p>Where a booking is made more than 3 months prior to the date of the tour, a 20% deposit will be required to secure the booking. Where a tour is to take place within 3 months, full payment will be required at the time of booking.</p>

                <h4 className='my-3'>Changes by Us</h4>
                <p>While the Company shall do everything reasonably possible to provide your tour itinerary and/or services as planned, the Company reserves the right to alter itineraries, transport or accommodation if required to do so. In the case of accommodation, a similar standard of accommodation will be obtained wherever possible. The majority of any such alterations will be minor and we will try to advise you of them at the earliest possible date.</p>
                <p>In the unlikely event, however, that we are required to significantly alter a material part of your tour, we will notify you of this as quickly as possible in order to enable you to decide how you wish to proceed. In such event you will be entitled:-</p>
                <ul style={{listStyle: "lower-roman"}}>
                    <li>to take an alternative tour of equivalent or superior quality, if we are able to offer that, or</li>
                    <li> to take a substitute tour of lower quality if we are able to offer that (in which event the difference in price between the original and the substitute tour will be refunded to you); or</li>
                    <li>to cancel your booking and obtain a full refund of all monies paid by you.</li>
                </ul>
                <p>Please be aware that the nature of travel involves risks and unpredictable weather and road conditions and we cannot, therefore, guarantee any departure or arrival times at any particular points of a tour itinerary.</p>

                <h4 className='my-3 fw-normal'>Changes by You</h4>
                <p>If you wish to change any part of your confirmed booking, you should inform us in writing as soon as possible. This should be done by the lead passenger named on the booking. Whilst we will do our best to assist you, we cannot guarantee that we will be able to meet your request.</p>
                <p>Where we can meet a change request made by you, any changes made may be subject to an administration fee (as advised by the Company – see above regarding Tailor Made Tours). In addition, you may also be required to meet any extra costs incurred by us (and any costs or charges incurred or imposed by any of our suppliers) in making the requested change. Where we are unable to meet your change request and you no longer wish to travel on the basis of the original booking, this will be treated as a cancellation of your booking and cancellation charges may be payable by you, as outlined in these terms.</p>
                <p>If, once your booking is confirmed, you are unable to travel for any reason then we will allow you to transfer your booking to someone else (introduced by you, and who satisfies all of the conditions applicable to the booking) provided that:-</p>
                <ul style={{listStyle: "lower-roman"}}>
                    <li>we are notified of this in writing at least 7 days prior to departure;</li>
                    <li>an administration fee per person transferring (as advised by the Company) is paid;</li>
                    <li> you and/or the transferee make payment of any costs and charges incurred by us and/or imposed by our accommodation providers or other suppliers, and</li>
                    <li>the transferee agrees to these conditions and all other terms of the contract between us.</li>
                </ul>
                <p>For the avoidance of doubt, no transfer requests or changes will be finally confirmed until full payment of all applicable charges referred to above have been received by the Company.</p>

                <h4>Cancellation by Us</h4>
                <p>We will only cancel tours due to unavoidable and extraordinary circumstances which are outwith our control or which might jeopardise your safety. If we cancel your tour then we will notify you as soon as possible and we will always refund you, in full, for all sums paid by you.</p>

                <h4>Cancellation by You</h4>
                <p>If you wish to cancel your booking after our booking confirmation has been issued, you should inform us in writing as soon as possible - the effective date of cancellation will be the date upon which we receive such written notification. In the event of cancellation by you, cancellation charges may be payable, as set out below.</p>

                <h4>One Day Tours, Half-Day Tours, and City Tours:</h4>
                <p>For one day tours, half-day tours and city tours (being single day tours with a specific itinerary, which are available for booking on scheduled dates from scheduled departure points, together “sightseeing tours”), the following cancellation charges shall apply (depending on the effective date of cancellation):-</p>
                <ul style={{listStyle: "lower-alpha"}}>
                    <li>cancellation more than 48 hours before the tour departure: 10% of the tour price;</li>
                    <li>cancellation less than 48 hours before the tour departure: 100% of the tour price;</li>
                    <li>in the event of a ‘no show’ you will be charged 100% of the tour price.</li>
                </ul>

                <h4>Extended Tours (UK and Ireland):</h4>
                <p>For all extended UK scheduled tours (being tours of more than one day, with a specific itinerary, which are available for booking on scheduled dates from scheduled departure points “extended tours”), the following cancellation charges shall apply (depending on the effective date of cancellation):-</p>
                <u>Two to nine day tours:</u>
                <ul style={{listStyle: "lower-alpha"}}>
                    <li>cancellation more than 15 days before the tour date: 10% of the tour price;</li>
                    <li>cancellation less than 15 days before the tour date: 100% of the tour price;</li>
                    <li>in the event of a ‘no show’ you will be charged 100% of the tour price.</li>
                </ul>

                <u>10+ day tours:</u>
                <ul style={{listStyle: "lower-alpha"}}>
                    <li>cancellation more than 21 days before the tour date: 10% of the tour price;</li>
                    <li>cancellation less than 21 days before the tour date: 100% of the tour price;</li>
                    <li>in the event of a ‘no show’ you will be charged 100% of the tour price.</li>
                </ul>
                <p>Cancellation of an extended tour may also result in you becoming liable for cancellation charges in respect of any accommodation booked by the Company on your behalf, as outlined above under “Accommodation and Other Services”.</p>

                <h4>Extended Tours (non UK and Ireland):</h4>
                <p>Please note that extended scheduled tours of non UK and Ireland tours are sold through the LLP (as defined above in the section headed ‘Tailor Made Tours’) and are subject to the LLP’s separate terms and conditions of booking, which can be accessed here.</p>

                <h4>Tailor Made Tours:</h4>
                <p>Standard cancellation terms for Tailor Made Tours are as follows*:</p>
                <ul style={{listStyle: "lower-alpha"}}>
                    <li>cancellation more than 13 weeks / 91 days before the tour date: 0% of the price;</li>
                    <li>cancellation between 90 and 65 days before the tour date: 20% of the price;</li>
                    <li>cancellation between 64 and 35 days before the tour date: 70% of the price;</li>
                    <li>cancellation less than 35 days before the tour date: 100% of the price;</li>
                    <li>in the event of a ‘no show’ you will be charged 100% of the price.</li>
                </ul>
                <p>*Please note however, that the standard cancellation terms above may differ depending on the cancellation terms of any third party supplier providing any element of your Tailor Made Tour. The standard terms above are therefore subject to any variations advised at the time of quoting the price of your Tailor Made Tour.</p>

                <h4>Missed Departures</h4>
                <p>You are responsible for ensuring that you have all necessary passports, visas and other travel documents and that you are at the correct departure point at the correct time. We cannot accept any responsibility for your failure to do so, nor any costs or expenses incurred as a result of you failing to do so (which will be treated as a cancellation by you). No monies will be refunded for any missed departures or unused services.</p>

                <h4>Refusal of Travel</h4>
                <p>The Company reserves the right to refuse to carry any person whose conduct or manner is likely to cause offence or upset to other passengers. The Company also reserves the right to refuse travel to any person who is experiencing medical symptoms likely to cause ill health to others. It is therefore vital that you ensure that you are fit to travel on the departure date.</p>
                <p>In either of the cases mentioned above, full cancellation charges shall be applied by the Company and the Company shall have no further liability to that passenger or to any person travelling with them.</p>

                <h4>Our Liability and Actions of Suppliers</h4>
                <p>Many of the aspects of your holiday experience (of which your tour may form part) are provided by independent suppliers, who provide such products and services on the basis of their own terms and conditions. In particular, tickets for travel on other carriers are subject to the normal conditions of carriage of the individual carrier. The Company may share your personal information with other carriers insofar as necessary to enable products and services to be provided. Further details of this can be found in the Company’s privacy policy available here.</p>
                <p>The Company will not accept or have any liability for any acts or omissions (whether negligent or otherwise) of any supplier or person providing services in connection with any tour unless such a person is employed by or under the direct control of the Company. Although we will use reasonable skill and care in verifying descriptions and other information provided by third party suppliers, we cannot guarantee that all such information is accurate, complete or correct and each such supplier remains responsible for the accuracy, completeness and correctness of the information provided to us by them.</p>
                <p>This does not, however, affect your statutory rights under the 2018 Regulations, if applicable to your booking.</p>
                <p>If we are found liable to pay you compensation, then (subject to the following paragraphs) the maximum amount which we will be liable to pay to you in respect of any claim shall be limited to two times the price paid to the Company for your booking, in total. This limitation shall not apply to any claims relating to death or personal injury or fraud or negligence (or any other type of claim that cannot be excluded or limited at law). You must notify us of any potential claims under this provision at the earliest opportunity.</p>
                <p>The Company shall not be liable for unforeseeable or indirect losses . We will not be responsible for, nor will we be liable to pay compensation for, any loss, cost, damage or claim to the extent that it results from:-</p>

                <ul style={{listStyle: "lower-alpha"}}>
                    <li>any act and/or omission by you;</li>
                    <li>the act or omission of any third party unconnected with the provision of the services contracted for and which were unforeseeable or unavoidable;</li>
                    <li>unusual or unforeseeable circumstances beyond our (or our suppliers’) control, the consequences of which could not have been avoided even if all due care had been taken; or</li>
                    <li>any event which either we or our suppliers could not, even with all due care, have foreseen or forestalled.</li>
                </ul>
                <p>The Company cannot assume responsibility for any costs incurred for any travel arrangements purchased separately from the Company.</p>

                <h5>Rabbie’s Tours that include Rail travel</h5>
                <p>In the case of delayed or cancelled train services:</p>
                <p>If your train is delayed by more than 15 minutes, or is cancelled, please contact Rabbie’s and we will provide assistance in arranging public transport alternatives. Depending on the specific circumstances and availability of transport options, your itinerary may be rearranged to bring you to an alternative meeting point. In this case, or if alternative transport cannot be arranged, we will provide compensation for any missed portion of your tour.</p>

                <h5>Missed Departures:</h5>
                <p>We are not liable for compensation due to missed train departures. You can contact Rabbie’s for assistance in this case.</p>

                <h5>Ticket Collection:</h5>
                <p>Please note, once your train ticket has been collected, it is non-amendable and non-refundable unless the service is cancelled or delayed.</p>
                <p>We recommend arriving 45 minutes prior to your departure to allow enough time to collect your ticket and locate your platform.</p>
                <p>Please refer to our supplier Terms and Conditions and for further train service details see:</p>
                <a className='text-success' target='_blank' href="https://www.scotrail.co.uk/terms-conditions">https://www.scotrail.co.uk/terms-conditions</a>

                <h4 className='my-4'>Special Requests</h4>
                <p>Any special requests should be advised to us at the time of booking. Whilst we will try to accommodate your reasonable special requests, we cannot guarantee that they will be fulfilled and failure to meet any special request will not be a breach of contract on our part. Where appropriate, we will pass any special requests on to your accommodation provider(s), but we cannot be held responsible for their failure or inability to meet your request. Please also be aware that some accommodation providers may make an additional charge (payable locally) depending on the nature of your request. We regret that we cannot accept bookings which are conditional on any special request being met.</p>

                <h4>Disabilities and Medical Problems</h4>
                <p>We will try to accommodate disabilities and medical problems where we can but please be aware that many of our tours may not be suitable. If you or any member of your party has any disability or medical problem which may affect their ability to travel on our tour then please provide us with full details at the time of making your booking enquiry, so that we can advise you as to the suitability of your chosen arrangements. If we are not informed of any disabilities or medical problems in this way then we cannot be held responsible for any cost or inconvenience incurred if we are unable to accommodate you or any member of your party.</p>
                <p>If, acting reasonably, we are unable to accommodate the needs of the person(s) concerned then we will not confirm your booking or (if you did not give us details of the disability or medical problem at the time of making the booking request) we shall be entitled to cancel your booking and to levy the relevant cancellation charges.</p>

                <h4>Children</h4>
                <p>We regret that we do not carry children under the age of 5 on our scheduled tours (which includes, one-day, half-day, city tours and extended tours). Passengers aged 5-15 years old need to be accompanied by an adult. Child prices will vary depending on, for example, the policies of relevant accommodation providers or other suppliers. Please enquire about this at the time of making your booking enquiry.</p>

                <h4>Luggage</h4>
                <a href="#" className='text-success'>As we operate our tours in mini-coaches our luggage space is limited and we operate under strict legal weight regulations for safety reasons.</a>
                <p>Unless otherwise notified, passengers are restricted to one medium sized suitcase/bag similar to airline standard carry-on luggage, with a maximum weight of either 14kg (31lbs) or 20kg (44lbs).</p>
                <p>As a guideline, the dimensions of a 14kg bag should be approximately 55cm x 45 x 25 (22ins x 17 x 10). You can also bring a small, lightweight bag for personal items to carry with you on the vehicle.</p>
                <p>As this is a legal requirement, we reserve the right to refuse to carry luggage over this weight/size and may refuse travel for passengers who do not have arrangements in place to store excess baggage. Please see our FAQs for information on luggage and storage facilities</p>
                <p>Luggage is carried free of charge but at the passenger's own risk. It is the passenger's responsibility to ensure that luggage is fit for travel, i.e sturdy and waterproof. Travellers have to be able to lift their own luggage. You may have to carry your bag to and from your accommodation.</p>

                <h4>Smoking</h4>
                <p>Smoking (including e-cigarettes) is not permitted on coaches but there are frequent stops en route for those passengers who wish to smoke.</p>

                <h4>Complaints</h4>
                <p>We actively welcome your feedback, both in respect of our own services and those provided by other suppliers (such as accommodation providers). In the event that you have any complaint during the course of your tour then please bring this to the attention of your driver or tour guide as soon as possible, and we will endeavour to resolve the matter to your satisfaction. Any complaints regarding accommodation should, in the first instance, be raised with the relevant accommodation provider. For more information about accommodation click here , which can also be accessed at:</p>
                <Link className='text-success mb-3' to="/faq">https://www.Craicin.com/en/info/about-us/faqs#acc</Link>
                <p>If your complaint is not resolved locally and you wish to complain further then please contact us at feedback@Craicin.com providing all relevant information necessary to enable us to consider your complaint. We would request that any complaints be raised with us within 28 days of the end of your tour, as otherwise our ability to investigate the complaint properly may be affected.</p>
                <p>You can also access the European Commission Online Dispute (ODR) Resolution platform at <a className='text-success' href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage">http://ec.europa.eu/consumers/odr/</a> . This ODR platform is a means of registering your complaint; it will not determine how your complaint should be resolved.</p>
                
                <h4>Insurance</h4>
                <p>The Company strongly recommends that passengers arrange suitable travel, medical and cancellation insurance.</p>
                
                <h4>Your Protection</h4>
                <p>If, after selecting and paying for one travel service, you book additional travel services for your trip or holiday via the Company, you will NOT benefit from rights applying to packages under the Package Travel and Linked Travel Arrangements Regulations 2018.</p>
                <p>Therefore, the Company will not be responsible for the proper performance of those additional travel services. In case of problems please contact the relevant service provider.</p>
                <p>However, if you book any additional travel services during the same visit to the Company’s booking website or if you book additional travel services via the Company not later than 24 hours after receiving confirmation of your booking from the Company, the travel services will become part of a linked travel arrangement. In that case, the Company has, as required by the Package Travel and Linked Travel Arrangements Regulations 2018, protection in place to refund your payments to the Company for services not fully performed because of the Company’s insolvency and, where necessary, for your repatriation. Please note that this does not provide a refund in the event of the insolvency of the relevant service provider.</p>

                <h5>For all tours excluding Ireland</h5>
                <p>The Association of Bonded Travel Organisers Trust Limited (ABTOT) provides financial protection under The Package Travel and Linked Travel Arrangements Regulations 2018 for Rabbie’s Trail Burners Limited ABTOT number 5396, and in the event of their insolvency / financial failure, protection is provided for the following:</p>
                <ul>
                    <li>Accommodation only</li>
                    <li>Linked Travel Arrangements (LTAs) where two or more different travel services are purchased for the same trip or holiday with the separate contracts facilitated by Rabbie’s Trail Burners Limited</li>
                </ul>
                <p>ABTOT cover for LTAs extends only to the transport arrangements; your accommodation provider remains responsible for fulfilling your accommodation. ABTOT will provide for a refund of your transport costs in the event you have not yet travelled or repatriation if you are on a trip.</p>
                <p>Please note there is no repatriation cover if your LTA does not include transport provided by Rabbie’s Trail Burners Limited.</p>
                <p>Please note that your LTA is not covered under ABTOT if you have only purchased transport from Rabbie’s Trail Burners Limited and have arranged accommodation yourselves.</p>
                <p>Please note that bookings made with Rabbie’s (Ireland) Limited are not covered by ABTOT.</p>
                <p>In the unlikely event that you require assistance whilst abroad due to our financial failure, please call our 24/7 helpline on <strong>01702 811397</strong> and advise you are a customer of an ABTOT protected travel company.</p>
                <p>You can access The Package Travel and Linked Travel Arrangements Regulations 2018 here:<a className='text-success' href="https://www.legislation.gov.uk/uksi/2018/634/contents/made">https://www.legislation.gov.uk/uksi/2018/634/contents/made</a></p>

                <h5>For tours in Ireland</h5>
                <p>Irish Total Payment Protection (topp) Policy cover:</p>
                <p>In compliance with The Package Holidays and Travel Trade Act 1995 (Republic of Ireland), an insurance policy has been arranged with Arcus Solutions, to protect Republic of Ireland customers’ prepayments in the unlikely event of our financial failure, and paid in respect of:</p>
                <ul>
                    <li>Non-flight inclusive packages sold by the Policyholder as principal to the contract for:</li>
                    <li>a refund of such prepayments if customers have not yet travelled, or</li>
                    <li>making arrangements to enable the holiday to continue if customers have already travelled</li>
                    <li>repatriation of customers as may be applicable, subject to the terms of the insurance policy.</li>
                </ul>
                <p>In the unlikely event of financial failure please contact the claims helpline on +44 (0) 1702 811397. A copy of the policy is available on request.</p>
                <u>This policy is provided by</u>
                <p>Arcus Solutions – 3 Cours Charlemagne, 69002 Lyon – SARL au capital de 1 000€ – Téléphone: +44 (0) 207 065 5300. <a className='text-success' href="www.arcus-solutions.fr">www.arcus-solutions.fr</a></p>
                <p>RCS de Lyon n°853 774 529 – Code APE n°6622Z – ORIAS n°19006898. Le registre des intermédiaires d’assurances est tenu à jour par l’ORIAS disponible sur <a className='text-success' href="www.orias.fr">www.orias.fr</a></p>
                <p>Entreprise régie par le Code des Assurances et soumise au contrôle de l’ACPR – 4 place de Budapest, CS 92459, 75436 Paris Cedex 09</p>
                <p>RC Professionnelle et Garantie Financière conformes aux articles L. 512-6 et L. 512-7 du Code des Assurances</p>
                <u>This policy is underwritten by</u>
                <p>Hiscox SA (Hiscox), an insurance company (reference number RCS Luxembourg B217018), which is subject to the supervision of the Commissariat aux Assurances with its branch in Ireland being registered with the Companies Registration Office (company number 908764) and regulated by the Central Bank of Ireland (reference C184313).</p>
                <p>NOTE: This insolvency protection does not cover contracts with parties other than the Company, which can be performed despite the Company’s insolvency.</p>
                <p>The topp certificate can be found here.</p>

                <h4 className='my-3 fw-normal'>Data Protection</h4>
                <p>We take your privacy seriously and will always endeavour to process your personal information in accordance with applicable data protection laws. In order to process your booking and to ensure that your travel arrangements run smoothly, we will need to use the personal information which you provide to us (such as your name, address, contact details, any special requirements etc). Where you have consented, we may also use the information provided to keep in touch with you and to advise you of the Company’s products and services (including special offers) from time to time. We may also pass personal information on to third parties (such as accommodation providers or other suppliers relevant to your booking) where necessary and where appropriate measures are in place. We will not, however, pass your information on to anyone who is not involved in providing (or arranging the provision of) any product or service related to your booking.</p>
                <p>Further details of how we process your personal information is set out in our Privacy Policy. Please click <Link className='text-success' to="/privacycookies">here</Link> to review our current Privacy and Cookies Policy, which can also be accessed at <a className='text-success' href="https://www.Craicin.com/en/info/about-us/privacy-cookies">https://www.Craicin.com/en/info/about-us/privacy-cookies</a></p>

                <h4 className='my-3 fw-normal'>Website Links</h4>
                <p>Where our websites contain links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or of any information you may obtain from them. You must not establish any link to our websites unless we have given our express written approval of this.</p>
                
                <h4 className='fw-normal my-3'>Website and Media Content</h4>
                <p>You consent to us using images and videos of you taken during the tour for advertising and promotional purposes in any medium we choose. Our websites may include information and materials (including photographs) uploaded by other users of the websites, including to bulletin boards and chat rooms. This information and these materials have not been verified or approved by us. The views expressed by other users on our websites do not represent our views or values. If you wish to complain about information or materials uploaded by other users please contact us at <a className='text-success' href="mailto:feedback@Craicin.com">feedback@Craicin.com</a></p>
                <p>Whenever you make use of a feature that allows you to upload content to our websites, or to make contact with other users of our websites, you must comply with the following content standards in respect of any and all material which you contribute to our websites (contributions), and to any interactive services associated with it. Contributions must (i) be accurate (where they state facts), (ii) be genuinely held (where they state opinions), and (iii) comply with applicable law in the UK and in any country from which they are posted. Contributions must not (i) contain any material which is defamatory of any person, (ii) contain any material which is obscene, offensive, hateful or inflammatory, (iii) promote sexually explicit material; (iv) promote violence or any illegal activity, (v) promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age, (vi) infringe any intellectual property rights of any other person, (vii) be likely to deceive any person or to misrepresent your identity or affiliation with any person, (viii) be threatening, abusive or invade another’s privacy, or be calculated or likely to harass, upset, embarrass, alarm or annoy any other person, (ix) give the impression that they emanate from us, if this is not the case.</p>
                <p>You warrant that any such contribution shall comply with our content standards, and you will be liable to us and shall compensate us for any breach of that warranty. This means that you will be responsible for any loss or damage we suffer as a result of your breach of warranty and non-compliance with our content standards.</p>
                <p>Any testimonials, photographs or content (which you upload to our websites or otherwise) will be considered non-confidential and non-proprietary (unless expressly stated by you in writing to <a href="mailto:marketing@Craicin.com" className='text-success'>marketing@Craicin.com</a>). You retain all of your ownership rights in your content, but you are required to grant us a licence to use, store and copy that content and to distribute and make it available to third parties. Uploading your content shall automatically grant us a perpetual, worldwide, royalty-free, non-exclusive licence to use, reproduce, distribute and display such content for such purposes as we may reasonably require including, without limitation, for use in our marketing materials and publicity.</p>
                <p>We also have the right to disclose your identity to any third party who is claiming that any content posted or uploaded by you to our websites constitutes a violation of their intellectual property rights, or of their right to privacy.</p>
                <p>We have the right to remove any posting you make or content you upload on our websites if, in our opinion, your post does not comply with the content standards set out above. We may also impose restrictions on the amount of content which can be uploaded at any time.</p>
                <p>You are solely responsible for securing and backing up your content.</p>
                <p>We are not responsible for viruses and you must not introduce them.</p>

                <h4 className='fw-normal'>Promotional Codes</h4>
                <p>The Company (or third parties on our behalf) may from time to time issue promotional codes for use in booking our tours, which may provide a discount on the price of your booking. Promotional codes shall be valid only during the dates stated (and for the tours/departure points stated) and may only be valid for bookings made by you directly through our website and/or by phone. Promotional codes are not redeemable for cash and may be withdrawn by the Company at any time, in its discretion. Promotional codes may not be used in conjunction with any other offer. All tours are subject to availability.</p>

                <h4 className='fw-normal'>Force Majeure</h4>
                <p>Unless expressly stated otherwise in these terms and conditions, we will not have any liability to you if we are prevented from fulfilling our contractual obligations to you as a result of any event which is outwith our control (and/or outwith the control of the supplier or provider of the service in question). Such events may include (but are not limited to) war or threat of war; terrorist activity or the threat of terrorist activity; civil commotion or riot; any action taken by a governmental or public authority; industrial disputes; collapse of buildings, fire, explosion or accident; traffic or road conditions or road closures; technical or mechanical breakdown; adverse weather conditions; natural disasters and all similar events or circumstances.</p>

                <h4 className='fw-normal'>Enforceability of Terms</h4>
                <p>If any provision of these terms and conditions is found to be illegal or unenforceable, that shall not affect the validity and enforceability of the remainder of these terms and conditions.</p>

                <h4 className='fw-normal my-3'>Governing Law and Jurisdiction</h4>
                <p>To the extent permitted by law, these terms and conditions shall be governed by and construed in accordance with Scots law and any matter or claim arising from them shall be dealt with only by the Scottish courts (save that you may choose the law and the courts of England, Wales, Northern Ireland or Eire if you live in any of those places and wish to do so). This does not affect your rights as a consumer to benefit from any mandatory provisions of the law of the country in which you are resident.</p>
                <p className='mb-5'>If you would like to bring a matter to our attention, please <Link to="/contact" className='text-success'>contact us</Link>.</p>



            </Container>
        </section>
    </div>
  )
}

export default TermsConditions