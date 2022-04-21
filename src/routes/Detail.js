import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoding] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(() => {
      return json.data.movie;
    });
    console.log(json);
    setLoding(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Detail Loding...</h1>
      ) : (
        <div>
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
