import Image from 'next/image'
import React from 'react'

function DeliveryInfo() {
    return (
        <div className="container pt-4 pb-5 text-center">
            <h1 className="fs-1 fw-bold text-color">Delivery information</h1>
            <Image
                width={300}
                height={300}
                src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139832/assests/undraw_On_the_way_re_swjt_vngjv8.svg"
            />
            <p>Delivering in Dhaka only for now. <br />
                Delivery charges are applicable as follows: <br />
                BDT 50 within the radius of 5km <br />
                BDT 70 within the radius of 10km</p>
            <p className="fw-bold">
                *Above charges are applicable irrespective of the product weight. <br />
                All deliveries are pre-order based, hence will be delivered within 24hours from the time of order unless specified otherwise. <br />
                For any information, queries, complains do contact the following: <br />
                <span className="text-color">complaints.lakhrifoods@gmail.com</span> <br />
                +88 01747229993 <br />
                +88 01747229663
            </p>
        </div>
    )
}

export default DeliveryInfo
