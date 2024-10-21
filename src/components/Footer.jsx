import React from 'react';

const Footer = () => {
  return (
    <>
      <footer class="footer_section pt-4">
        <div class="container">
          <div class="row footer_row1 align-items-center">
            <div class="col-lg-3 col-md-3 col-12 d-flex justify-content-center align-items-center">
              <div class="select_location w-100">
                <label for="select_location" class="d-inline">Address Locations
                </label>
                <select class="getAddress form-control" id="select_location">
                  <option value="hq">Headquarters</option>
                  <option value="us">Americas</option>
                  <option value="mea">Middle East &amp; Africa</option>
                  <option value="eur">Europe</option>
                  <option value="asia">Asia Pacific</option>
                </select>
              </div>
            </div>
            <div class="col-lg-5 col-md-5 col-12 border_right_left">
              <div class="address headquarter px-3">
                <address>
                  <p class="mb-2 lh-22 font14 t-black1">Future Market Insights is registered in the state of Delaware as Future Market Insights, Inc. Christiana Corporate, 200 Continental Drive, Suite 401, Newark, Delaware - 19713, United States</p>
                  <p class="contact_para font14 bold700 m-0 d-inline-block me-2">Email: <a href="mailto:sales@futuremarketinsights.com" title="Email Us">sales@futuremarketinsights.com</a></p>
                  <p class="contact_para font14 bold700 m-0 d-inline-block">T: <a href="tel:+13479183531" title="Call Us">+1-347-918-3531</a></p>
                </address>
              </div>
              <div class="address americas px-3 d-none">
                <address>
                  <p class="mb-1 lh-22 font14 t-black1">Future Market Insights, Inc.</p>
                  <p class="mb-2 lh-22 font14 t-black1">616 Corporate Way, Suite 2-9018, Valley Cottage,<br /> NY 10989, United States</p>
                  <p class="contact_para font14 bold700 m-0 d-inline-block">Email: <a href="mailto:sales@futuremarketinsights.com" title="Email Us">sales@futuremarketinsights.com</a></p>
                </address>
              </div>
              <div class="address middleEast_africa px-3 d-none">
                <address>
                  <p class="mb-1 lh-22 font14 t-black1">Future Market Insights, Inc.</p>
                  <p class="mb-2 lh-22 font14 t-black1">1602-6 Jumeirah Bay X2 Tower, Plot No: JLT-PH2-X2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates</p>
                  <p class="contact_para font14 bold700 m-0 d-inline-block">Email: <a href="mailto:sales@futuremarketinsights.com" title="Email Us">sales@futuremarketinsights.com</a></p>
                </address>
              </div>
              <div class="address europe px-3 d-none">
                <address>
                  <p class="mb-1 lh-22 font14 t-black1">Future Market Insights, Inc.</p>
                  <p class="mb-2 lh-22 font14 t-black1">3rd Floor, 207 Regent Street,<br /> W1B 3HH, London, United Kingdom</p>
                  <p class="contact_para font14 bold700 m-0 d-inline-block me-2">T: <a href="tel:+4402081239659" title="Call Us">+ 44 (0) 20 8123 9659</a></p>
                </address>
              </div>
              <div class="address apac px-3 d-none">
                <address>
                  <p class="mb-1 lh-22 font14 t-black1">Future Market Insights Global &amp; Consulting Pvt. Ltd.,</p>
                  <p class="mb-2 lh-22 font14 t-black1">IndiaLand Global Tech Park, Unit UG-1, Behind Grand HighStreet, Phase 1, Hinjawadi, MH, Pune – 411057, India</p>
                  <p class="contact_para font14 bold700 m-0 d-inline-block">Email: <a href="mailto:sales@futuremarketinsights.com" title="Email Us">sales@futuremarketinsights.com</a></p>
                </address>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
              <div class="footer_logo">
                <img src="https://www.futuremarketinsights.com/public/assets/images/fmi-esomar-footer-logo.webp" width="289" height="54" alt="Future Market Insights, Inc. (ESOMAR certified market research organization and a member of Greater New York Chamber of Commerce) provides in-depth insights into governing factors elevating the demand in the market." title="Future Market Insights, Inc. (ESOMAR certified market research organization and a member of Greater New York Chamber of Commerce) provides in-depth insights into governing factors elevating the demand in the market." class="img-fluid" loading="lazy" />
              </div>
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-lg-4 col-md-4 col-12">
              <div class="footer_links">
                <p class="font14 bold500 mb-2">Insights</p>
                <ul class="list-unstyled">
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/reports" title="All Reports">All Reports</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
              <div class="footer_links">
                <p class="font14 bold500 mb-2">About</p>
                <ul class="list-unstyled">
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/about-us" title="About Us">About Us</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/services" title="Services">Services</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/careers" title="Careers">Careers</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/contacts" title="Contact Us">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
              <div class="footer_links">
                <p class="font14 bold500 mb-2">Help</p>
                <ul class="list-unstyled ul3">
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/disclaimer" title="Disclaimer">Disclaimer</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/terms" title="Terms &amp; Conditions">Terms &amp; Conditions</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/privacy-policy" title="Privacy Policy">Privacy Policy</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/cookies-policy" title="Cookies Policy">Cookies Policy</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/faqs" title="FAQs">FAQs</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/sitemap.xml" title="XML" target="_blank">XML</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/reports.xml" title="Reports XML" target="_blank">Reports XML</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.futuremarketinsights.com/sitemap" title="Sitemap">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer class="footer_copy_Right">
        <div class="container">
          <div class="row py-1 align-items-center justify-center">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="footer_social_links">
                <a class="twitter me-0" href="https://twitter.com/fmi_research" title="Twitter" target="_blank">
                  <svg viewBox="0 0 24 24" width="20px" height="20px" fill="#123d63" aria-label="X" role="img" class="">
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
                </a>
                <a class="linkedin" href="https://www.linkedin.com/company/future-market-insights" title="Linkedin" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" width="30" height="30" viewBox="0 0 1000 1000">
                    <path id="path" style={{ opacity: '1', fill: '#123D63', fillOpacity: '1' }} d=" M 336 332C 336 332 336 789 336 789C 336 789 211 789 211 789C 211 789 211 332 211 332C 211 332 336 332 336 332M 346 206C 346 206 346 206 346 206C 346 247 313 280 273 280C 233 280 201 247 201 206C 201 166 233 133 273 133C 313 133 346 166 346 206M 834 508C 834 508 834 789 834 789C 834 789 709 789 709 789C 709 789 709 556 709 556C 709 416 543 427 543 556C 543 556 543 789 543 789C 543 789 419 789 419 789C 419 789 419 332 419 332C 419 332 543 332 543 332C 543 332 543 406 543 406C 601 298 834 290 834 508" transform="">
                    </path>
                  </svg>
                </a>
                <a class="youtube" href="https://www.youtube.com/c/futuremarketinsights" title="Youtube" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                  </svg>
                </a>
                <a class="facebook" href="https://www.facebook.com/futuremarketinsights" title="Facebook" target="_blank">
                  <svg xmlns="https://www.w3.org/2000/svg" width="25px" height="20px" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 0.44 0.95">
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path class="fil0" d="M0.1 0.48l0 0.45c0,0.01 0,0.02 0.01,0.02l0.17 0c0,0 0.01,-0.01 0.01,-0.02l0 -0.46 0.12 0c0.01,0 0.01,-0.01 0.02,-0.01l0.01 -0.14c0,-0.01 -0.01,-0.01 -0.01,-0.01l-0.14 0 0 -0.1c0,-0.03 0.02,-0.05 0.04,-0.05l0.1 0c0,0 0.01,0 0.01,-0.01l0 -0.14c0,0 -0.01,-0.01 -0.01,-0.01l-0.16 0c-0.1,0 -0.17,0.08 -0.17,0.17l0 0.14 -0.09 0c0,0 -0.01,0 -0.01,0.01l0 0.14c0,0 0.01,0.01 0.01,0.01l0.09 0 0 0.01z"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <p class="text-end font12 m-0">Copyright © Future Market Insights, Inc.</p>
            </div>
          </div>
        </div>
      </footer >
    </>
  );
};

export default Footer;
