import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  /*
  const [donateActive, setDonateActive] = useState(false);
  const handleDonateActive = () => {footerLeave(); setDonateActive(!donateActive);};
  const footerLeave = () => {setDonateActive(false);}
  */

  return (
    <footer id="footer">
      <div className="container">
        <p id="footerCopyright">ลิขสิทธิ์ © พรพระ</p>
        <section id="navFooter">
          <ul>
            <li className="layer">
              <div className="tooltip" data-tip="Layer">
                <Link className="btn btn-icon btn-mix" to="/Layer">
                  <span className="material-symbols-outlined">layers</span>
                  <span className="text">Layer</span>
                </Link>
              </div>
            </li>
            <li className="status">
              <div className="tooltip" data-tip="Status">
                <Link className="btn btn-icon btn-mix" to="/StatusCode">
                  <span className="material-symbols-outlined">data_object</span>
                  <span className="text">Status</span>
                </Link>
              </div>
            </li>
            <li className="contact">
              <div className="tooltip" data-tip="ติดต่อเรา">
                <Link className="btn btn-icon btn-mix" to="/ติดต่อเรา">
                  <span className="material-symbols-outlined">mail</span>
                  <span className="text">ติดต่อเรา</span>
                </Link>
              </div>
            </li>
            <li className="login">
              <div className="tooltip" data-tip="เข้าสู่ระบบ">
                <Link className="btn btn-icon btn-mix" to="เข้าสู่ระบบ">
                  <span className="material-symbols-outlined">account_circle</span>
                  <span className="text hidden">เข้าสู่ระบบ</span>
                </Link>
              </div>
            </li>
            <li className="github">
              <div className="tooltip" data-tip="GitHub">
                <Link className="btn btn-icon btn-mix" to="https://github.com/rabbitarm" target="_blank">
                  <svg viewBox="0 0 98 96">
                    <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                  </svg>
                  <span className="text">GitHub</span>
                </Link>
              </div>
            </li>
            <li className="donate">
              <div className="tooltip tooltip-left" data-tip="ร่วมสนับสนุน">
                <Link className="btn btn-icon btn-mix-reverse-secondary" to="ร่วมสนับสนุน">
                  <span className="material-symbols-outlined">volunteer_activism</span>
                  <span className="text hidden">ร่วมสนับสนุน</span>
                </Link>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );

};

export default Footer;