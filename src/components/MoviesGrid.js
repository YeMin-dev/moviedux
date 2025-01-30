import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import FilterSlot from "./FilterSlot";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearchChange = (inputValue) => {
    setSearchTerm(inputValue);
  };

  const handleGenreChange = (inputValue) => {
    setGenre(inputValue);
  };

  const handleRatingChange = (inputValue) => {
    setRating(inputValue);
  };

  const matchGenre = (movie, genre) =>
    genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();

  const matchSearchTerm = (movie, searchTerm) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase());

  const matchRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchSearchTerm(movie, searchTerm) &&
      matchGenre(movie, genre) &&
      matchRating(movie, rating)
  );

  return (
    <>
      <SearchBar handleSearchChange={handleSearchChange} />

      <div className="filter-bar">
        <FilterSlot
          label="Genre"
          optionList={["All Genres", "Action", "Drama", "Fantasy", "Horror"]}
          handleFilterChange={handleGenreChange}
        />
        <FilterSlot
          label="Rating"
          optionList={["All", "Good", "Ok", "Bad"]}
          handleFilterChange={handleRatingChange}
        />
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
