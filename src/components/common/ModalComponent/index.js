import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import propTypes from 'prop-types';

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Button color="link" onClick={this.toggle} className={this.props.modalTriggerButtonClass}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.modalClass}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.modalContent}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Remove</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

ModalComponent.propTypes = {
  toggle: propTypes.func,
  modalTriggerButtonClass: propTypes.string,
  buttonLabel: propTypes.string,
  modalContent: propTypes.string,
  modalClass: propTypes.string
}

export default ModalComponent;