import React from 'react'
import styles from './Dashboard.module.css'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getHostVans } from '../../../api'
import Spinner from '../../../components/Spinner/Spinner'

const Dashboard = () => {


  const { data: hostVans, isLoading, error } = useQuery({
      queryKey: ["hostVans"],
      queryFn: () => getHostVans()
  })
  
  const hostVanEls = hostVans && hostVans.map(hostVan => (
          <div key={hostVan.id} className={styles.hostVanContainer}>
              <div className={styles.hostVan}>
              <img className={styles.hostVanImg} src={hostVan.imageUrl} alt={hostVan.name} />
              <div className='hostVanInfo'>
              <h2 className={styles.hostVanName}>{hostVan.name}</h2>
              <p className={styles.hostVanPrice}>${hostVan.price}/<small>day</small></p>
              </div>
              </div>
              <Link to={`vans/${hostVan.id}`} className={styles.editLink}>Edit</Link>
          </div>
  )); 
  
  
  const loadingDisplay = isLoading && <Spinner/>;
  const errorDisplay = error && <h1 className='loading' aria-label='assertive'>There was a fetch error: {error.message}</h1>;
  


  return (
    <main className={styles.dashboardPage}>
      <div className={styles.incomeHeader}>
        <div>
          <h1>Welcome!</h1>
          <p className='lastDays'>Income last <u>30 days</u></p>
          <h2>$2.2k</h2>
        </div>
        <Link className={styles.dashboardLink} to={"income"}>Details</Link>
      </div>
      <div className={styles.reviewHeader}>
        <div>
          <h2>Review score</h2>
          <span className='starIcon'>★</span>
          <p>5.0<u>/5</u></p>
        </div>
        <Link className={styles.dashboardLink} to={"reviews"}>Details</Link>
      </div>
      <div className={styles.headerHostVans}>
        <div className={styles.headerHostVansTitle}>
         <h2>Your listed vans</h2>
         <Link className={styles.dashboardLink} to={"vans"}>View all</Link>
         </div>
                {hostVanEls}
                {loadingDisplay}
                {errorDisplay}
      </div>
    </main>
  )
}

export default Dashboard