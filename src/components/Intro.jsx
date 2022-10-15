import React from "react";
import styles from "./intro.module.css";
import me from "../assets/me3.png";

function Intro() {
  return (
    <>
      <div className={styles.i}>
        <div className={styles.i_left}>
          <div className={styles.i_left_wrapper}>
            <h2 className={styles.i_intro}>Hello my name is </h2>
            <h1 className={styles.i_name}>Ahmed Elsharkawy</h1>
            <div className={styles.i_title}>
              <div className={styles.i_title_wrapper}>
                <div className={styles.i_title_item}>ReactJS</div>
                <div className={styles.i_title_item}>Redux</div>
                <div className={styles.i_title_item}>nodeJS</div>
                <div className={styles.i_title_item}>Bootstrap</div>
                <div className={styles.i_title_item}>MatrialUI</div>
                <div className={styles.i_title_item}>MongoDB</div>
                <div className={styles.i_title_item}>Express</div>
              </div>
              <div className={styles.i_title_dev}>Developer</div>
            </div>
            <p className={styles.i_desc}>
            I am a front-end web developer. I graduated from the Faculty of Electronic Engineering, Computer Science Department. I worked through a 3+ month Intensive Code Camp program inside the Information Technology Institute (ITI), learning JavaScript, Bootstrap, ReactJS, MongoDB, and NodeJS.
            </p>
          </div>
          <div className={styles.i_svg}>
            <svg
              width="40px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                className={styles.wheel}
                d="M123.359,79.775l0,72.843"
                style={{ fill: "none", stroke: "gray", strokeWidth: 20 }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{ fill: "none", stroke: "gray", strokeWidth: 20 }}
              />
            </svg>
          </div>
        </div>
        <div className={styles.i_right}>
          <div className={styles.i_bg}></div>
          <div className={styles.i_image}>
            <img src={me} alt="" className={styles.my_image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
