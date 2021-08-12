import featured from '../images/AcceptAndGetReady.png'

export default function AcceptAndGetReady() {
    return (
        <div className="acceptngetready container">
            <div className="row">
                <div className="col-md-12 col-lg-6 order-lg-first">
                    <div className="title-box">
                        <h3>Accept And Get Ready</h3>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, pariatur a? Nulla porro animi veniam et? Repellat iure commodi asperiores ea ipsum quos reiciendis, provident, aperiam quae eligendi, enim accusamus?</p>
                </div>
                <div className="col-md-12 col-lg-4 offset-lg-2 order-first">
                    <img className="img-fluid mb-5 mb-lg-0" src={featured} alt="" />
                </div>
            </div>
        </div>
    )
}