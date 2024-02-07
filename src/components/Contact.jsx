import React from 'react';
import "../style/Contact.css"
import "../style/Global.css"

function Contact() {
  return <>
    <div className="container-fluid allContent">
      <div className="row align-items-center" id="contact">
        <div className="container-fluid col-lg-2 col-md-12 col-sm-12 secTitleContain"><h2>Contact</h2></div>
        <div className="container-fluid col-lg-10 col-md-12 col-sm-12 section-block">
          <div className="container">

            <div className="row">
              <div className="card col-lg-12 col-md-12 col-sm-12">
                <p>Have a project in mind? We're here to assist you! Don't hesitate to send us a message using the form below or contact details in the Info section. Thank you for your interest!
                </p>
                <br></br>
                <h5 className="card-title" id="git">Info:</h5>
                <ul className="nav nav-fill nav-underline">
                  <li className="nav-item">
                    <a className="nav-link icon-link" href="mailto:xxxx@outlook.com">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                      Email: xxxx@outlook.com
                    </a>
                  </li>
                  <li className="nav-item icon-link">
                    <a className="nav-link" href="tel: xxxxxxxxxxx">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                      Mobile: xxxxxxxxxxx
                    </a>
                  </li>
                  <li className="nav-item icon-link">
                    <a className="nav-link" href="https://www.google.com/maps/place/Bristol/@51.4683734,-2.7555235,11z/data=!3m1!4b1!4m6!3m5!1s0x4871836681b3d861:0x8ee4b22e4b9ad71f!8m2!3d51.454513!4d-2.58791!16zL20vMDk1bDA?entry=ttu">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>  
                      Bristol
                    </a>
                  </li>
                </ul>
              </div>
            </div>
       
            <div className="row">
              <h5 className="card-title">Form:</h5>
              <form action="https://getform.io/f/e05fc353-4d77-4ad4-84f0-82f69fbd062d" method="POST">
                <div class="mb-3">
                  <label for="name" class="form-label">Name:</label>
                  <input type="text" name="name" class="form-control" id="name"></input>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address:</label>
                  <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp"></input>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message:</label>
                  <textarea type="text" name="message" class="form-control" id="message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" id="contact">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Contact;