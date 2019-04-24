import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const {
      items,
      textProperty,
      valueProperty,
      onItemSelect,
      selectedGenre
    } = this.props;
    return (
      <ul className="list-group">
        {items.map(genre => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => onItemSelect(genre)}
            key={genre[valueProperty]}
            className={
              genre === selectedGenre
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
export default ListGroup;
