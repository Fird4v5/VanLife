import React from 'react'
import { useOutletContext } from 'react-router-dom'
import styles from "./host.module.css"

const HostVanPricing = () => {

const {price} = useOutletContext(); 


  return (
    <section className={styles.pricingSection}>
        <p><b>${price}</b>/<small>day</small></p>
    </section>
  )
}

export default HostVanPricing