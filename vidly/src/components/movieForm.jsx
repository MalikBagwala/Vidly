import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { saveMovie, getMovie } from "../services/movieService";
import getGenres from "../services/genreService";
class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.label("Genre ID"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Rate")
  };
  async componentDidMount() {
    const genres = await getGenres();
    this.setState({ genres });
    const id = this.props.match.params.id;
    if (id === "new") return;

    const movie = await getMovie(id);
    if (!movie) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapViewModel(movie) });
  }

  mapViewModel = movie => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  };
  doSubmit = async () => {
    const { data } = this.state;
    const newData = {
      title: data.title,
      genreId: data.genreId,
      numberInStock: data.numberInStock,
      dailyRentalRate: data.dailyRentalRate
    };
    console.log(newData);
    await saveMovie(data._id, newData);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <section className="form">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3>Register</h3>
            <form onSubmit={this.handleSubmit} className="mt-3">
              {this.renderInput("title", "Title")}
              {this.renderSelect("genreId", "Genre", this.state.genres)}
              {this.renderInput("numberInStock", "No In Stock")}
              {this.renderInput("dailyRentalRate", "Rate")}
              {this.renderButton("Save")}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieForm;
