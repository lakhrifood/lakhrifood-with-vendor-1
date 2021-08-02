import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  createQuery,
  deleteQuery,
  getAllQueryByUserId,
  queryAns,
} from "../state/Api/Support";
import styles from "../styles/Support.module.css";

const support = () => {
  const [query, setquery] = useState([]);
  const [depend, setdepend] = useState("");
  const [message, setmessage] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const makeQuery = async () => {
    await createQuery({
      userID: localStorage.getItem("userId"),
      title: title,
      description: description,
    });
    setdepend("akasdasdadsdkj");
  };
  const updateReply = async (supportid) => {
    const { data } = await queryAns(supportid, {
      name: localStorage.getItem("userName"),
      massage: message,
    });
    setdepend("aksdkj");
    setmessage("");
  };
  const getQuery = async () => {
    const { data } = await getAllQueryByUserId(localStorage.getItem("userId"));
    console.log(data, "datadatadata");
    setquery(data);
  };
  useEffect(() => {
    getQuery();
  }, [depend]);
  return (
    <div>
      <Navbar />
      <div className={` ${styles.container}`}>
        <div className="container">
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
            <div className={styles.formControl}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Subject Of Problem
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(event) => {
                    settitle(event.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Details Message of Problem
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(event) => {
                    setdescription(event.target.value);
                  }}
                ></textarea>
              </div>

              <button className="btn btn-primary" onClick={makeQuery}>
                Submit
              </button>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <h1>Query List</h1>
            <div className={styles.query}>
              {query.map((item, index) => (
                <div className={`card ${styles.system}`}>
                  <div className="card-header">{item.title}</div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>{item.description}</p>
                    </blockquote>
                    <div>
                      <div
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseExample${index}`}
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        View Conversation
                      </div>
                      <p />
                      <div className="collapse" id={`collapseExample${index}`}>
                        {item.reply.map((reply, index) => (
                          <div className={styles.cardChat}>
                            <span>
                              <strong className={styles.cardChatstrong}>
                                {reply.name}
                              </strong>
                            </span>
                            {reply.massage}
                          </div>
                        ))}
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Your message"
                            aria-label="Your message"
                            aria-describedby="button-addon2"
                            // value={message}
                            onChange={(e) => {
                              setmessage(e.target.value);
                            }}
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={() => {
                              updateReply(item._id);
                            }}
                          >
                            Send
                          </button>
                          <p
                            className={styles.mark}
                            onClick={async () => {
                              await deleteQuery(item._id);
                              setdepend("aksdkj");
                            }}
                          >
                            Mark as solved
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default support;
