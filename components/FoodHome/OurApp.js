import React from 'react'

function OurApp() {
    return (
        <div className="app-section">
            <div className="content">
                <img className="mobile" src="https://res.cloudinary.com/lakhrifood/image/upload/v1628766892/assests/doa-mobile_zmgxdp.png" />
                <div className="body">
                    <h1>Download Our App</h1>
                    <div className="links d-flex justify-content-center">
                        <a href="#">
                            <img height="97px" src="https://res.cloudinary.com/lakhrifood/image/upload/v1628766890/assests/playstore_a0wbk3.png" alt="" />
                        </a>
                        <a href="#">
                            <img height="97px" src="https://res.cloudinary.com/lakhrifood/image/upload/v1628766890/assests/appstore_ptsolq.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurApp
