import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./host.module.css"

const HostVans = () => {

const [hostVans, setHostVans] = React.useState([])

React.useEffect(() => {

    const fetchHostVans = async () => {
        try {
            const response = await fetch("/api/host/vans");
            if (!response.ok) throw new Error("Network response was not ok");  
            const data = await response.json()
            setHostVans(data.vans);  
        } catch(err) {
            console.error("Fetch error:", err); 
        }
    }

    fetchHostVans(); 
    
}, []) 

const hostVanEls = hostVans ? hostVans.map(hostVan => (
    <Link to={hostVan.id} key={hostVan.id} className={styles.hostVanLink}>
        <div className={styles.hostVan}>
            <img className={styles.hostVanImg} src={hostVan.imageUrl} alt={hostVan.name} />
            <div className='hostVanInfo'>
            <h2 className={styles.hostVanName}>{hostVan.name}</h2>
            <p className={styles.hostVanPrice}>${hostVan.price}/<small>day</small></p>
            </div>
        </div>
    </Link>
)) : <h1 className="loading">Loading...</h1>; 


  return (
    <main className={styles.hostVansPage}>
        <h1 className={styles.hostVansPageTitle}>Your listed vans</h1>
        {hostVanEls}
    </main>
  )
}

export default HostVans