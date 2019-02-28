import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: {}
    };
    this.setActiveElement = this.setActiveElement.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { accordionData } = nextProps;
    const activeId = {};
    accordionData.forEach(eachObject => {
      activeId[eachObject.name] = false;
    });
    this.setState({
      activeId
    });
  }

  setActiveElement(id) {
    const activeId = this.state.activeId;
    activeId[id] = !activeId[id];
    this.setState({
      activeId
    });
  }

  renderGrandChildren(data) {
    return (
      <div
        className="accordion-grand-children"
        onClick={this.props.onClickAccordion.bind(this, data.id)}
      >
        {data.name}
      </div>
    );
  }

  renderChildren(data) {
    return <div className ="accordion-children"> {data.name} </div>
}

  render() {
    const { accordionData } = this.props;
    return (
      <section className="accordion">
          {accordionData.map((eachObject, index) => {
            return (
              <React.Fragment key={eachObject.id}>
                {eachObject.parent == 0 ? (
                  <div className="accordion-parent">{eachObject.name}</div>
                ) : (eachObject.parent - accordionData[index - 1].parent) == accordionData[index - 1].id ? 
                (this.renderChildren(eachObject)) : ( this.renderGrandChildren(eachObject))}
              </React.Fragment>
            );
          })}
      </section>
    );
  }
}

Accordion.propTypes = {
  accordionData: PropTypes.array.isRequired,
  onClickAccordion: PropTypes.func.isRequired
};

export default Accordion;
