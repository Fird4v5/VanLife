import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import styles from "./host.module.css"


const fetchHostVans = async () => {
    const res = await fetch('/api/host/vans')
    if (!res.ok) throw new Error("Failed to fetch host vans")
    const data = await res.json()
    return data.vans
}


const HostVans = () => {

const { data: hostVans, isLoading, error } = useQuery({
    queryKey: ["hostVans"],
    queryFn: () => fetchHostVans()
})

const hostVanEls = hostVans && hostVans.map(hostVan => (
    <Link to={hostVan.id} key={hostVan.id} className={styles.hostVanLink}>
        <div className={styles.hostVan}>
            <img className={styles.hostVanImg} src={hostVan.imageUrl} alt={hostVan.name} />
            <div className='hostVanInfo'>
            <h2 className={styles.hostVanName}>{hostVan.name}</h2>
            <p className={styles.hostVanPrice}>${hostVan.price}/<small>day</small></p>
            </div>
        </div>
    </Link>
)); 

const loadingDisplay = isLoading && <h1 className='loading' aria-label='polite'>Loading...</h1>;
const errorDisplay = error && <h1 className='loading' aria-label='assertive'>There was a fetch error: {error.message}</h1>;


  return (
    <main className={styles.hostVansPage}>
        <h1 className={styles.hostVansPageTitle}>Your listed vans</h1>
        {hostVanEls}
        {loadingDisplay}
        {errorDisplay}
    </main>
  )
}

export default HostVans