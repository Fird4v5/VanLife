import React from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./host.module.css"

const HostVanDetail = () => {

const {id} = useParams(); 
const [vanDetail, setVanDetail] = React.useState(null); 

React.useEffect(() => {

  const fetchVanDetail = async () => {
    try {
      const res = await fetch(`/api/host/vans/${id}`)
      if (!res.ok) throw new Error("Network api request was not ok"); 
      const data = await res.json(); 
      setVanDetail(data.vans); 
    } catch(err) {
      console.error("Fetch error:", err); 
    }
  }

  fetchVanDetail(); 

}, [])

const vanDetailEls = vanDetail ? 
                     <div className={styles.vanDetail}>
                        <img className={styles.vanDetailImg} src={vanDetail.imageUrl} alt={vanDetail.name} />
                        <div className={styles.vanDetailInfo}>
                          <p className={`van-type ${vanDetail.type}`}>{vanDetail.type}</p>
                          <h1 className={styles.vanDetailName}>{vanDetail.name}</h1>
                          <p className={styles.vanDetailPrice}>${vanDetail.price}/<small>day</small></p>
                        </div>
                     </div>  :
                     <h1 className='loading'>Loading...</h1>


const activeStyle = ({isActive}) => isActive ? "nav-link active" : "nav-link";                    

  return (
    <>
    <div className={styles.vanDetailWrapper}>
    <Link className="back-link" to={".."} relative="path">
        <button className="back-to-vans-btn" aria-label='back-button'>
        <FaArrowLeftLong className="left-arrow"/>
        Back to all vans
        </button>
    </Link>
    <main className={styles.hostVansDetailPage}>
  
      {vanDetailEls}

      <nav className="nav">
        <ul className={`nav-list ${styles.vanDetailNavList}`}>
          <li><NavLink end to="." className={activeStyle}>Details</NavLink></li>
          <li><NavLink to="pricing" className={activeStyle}>Pricing</NavLink></li>
          <li><NavLink to="photos" className={activeStyle}>Photos</NavLink></li>
        </ul>
      </nav>
      { vanDetail && <Outlet context={vanDetail}/>}
    </main>
    </div>
    </>
  )
}

export default HostVanDetail