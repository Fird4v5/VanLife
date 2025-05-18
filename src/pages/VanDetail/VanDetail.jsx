import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { getVan } from "../../api";
import "./VanDetail.css"

const VanDetail = () => {

const params = useParams(); 
const location = useLocation(); 

const {data: van, isLoading, error} = useQuery({
    queryKey: ["van", params.id],
    queryFn: () => getVan(params.id)
})


const search = location.state?.search || "";
const type = location.state?.type || "all"; 

const loadingDisplay = isLoading && <h1 className='loading' aria-live="polite">Loading...</h1>;
const errorDisplay = error && <h1 className='loading' aria-live="assertive">There was a fetch error: {error.message}</h1>;

  return (
    <>
    <main className="van-details-page">

        <Link className="back-link" to={`..${search}`} relative="path">
        <button className="back-to-vans-btn">
        <FaArrowLeftLong className="left-arrow"/>
        Back to {type} vans
        </button>
        </Link>
        { van &&
        <div className="van-detail-container"> 
            <img className="van-detail-img" src={van.imageUrl} alt={van.name} />
            <p className={`van-type ${van.type}`}>{van.type}</p>
            <h1 className="van-detail-name">{van.name}</h1>
            <p className="van-detail-price">{`$${van.price}`}<small>/day</small></p>
            <p className="van-detail-description">{van.description}</p>
            
            <button className="orange-btn">
                Rent this van
            </button> 
        </div>}
        
        {loadingDisplay}
        {errorDisplay}
    </main>
    </>
  )
}

export default VanDetail