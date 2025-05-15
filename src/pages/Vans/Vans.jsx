import React from 'react'
import "./Vans.css"
import { Link, useSearchParams } from 'react-router-dom'

const Vans = () => {

const [vans, setVans] = React.useState(null); 
const [searchParams, setSearchParams] = useSearchParams(); 

const typeFilter = searchParams.get("type")

React.useEffect(() => {

    const fetchVans = async () => {
        try {
            const response = await fetch("/api/vans");
            if (!response.ok) throw new Error("Network response was not ok");  
            const data = await response.json()
            setVans(data.vans);  
        } catch(err) {
            console.error("Fetch error:", err); 
        }
    }

    fetchVans(); 
    
}, []) 

const filteredVans = typeFilter &&
                     vans ? vans.filter(van => van.type === typeFilter) :
                     vans; 


const vanElements = vans && filteredVans.map(van => (
    <Link 
    key={van.id}  
    className='van-link' 
    to={van.id}
    state={{search: `?${searchParams.toString()}`, type: typeFilter}}>

    <div className="van">
        <img src={van.imageUrl} alt={van.name} className='van-img'/>

        <h2 className='van-title'>{van.name}</h2>
        <p className='van-price'>
            <span>{`$${van.price}`}</span>
            <span>/day</span>
        </p>
        <p className={`van-type ${van.type}`}>
            {van.type}
        </p>
    </div>

    </Link>
));

const handleFilterChange = (key, value) => {
    setSearchParams((prevParam) => {
    if (value === null) {
        prevParam.delete(key)
    } else {
        prevParam.set(key, value)
    }

    return prevParam; 
}); 
}

  return (
    <main className='vans-page'>
    <h1>Explore our van options</h1>
    <div className="filters-container">
        <button className={`btn simple-type ${typeFilter === "simple" ? "selected" : ""}`}
                onClick={() => handleFilterChange("type", "simple")}
        >
            Simple
        </button>
        <button className={`btn luxury-type ${typeFilter === "luxury" ? "selected" : ""}`}
                onClick={() => handleFilterChange("type", "luxury")}>
            Luxury
        </button>
        <button className={`btn rugged-type ${typeFilter === "rugged" ? "selected" : ""}`}
                onClick={() => handleFilterChange("type", "rugged")}>
            Rugged
        </button>

        { typeFilter && 
        <button className='clear-btn'
                onClick={() => handleFilterChange("type", null)}>
            Clear filters
        </button>
        }
    </div>
    <section className='vans-list'>
        {vanElements}
    </section>
    </main>
  )
}

export default Vans