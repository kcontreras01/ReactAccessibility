import React, { Fragment } from "react";

export default class UnsubscribeConfirmation extends React.Component {
  constructor() {
    super()

    this.unsubscribeModal = React.createRef();
  }

  componentDidMount() {
    this.unsubscribeModal.current.focus();
  }
   
  render() {
    return (
      <Fragment>
        <h2 ref={this.unsubscribeModal} tabIndex="-1">You are now unsubscribed from this mailing list</h2>
      </Fragment>
    );
  }
}