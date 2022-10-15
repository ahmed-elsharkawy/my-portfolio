import React from 'react'
import styles from './project.module.css';


function Project({name, tools, link, img}) {
  return (
    <>
        <div className={styles.one_p}>
            <img src={img} alt="" />
            <div className={styles.one_p_back_drop}>
                <h5 className={styles.one_p_back_drop_title}>
                    {name}
                </h5>
                <div className={styles.one_p_back_drop_tech}>
                    {tools && tools.map(item => {
                        return(
                            <p>{item}</p>
                        )
                    })}
                </div>
                <a href={link}><button className={styles.one_p_back_drop_btn}>Source Code</button></a>
            </div>
        </div>
    </>
  )
}

export default Project