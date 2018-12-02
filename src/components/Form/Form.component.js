import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';

class FormComponent extends Component {
  static propTypes = {
    children: T.node.isRequired,
    onSubmit: T.func.isRequired
  };

  static defaultProps = {};

  state = {
    isSubmitting: false
  };

  handleSubmit = (evt) => {
    // don't allow double submission
    if (this.state.isSubmitting) {
      return;
    }

    this.setState({
      isSubmitting: true
    });

    const promise = new Promise(this.props.onSubmit);

    promise.finally(() => {
      this.setState({
        isSubmitting: false
      });
    });

    evt.preventDefault();
  };

  render() {
    const { children } = this.children;
    return (
      <form onSubmit={this.handleSubmit}>
        {children}
      </form>
    );
  }
}

export default FormComponent;