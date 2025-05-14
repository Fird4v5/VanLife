import React from 'react'
import { useOutletContext } from 'react-router-dom'
import styles from "./host.module.css"

const HostVanInfo = () => {

const {name, type, description} = useOutletContext(); 


  return (
    <section className={styles.infoSection}>
        <p><b>Name:</b> {name}</p>
        <p><b>Category:</b> {type}</p>
        <p><b>Description:</b> {description}</p>
        <p><b>Visibility:</b> Public</p>
    </section>
  )
}

export default HostVanInfo