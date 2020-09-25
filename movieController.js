import { render } from "pug";
import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  if (movies.length !== 0) {
    res.render("movies", { pageTitle: "Movies!", title: "Movies!", movies });
  } else {
    res.render("404");
  }
};

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const movie = getMovieById(id);
  if (movie) {
    res.render("detail", { pageTitle: movie.title, movie });
  } else {
    res.render("404");
  }
};

export const filterMovie = (req, res) => {
  let movies = [];
  if (req.query.rating != null) {
    movies = getMovieByMinimumRating(parseFloat(req.query.rating));
    res.render("movies", {
      pageTitle: `Search(rating${req.query.rating})`,
      title: `Searcing by rating : ${req.query.rating}`,
      movies,
    });
  } else if (req.query.year != null) {
    movies = getMovieByMinimumYear(parseInt(req.query.year, 10));
    res.render("movies", {
      pageTitle: `Search(year${req.query.year})`,
      title: `Searcing by year : ${req.query.year}`,
      movies,
    });
  } else {
    res.render("404");
  }
};
