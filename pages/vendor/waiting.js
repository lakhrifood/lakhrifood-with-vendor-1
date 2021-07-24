import Image from 'next/image'
import React from 'react'
import Navbar from '../../components/vendor/Navbar'

function waiting() {

    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: "#f6f6f6", height: "100vh" }} className="d-flex justify-content-center align-items-center">
                <div style={{ backgroundColor: "#fff", padding: "100px 200px" }} className="d-flex flex-column justify-content-center align-items-center">
                    {/* <div className="d-flex flex-column justify-content-center align-items-center pt-4 pb-4"> */}
                    <Image
                        width={50}
                        height={50}
                        src="/./svg/loading.svg" />
                    <h1 className="p-3 text-center">
                        Once You accepted By Admin <br />
                        You can Access the Dashboard
                    </h1>
                    <div className="text-center fw-bold">Keep Patience!</div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default waiting
