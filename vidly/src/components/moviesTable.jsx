import React, { Component } from "react";
import Heart from "./common/heart";
import Table from "./common/table";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movi => <Link to={`/movies/${movi._id}`}>{movi.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movi => (
        <Heart liked={movi.liked} onClick={() => this.props.onLike(movi)} />
      )
    },
    {
      key: "delete",
      content: movi => (
        <button
          onClick={() => this.props.onDelete(movi._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
