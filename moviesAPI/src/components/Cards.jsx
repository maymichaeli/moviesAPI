import { Card } from './Card.jsx'
import "../css/Cards.css"


export const Cards = ({movies}) =>{
    return(
        <div className="cards-container">
            {movies.length >0 ? (
                movies.map( movie =>
                    <Card key={movie.id} movie={movie} />
                )
            ) : ( <p>No movie found </p> )}
        </div>
    )
}