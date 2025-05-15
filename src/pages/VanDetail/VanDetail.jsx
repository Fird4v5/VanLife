import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import "./VanDetail.css"

const VanDetail = () => {

const [van, setVan] = React.useState(); 
const params = useParams(); 
const location = useLocation(); 

React.useEffect(() => {
    const fetchVanDetails = async () => {
        try {
            const res = await fetch(`/api/vans/${params.id}`);
            if (!res.ok) throw new Error("Network request was not ok"); 
            const data = await res.json(); 
            setVan(data.vans); 
        } catch(err) {
            console.error("Fetch error:", err); 
        }
    }
    fetchVanDetails(); 

}, [params.id])

const search = location.state?.search || "";
const type = location.state?.type || "all"; 

  return (
    <>
    <main className="van-details-page">
        <Link className="back-link" to={`..${search}`} relative="path">
        <button className="back-to-vans-btn">
        <FaArrowLeftLong className="left-arrow"/>
        Back to {type} vans
        </button>
        </Link>
        { van ?
        <div className="van-detail-container"> 
            <img className="van-detail-img" src={van.imageUrl} alt={van.name} />
            <p className={`van-type ${van.type}`}>{van.type}</p>
            <h1 className="van-detail-name">{van.name}</h1>
            <p className="van-detail-price">{`$${van.price}`}<small>/day</small></p>
            <p className="van-detail-description">{van.description}</p>
            
            <button className="orange-btn">
                Rent this van
            </button> 
        </div> :
        <h1 className="loading">Loading...</h1>
        }
    </main>
    </>
  )
}

export default VanDetail