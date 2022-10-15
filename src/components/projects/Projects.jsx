import React from 'react'
import Project from './Project'
import styles from './projects.module.css'
import p1Img  from '../../assets/my-projects/booking-app/imgs/1.png';
import p2Img  from '../../assets/my-projects/proshop/imgs/1.png';
import p3Img  from '../../assets/my-projects/aesthetic/imgs/1.png';

function Projects() {
  return (
    <>
        <hr />
        <div className={styles.p}>
            <div className={styles.p_head}>
                <h2 className={styles.p_head_title}>
                    Projects List
                </h2>
                <p className={styles.p_head_desc}>
                    
                </p>
            </div>
            <div className={styles.p_list}>
                <Project name={'Booking app'} tools={['React', 'Toolkit', 'CSS', 'Date range']} link={'https://github.com/ahmed-elsharkawy/Booking-app.git'} img={p1Img}></Project>
                <Project name={'Proshop eCommerce'} tools={['React', 'Toolkit', 'Express', 'Mongoose']} link={'https://github.com/ahmed-elsharkawy/proshop.git'} img={p2Img}></Project>
                <Project name={'Aesthetic portfolio'} tools={['Html', 'Bootstrap', 'Javascript']} link={'https://github.com/ahmed-elsharkawy/aesthetic.git'} img={p3Img}></Project>
            </div>
        </div>
    </>
  )
}

export default Projects