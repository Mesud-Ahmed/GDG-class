const Favourites = ({ favouriteMovies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        
      {favouriteMovies.length == 0 ? <p>you have no favourites</p>:(favouriteMovies?.map((movie) => (
        <div key={movie.id} className="">
          
          <img
            className="w-full rounded-md"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      )))}
    </div>
  );
};

export default Favourites;
