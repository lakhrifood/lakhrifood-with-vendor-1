import React, { useState } from 'react'

function CancelOrderModal() {
    const [vDiscription, setVDiscription] = useState(false)

    const handleChange = (e) => {
        console.log(e.target.value)
        { e.target.value === "Other." ? setVDiscription(true) : setVDiscription(false) }
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Order Cancelation</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <select onChange={(e) => handleChange(e)} className="form-select" aria-label="Default select example">
                            <option selected>Do You want To Cancel your Order?</option>
                            <option >My mind is changed.  </option>
                            <option >I will order it later.</option>
                            <option >Not Right now.</option>
                            <option >Other.</option>
                        </select>
                        {vDiscription && <textarea className="form-control mt-3" name="" id="" cols="30" rows="5"></textarea>}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-bg">Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancelOrderModal
