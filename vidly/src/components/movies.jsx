import React, { Component } from "react";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import getGenres from "../services/genreService";
import { getMovies, deleteMovie } from "../services/movieService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";
import { toast } from "react-toastify";
class Movies extends Component {
  state = {
    movies: [],
    genres: [{ _id: 1234, name: "All Movies" }], //, ...getGenres()],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: { _id: 1234, name: "All Movies" },
    sortColumn: { path: "title", order: "asc" }
  };
  async componentDidMount() {
    const genres = await getGenres();
    const movies = await getMovies();
    const NewGenres = [...this.state.genres, ...genres];
    this.setState({ movies, genres: NewGenres });
  }
  handleDelete = async id => {
    const originalMovies = [...this.state.movies];
    const movies = this.state.movies.filter(m => m._id !== id);
    try {
      await deleteMovie(id);
    } catch (ex) {
      console.log(ex.response);
      if (ex.response && ex.response.status === 404) {
        toast("Movie is deleted already");
      }
      this.setState({ movies: originalMovies });
    }

    this.setState({ movies: movies });
  };

  handleLike = movi => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movi);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    console.log(this.state.selectedGenre.name);
    this.setState({ searchQuery: "", selectedGenre: genre, currentPage: 1 });
  };
  handleSearch = query => {
    this.setState({
      searchQuery: query,
      selectedGenre: { _id: 1234, name: "All Movies" },
      currentPage: 1
    });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      selectedGenre,
      sortColumn,
      searchQuery,
      movies: allMovies
    } = this.state;
    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filtered =
        selectedGenre.name !== "All Movies"
          ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
          : allMovies;
    }
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    if (count === 0) return <p className="mx-auto">No Movies Available</p>;
    return (
      <section className="container p-5">
        <div className="row">
          <div className="col-md-2">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedGenre={selectedGenre}
            />
          </div>
          <div className="col-md-10">
            <Link to="/movies/new" className="btn btn-primary mb-3">
              New Movie
            </Link>
            <p>Showing {filtered.length} movies</p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={filtered.length}
              onPageChange={this.handlePageChange}
              pageSize={pageSize}
              currentPage={currentPage}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Movies;
