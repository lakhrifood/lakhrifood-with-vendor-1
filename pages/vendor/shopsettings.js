const { default: Footer } = require("@/components/vendor/Footer/footer");
const { default: Navbar } = require("@/components/vendor/Navbar");
const shopsettings = () => {
  return (
    <div>
      <Navbar />

      <div className={`container`}>
        <h1 className={`h3`}>Shop Settings</h1>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Shop name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter here..."
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Default file input example
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Shop Address
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter here..."
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Product Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <h1 className={`h3 `}>Banner Settings</h1>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Banner (1500 x 450)
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default shopsettings;
