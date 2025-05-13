import React from 'react'
import "./Vans.css"
import { Link } from 'react-router-dom'

const Vans = () => {

const [vans, setVans] = React.useState(null); 

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


const vanElements = vans && vans.map(van => (
    <Link key={van.id}  className='detail-route' to={`/vans/${van.id}`}>
    <div className="van">
        <img src={van.imageUrl} alt={`Van ${van.name}`} className='van-img'/>

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


  return (
    <main className='vans-page'>
    <h1>Explore our van options</h1>
    <div className="filters-container">
        <button className='btn simple-type'>Simple</button>
        <button className='btn luxury-type'>Luxury</button>
        <button className='btn rugged-type'>Rugged</button>
        <button className='clear-btn'>Clear filters</button>
    </div>
    <section className='vans-list'>
        {vanElements}
    </section>
    </main>
  )
}

export default Vans