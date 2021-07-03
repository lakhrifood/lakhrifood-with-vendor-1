import styles from "../../styles/signup.module.css";
import Layout from "../../components/Layout";
import Image from "next/image";
import seling from "../../public/svg/reg celing.svg";
import treeTub from "../../public/svg/reg tob.svg";
import regWomen from "../../public/svg/reg woman.svg";
const signup = () => {
  return (
    <Layout>
      <div className={styles.signupContainer}>
        <div className={styles.header}>
          <div>Lakhrifood logo</div>
          <div className={styles.celingImagehContainer}>
            <div className={styles.celingSection1}>
              <Image
                src={seling}
                alt="signup lakhri celing"
                width={250}
                height={250}
              />
            </div>
            <div className={styles.celingSection2}>
              <Image
                src={seling}
                alt="signup lakhri celing"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.tabSection}>
            {" "}
            <Image
              src={treeTub}
              alt="signup lakhri celing"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.formSection}>
            <div className={styles.formFirst}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Vendor Owner Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Vendor Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Business Type
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className={styles.formFirst}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Location
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  NID Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>
          <div className={styles.tabSection}>
            {" "}
            <Image
              src={regWomen}
              alt="signup lakhri women"
              width={450}
              height={450}
            />{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default signup;
