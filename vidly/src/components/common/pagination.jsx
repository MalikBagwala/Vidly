import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
class Pagination extends Component {
  render() {
    const { pageSize, itemsCount, currentPage, onPageChange } = this.props;
    const noOfPages = Math.ceil(itemsCount / pageSize);
    if (noOfPages === 1) return [];
    const pages = _.range(1, noOfPages + 1);
    return (
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
export default Pagination;
