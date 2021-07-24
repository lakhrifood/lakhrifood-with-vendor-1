import Navbar from "../../components/vendor/Navbar";
import Footer from '../../components/vendor/Footer/Footer';
const shopsettings = () => {
  return (
    <div>
      <Navbar />

      <div className={`container`}>
        <h1 className={`h3`}>Shop Settings</h1>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Shop name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter here..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Default file input example
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Shop Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter here..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Product Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        {/* <h1 className={`h3 `}>Banner Settings</h1> */}
        {/* <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Banner (1500 x 450)
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div> */}


        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default shopsettings;
