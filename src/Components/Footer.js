/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="site-footer border-top mt-5">
          <div className="footer-widgets">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="foot-about">
                    <a className="foot-logo">
                      <img src="images/foot-logo.png" alt="" />
                    </a>
                    <p>Chấp cánh chi thức cùng với tương lai con trẻ</p>
                  </div>{' '}
                  {/* .foot-about */}
                </div>{' '}
                {/* .col */}
                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                  <div className="foot-contact">
                    <h2>Contact Us</h2>

                    <ul>
                      <li>Địa chỉ Email: ThueGiaSu@gmail.com</li>
                      <li>Số Điện Thoại: (+88) 001-1234-88888</li>
                      <li>Địa Chỉ: 40 Baria Sreet 133/2 NewYork City, US</li>
                    </ul>
                  </div>{' '}
                  {/* .foot-contact */}
                </div>{' '}
                {/* .col */}
                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                  <div className="quick-links flex flex-wrap">
                    <h2 className="w-100">Links Nhanh</h2>

                    <ul className="w-50">
                      <li>
                        <a>Abouts </a>
                      </li>
                      <li>
                        <a>Terms of Use </a>
                      </li>
                      <li>
                        <a>Privacy Policy </a>
                      </li>
                      <li>
                        <a>Contact Us</a>
                      </li>
                    </ul>

                    <ul className="w-50">
                      <li>
                        <a>Documentation</a>
                      </li>
                      <li>
                        <a>Forums</a>
                      </li>
                      <li>
                        <a>Language Packs</a>
                      </li>
                      <li>
                        <a>Release Status</a>
                      </li>
                    </ul>
                  </div>{' '}
                  {/* .quick-links */}
                </div>{' '}
                {/* .col */}
                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                  <div className="follow-us">
                    <h2>Liên Hệ</h2>

                    <ul className="follow-us flex flex-wrap align-items-center">
                      <li>
                        <a>
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>{' '}
                  {/* .quick-links */}
                </div>{' '}
                {/* .col */}
              </div>{' '}
              {/* .row */}
            </div>{' '}
            {/* .container */}
          </div>{' '}
          {/* .footer-widgets */}
        </footer>{' '}
        {/* .site-footer */}
      </>
    );
  }
}

export default Footer;
