import "../css/Card.css"

export const Card =({movie}) =>
{
    if (!movie) return null;
    return(
        <>
            <div className="card-body">
                <h3 className="card-header">{movie.title}</h3>
                <p className="card-info">{movie.overview}</p>
                <img className="card-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />            </div>
        </>
    )
}