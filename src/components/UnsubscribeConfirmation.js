import React from "react";

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
      <div>
        <h2 ref={this.unsubscribeModal} tabIndex="-1">hihi</h2>
      </div>
    );
  }
}
