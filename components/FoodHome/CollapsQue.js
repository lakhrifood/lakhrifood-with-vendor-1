import { Button } from "@chakra-ui/react";
import { Collapse } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import React from "react";
const CollapsQue = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <>
      <div className={styles.collapsDet}>
        <Collapse startingHeight={20} in={show}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </Collapse>
      </div>
      <div onClick={handleToggle} className={styles.collapsContainer} mt="1rem">
        <h1>This is a question?</h1>
        <i className={`fas fa-plus ${styles.icon}`}></i>
      </div>
    </>
  );
};

export default CollapsQue;
