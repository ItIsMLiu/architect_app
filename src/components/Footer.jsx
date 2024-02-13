import React from 'react';
import "../style/Footer.css"
import "../style/Global.css"

function Footer() {
  return <>
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><i>ZenArch</i></h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-12 col-md-12">
                    <p>&copy; 2024 - by Ibrahim, Khadijah, Min & Oxana</p>
                </div>            
            </div>
        </div>
    </footer>
  </>
}

export default Footer;