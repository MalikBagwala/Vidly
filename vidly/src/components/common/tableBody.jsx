import React, { Component } from "react";
import _ from "lodash";
// Movies

class TableBody extends Component {
  renderData = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((movi, index) => (
          <tr key={movi._id || index}>
            {columns.map((column, index) => (
              <td key={index}>{this.renderData(movi, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
