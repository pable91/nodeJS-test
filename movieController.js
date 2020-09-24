import { render } from "pug";
import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movies", { pageTitle: "Movies!", title: "Movies!", movies });
};

export const movieDetail = (req, res) => {
  const movie = getMovieById(req.params.id);
  res.render("detail", { pageTitle: movie.title, movie });
};

export const filterMovie = (req, res) => {};
