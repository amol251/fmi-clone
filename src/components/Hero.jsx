import React from 'react';

const Hero = () => {
  return (
    <>
      <section class="banner_two">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-4">
              <div class="banner-title">
                <h1><span class="b-span-1">SMARTER WAY TO DO</span> <span class="b-span-2">MARKET RESEARCH</span></h1>
                <p class="b-para">Research Reports and Business Intelligence for Consistent Growth</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="banner-Content ms-4 ms-md-0 justify-content-center">
                <div class="b-content-box b-content-box-1 px-2">
                  <div class="b-icon">
                    <span class="icon1"></span>
                  </div>
                  <div class="b-content-p">
                    <p class="p1">15,000 +</p>
                    <p class="p2">Market Research Reports</p>
                  </div>
                </div>
                <div class="b-content-box b-content-box-2 px-2">
                  <div class="b-icon">
                    <span class="icon2"></span>
                  </div>
                  <div class="b-content-p">
                    <p class="p1">40,000 +</p>
                    <p class="p2">Market Research Topics</p>
                  </div>
                </div>
                <div class="b-content-box b-content-box-3 px-2">
                  <div class="b-icon">
                    <span class="icon3"></span>
                  </div>
                  <div class="b-content-p">
                    <p class="p1">3 Million +</p>
                    <p class="p2">Hours of Experience</p>
                  </div>
                </div>
              </div>
              <div class="banner-cta">
                <a href="https://calendly.com/fmi-inc/15min" target="_blank" rel="noopener" class="banner-Cta-1" title="SCHEDULE A CALL">SCHEDULE A CALL</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
