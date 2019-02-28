import React, { Component } from "react";
import "./index.scss";
import propTypes from 'prop-types';

class ListComponent extends Component {
  render() {
    const { listData, className, listHeader } = this.props;
    return (
      <div className={className}>
      <p className="list-header">{listHeader}</p>
        {listData ? (
          <ul className="custom-list">
            {listData.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

ListComponent.propTypes = {
  listData: propTypes.object,
  className: propTypes.string,
  listHeader: propTypes.string
}

export default ListComponent;
