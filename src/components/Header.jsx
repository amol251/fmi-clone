import React, { useState } from 'react';

const Header = () => {

  const [isSearchActive, setIsSearchActive] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <header className="header">
      <div className="container position-relative">
        <div className="row navigation_row">
          <div className="col-lg-3 col-md-3 col-3">
            <div className="header_logo_div">
              <a
                href="https://www.futuremarketinsights.com/"
                className="header_logo_link d-inline-block"
                title="Future Market Insights"
              >
                <img
                  src="https://www.futuremarketinsights.com/public/assets/images/fmilogo.webp"
                  className="img-fluid"
                  alt="Future Market Insights"
                  title="Future Market Insights"
                  width={86}
                  height={50}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-9">
            <div className="header_navigation d-flex justify-content-end align-items-center">
              <div className="search_icon_div" id="search_icon_div" onClick={() =>setIsSearchActive(!isSearchActive)} >
                <img
                  src="https://www.futuremarketinsights.com/public/assets/images/searchIcon.svg"
                  alt="Search Reports"
                  title="Search Reports"
                  width={23}
                  height={23}
                />
              </div>
              <div className="login_btn me-4">
                <a
                  href="https://member.marketngage.com/"
                  rel="nofollow noopener"
                  target="_blank"
                  className="d-flex align-items-center"
                  title="Login"
                >
                  <span className="me-1">Login </span>
                  <img
                    src="https://www.futuremarketinsights.com/public/assets/images/login_icon_white.svg"
                    className=""
                    alt="User Login"
                    title="Login"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <div className="menu bg-grey2" id="top-menu" onClick={() => setIsMenuActive(!isMenuActive)}>
                <div className="menulines" id="toggle_menu">
                  <span className="top-line menu-line" />
                  <span className="middle-line menu-line" />
                  <span className="bottom-line menu-line" />
                  <p className="menu-text">MENU</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isSearchActive ? "row search_row search_row_active" : "row search_row"} id="search_row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="search_content_div bg-grey3 p-5">
              <form
                action="https://www.futuremarketinsights.com/search"
                method="GET"
                className="search_report_form px-5 mx-4"
              >
                <input
                  type="search"
                  name="s"
                  id="s"
                  className="form-control"
                  placeholder="Search Report Keywords, Blogs"
                  minLength={3}
                  required=""
                />
                <div className="search_btn_div">
                  <button type="submit" className="header_search_btn">
                    <svg
                      focusable="false"
                      width={28}
                      height={28}
                      enableBackground="new 0 0 20 20"
                      viewBox="0 0 20 20"
                      xmlns="https://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Search"
                      className="searchBtnSvg"
                    >
                      <title>Search</title>
                      <g>
                        <path
                          className="coveo-magnifier-circle-svg"
                          d="m8.368 16.736c-4.614 0-8.368-3.754-8.368-8.368s3.754-8.368 8.368-8.368 8.368 3.754 8.368 8.368-3.754 8.368-8.368 8.368m0-14.161c-3.195 0-5.793 2.599-5.793 5.793s2.599 5.793 5.793 5.793 5.793-2.599 5.793-5.793-2.599-5.793-5.793-5.793"
                        />
                        <path d="m18.713 20c-.329 0-.659-.126-.91-.377l-4.552-4.551c-.503-.503-.503-1.318 0-1.82.503-.503 1.318-.503 1.82 0l4.552 4.551c.503.503.503 1.318 0 1.82-.252.251-.581.377-.91.377" />
                      </g>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="position-relative col-12">
                <div id="suggestionsList" className="search_result"></div>
              </div>
              <div className="search_result px-5 mx-4 d-none">
                <p className="m-0 p-3 bold500">Reports</p>
                <ul className="list-unstyled"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className={isMenuActive ? "row menu_row menu_row_active " : "row menu_row"} id="menu_row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="menu_content_div bg-grey3 px-5 py-4">
              <div className="row all_navigationDiv">
                <div className="col-lg-6 col-md-6 col-12">
                  <p className="font18 bold500 t-black3 mb-2">Industry</p>
                  <div className="all_cat_links d-flex">
                    <ul className="list-unstyled ps-4">
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/automotive"
                          className="t-black3 font14"
                          title="Automotive"
                        >
                          {" "}
                          Automotive{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/consumer-product"
                          className="t-black3 font14"
                          title="Consumer Product"
                        >
                          {" "}
                          Consumer Product{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/food-and-beverage"
                          className="t-black3 font14"
                          title="Food & Beverage"
                        >
                          {" "}
                          Food &amp; Beverage{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/chemicals-and-materials"
                          className="t-black3 font14"
                          title="Chemicals and Materials"
                        >
                          {" "}
                          Chemicals and Materials{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/healthcare"
                          className="t-black3 font14"
                          title="Healthcare"
                        >
                          {" "}
                          Healthcare{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/travel-and-tourism"
                          className="t-black3 font14"
                          title="Travel & Tourism"
                        >
                          {" "}
                          Travel &amp; Tourism{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/process-automation"
                          className="t-black3 font14"
                          title="Process Automation"
                        >
                          {" "}
                          Process Automation{" "}
                        </a>
                      </li>
                    </ul>
                    <ul className="list-unstyled ps-5 ms-5">
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/technology"
                          className="t-black3 font14"
                          title="Technology"
                        >
                          {" "}
                          Technology{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/industrial-automation"
                          className="t-black3 font14"
                          title="Industrial Automation"
                        >
                          {" "}
                          Industrial Automation{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/services-and-utilities"
                          className="t-black3 font14"
                          title="Services & Utilities"
                        >
                          {" "}
                          Services &amp; Utilities{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/oil-and-gas"
                          className="t-black3 font14"
                          title="Oil & Gas"
                        >
                          Oil &amp; Gas{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/packaging"
                          className="t-black3 font14"
                          title="Packaging"
                        >
                          {" "}
                          Packaging{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/category/testing-equipment"
                          className="t-black3 font14"
                          title="Testing Equipment"
                        >
                          {" "}
                          Testing Equipment{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="all_cat_btn_div text-center mt-3">
                    <a
                      href="https://www.futuremarketinsights.com/category"
                      className="bold500"
                      title="Industries at a Glance"
                    >
                      Industries at a Glance
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="all_site_links">
                    <p className="font18 bold500 t-black3 mb-2">About</p>
                    <ul className="list-unstyled ps-4">
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/about-us"
                          className="t-black3 font14"
                          title="About Us"
                        >
                          {" "}
                          About Us{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/services"
                          className="t-black3 font14"
                          title="Services"
                        >
                          {" "}
                          Services{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/careers"
                          className="t-black3 font14"
                          title="Careers"
                        >
                          {" "}
                          Careers{" "}
                        </a>
                      </li>
                    </ul>
                    <p className="font18 bold500 t-black3 mb-2">Media</p>
                    <ul className="list-unstyled ps-4">
                      <li>
                        <a
                          href="https://event.futuremarketinsights.com/"
                          className="t-black3 font14"
                          title="Event"
                        >
                          {" "}
                          Event{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/blogs"
                          className="t-black3 font14"
                          title="Blog"
                        >
                          {" "}
                          Blog{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://thought-leadership.futuremarketinsights.com/"
                          className="t-black3 font14"
                          title="Thought Leadership"
                        >
                          {" "}
                          Thought Leadership{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="all_site_links">
                    <p className="font18 bold500 t-black3 mb-2">Insights</p>
                    <div className="all_report_btn_div my-3 ps-2">
                      <a
                        href="https://www.futuremarketinsights.com/reports"
                        className="bold500"
                        title="All Reports"
                      >
                        All Reports
                      </a>
                    </div>
                    <p className="font18 bold500 t-black3 mb-2">Contact</p>
                    <ul className="list-unstyled ps-4">
                      <li>
                        <a
                          href="https://www.futuremarketinsights.com/contacts"
                          className="t-black3 font14"
                          title="Contact FMI"
                        >
                          {" "}
                          Contact FMI{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  );
};

export default Header;
