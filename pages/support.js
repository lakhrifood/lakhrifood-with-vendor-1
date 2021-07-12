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
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Subject Of Problem
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                Details Message of Problem
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload A Screenshot Of Your Problem
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className={styles.infoContainer}>
          <h1>Query List</h1>
          <div className={styles.query}>
            <div class="card">
              <div class="card-header">#UserID_234509</div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
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
