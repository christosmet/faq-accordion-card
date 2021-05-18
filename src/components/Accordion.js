import { useState } from "react";

import arrowImg from "../assets/images/icon-arrow-down.svg";
import styles from "./Accordion.module.scss";

const Accordion = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.accordion} onClick={toggleHandler}>
      <div>
        <p className={isToggled ? `${styles.question} ${styles['question-bold']}` : `${styles.question}`}>
          {props.question} <img className={isToggled ? `${styles['arrow-up']}` : `${styles['arrow-down']}`} src={arrowImg} alt="icon arrow down" />
        </p>
        {isToggled ? <p className={styles.answer}>{props.answer}</p> : null}
      </div>
    </div>
  );
};

export default Accordion;
