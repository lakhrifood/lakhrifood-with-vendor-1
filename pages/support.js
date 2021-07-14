import Navbar from "../components/Navbar";
import styles from "../styles/Support.module.css";

const support = () => {
  return (
    <div>
      <Navbar />
      <div className={`  ${styles.container}`}>
        <div className={styles.infoContainer}>
          <h1>Support Policy</h1>
          <p>We Can Support You 24 Hours</p>
          <p>
            Call Us : <strong>018 1010 5049</strong>
          </p>
          <p>
            Mail: <strong>Info@lakhrifood.com</strong>
          </p>
          <p>
            Web : <strong>www.lakhrifoodandcraft.com</strong>
          </p>
        </div>
        <div className={styles.infoContainer}>
          <h1>Do you Face any Problem?</h1>
          <form className={styles.formControl}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Subject Of Problem
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                Details Message of Problem
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label for="formFile" className="form-label">
                Upload A Screenshot Of Your Problem
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className={styles.infoContainer}>
          <h1>Query List</h1>
          <div className={styles.query}>
            <div className="card">
              <div className="card-header">#UserID_234509</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    ext of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>
                  <strong>No Reply Yet</strong>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default support;
