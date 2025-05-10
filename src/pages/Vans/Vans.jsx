import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./Vans.css"

const Vans = () => {

const [vans, setVans] = React.useState(null); 
console.log(vans)

React.useEffect(() => {

    const fetchData = async () => {
        try {
            const response = await fetch("/api/vans");
            if (!response.ok) throw new Error("Network response was not ok");  
            const data = await response.json()
            setVans(data.vans);  
        } catch(err) {
            console.error("Fetch error:", err); 
        }
    }

    fetchData(); 
    
}, []) 


  return (
    <>
    <Navbar/>
    <main className='vans-page'>
    <h1>Explore our van options</h1>
    <div className="filters-container">
        <button className='btn simple-type'>Simple</button>
        <button className='btn luxury-type'>Luxury</button>
        <button className='btn rugged-type'>Rugged</button>
        <button className='clear-btn'>Clear filters</button>
    </div>
    <section className='vans-list'>
        {vans &&
            vans.map(van => (
                <div key={van.id} className="van">
                    <img src={van.imageUrl} alt={`Van ${van.name}`} className='van-img'/>
                    <h2 className='van-title'>{van.name}</h2>
                    <p className='van-price'>
                        <span>
                            {`$${van.price}`}
                        </span>
                        <span>
                            /day
                        </span>
                    </p>
                    <p className={`van-type ${van.type}`}>
                        {van.type}
                    </p>
                </div>
            ))}
    </section>
    </main>
    <Footer/>
    </>
  )
}

export default Vans