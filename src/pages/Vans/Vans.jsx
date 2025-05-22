import React from 'react'
import "./Vans.css"
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../components/Spinner/Spinner'

const Vans = () => {
const [searchParams, setSearchParams] = useSearchParams(); 

const typeFilter = searchParams.get("type")

const { data: vans, isLoading, error } = useQuery({
    queryKey: ["vans"],
    queryFn: getVans
});


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

const loadingDisplay = isLoading && <Spinner className='loading' />;
const errorDisplay = error && <h1 className='loading' aria-label='assertive'>There was a fetch error: {error.message}</h1>;


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

        
    {loadingDisplay}
    {errorDisplay}

    <section className='vans-list'>
        {vanElements}
    </section>
    </main>
  )
}

export default Vans