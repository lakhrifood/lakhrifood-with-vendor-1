import Image from 'next/image'
import React from 'react'

function Withdraw() {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column justify-content-center align-items-center pt-4 pb-4">
                            <Image
                                width={50}
                                height={50}
                                src="/./svg/loading.svg" />
                            <h1 className="p-3 text-center">
                                Your Reuest Has been <br />
                                Sent to the Admin Panel
                            </h1>
                            <div className="text-center fw-bold">Keep Patience!</div>
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Withdraw
