import React from 'react'
import { useOutletContext } from 'react-router-dom'
import styles from "./host.module.css"


const HostVanPhotos = () => {

const {imageUrl, name} = useOutletContext(); 

  return (
    <section className={styles.photosSection}>
    <img src={imageUrl} alt={name} />
    </section>
  )
}

export default HostVanPhotos