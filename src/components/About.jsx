import React from "react";
import styels from "./about.module.css";
import me2 from "../assets/333.jpg";
import iti from "../assets/iti.png";
import udacity from "../assets/udacity1.png";
import cv from "../assets/Ahmed-Mohamed-Elsharkawy-resume.pdf";

function About() {
  return (
    <>
      <hr></hr>
      <div className={styels.a}>
        <div className={styels.a_left}>
          <div className={styels.a_img_back}>
            <div className={styels.a_img}>
              <img src={me2} alt="" />
            </div>
          </div>
        </div>
        <div className={styels.a_right}>
          <div className={styels.a_right_content}>
            <h3>About Me</h3>
            <p className={styels.a_right_content_t1}>
              Front-End developer (React js) | ITI graduate.
            </p>
            <p className={styels.a_right_content_t2}>
              As a computer science graduate, I’m proud to have already
              developed a proficient working knowledge of front-end web
              development using React. I’m passionate about coding and have
              attended several coding trainings to hone my expertise. I’ve used
              my skills to help several peers create and manage websites for
              their start-up businesses, including an e-commerce site, a booking
              site, and a personal website.
            </p>
            <div className={styels.a_right_content_cer}>
              <div className={styels.a_right_content_cer_img}>
                <img src={iti} alt="" />
              </div>
              <div className={styels.a_right_content_cer_data}>
                <p className={styels.a_right_content_t1}>
                  Intensive Code Camp (ITI)
                </p>
                <p className={styels.a_right_content_t2}>
                  Full stack web development (MERN stack), 3+ month Intensive
                  Code Camp program inside the Information Technology Institute
                  (ITI)
                </p>
              </div>
            </div>
            <div className={styels.a_right_content_cer}>
              <div className={styels.a_right_content_cer_img}>
                <img src={udacity} alt="" />
              </div>
              <div className={styels.a_right_content_cer_data}>
                <p className={styels.a_right_content_t1}>
                  Front end web development nanodgree (Udacity)
                </p>
                <p className={styels.a_right_content_t2}>
                  Front end web development training for over 6 months, on the
                  Front-end Web Development Nanodegree program from Udacity.
                </p>
              </div>
            </div>
            <div className={styels.myResume}>
              <a href={cv} download="Ahmed-Mohamed-Elsharkawy-resume">
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
