import React from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useQuery } from '@tanstack/react-query';
import { getVan } from '../../../api';
import styles from "./host.module.css"



const HostVanDetail = () => {

  const { id } = useParams(); 

  const { data: vanDetail, isLoading, error } = useQuery({
    queryKey: ["vanDetail", id], 
    queryFn: () => getVan(id)
  })

  const vanDetailEls = vanDetail &&
    <div className={styles.vanDetail}>
      <img className={styles.vanDetailImg} src={vanDetail.imageUrl} alt={vanDetail.name} />
      <div className={styles.vanDetailInfo}>
        <p className={`van-type ${vanDetail.type}`}>{vanDetail.type}</p>
        <h1 className={styles.vanDetailName}>{vanDetail.name}</h1>
        <p className={styles.vanDetailPrice}>${vanDetail.price}/<small>day</small></p>
      </div>
    </div>

  const activeStyle = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  return (
    <div className={styles.vanDetailWrapper}>
      <Link className="back-link" to={".."} relative="path">
        <button className="back-to-vans-btn" aria-label='back-button'>
          <FaArrowLeftLong className="left-arrow" />
          Back to all vans
        </button>
      </Link>

      <main className={styles.hostVansDetailPage}>
        {isLoading && <h1 className='loading' aria-label='polite'>Loading...</h1>}
        {error && <h1 className='loading' aria-label='assertive'>There was a fetch error: {error.message}</h1>}

        {vanDetail && (
          <>
            {vanDetailEls}

            <nav className="nav">
              <ul className={`nav-list ${styles.vanDetailNavList}`}>
                <li><NavLink end to="." className={activeStyle}>Details</NavLink></li>
                <li><NavLink to="pricing" className={activeStyle}>Pricing</NavLink></li>
                <li><NavLink to="photos" className={activeStyle}>Photos</NavLink></li>
              </ul>
            </nav>
            <Outlet context={vanDetail} />
          </>
        )}
      </main>
    </div>
  )
}

export default HostVanDetail
