
import {Link} from 'react-router-dom'


const NotFound = () => {
  return (
    <>
    <main className="notFound-page">
        <div className="notFound-container">
        <h1>Sorry, the page you were looking for was not found😔</h1>
        <Link to={"/"}>
        <button>Return to home</button>
        </Link>
        </div>
    </main>
    </>
  )
}

export default NotFound