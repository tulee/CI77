import './FilmDetail.css';

export default function FilmDetail({movie}){
    // console.log();
    return (
        <div className="filmDetail" >
            <img className="filmPoster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
            <div className="filmTitle">{movie.original_title || movie.name}</div>
        </div>
    )
}