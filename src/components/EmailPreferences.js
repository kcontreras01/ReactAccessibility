import React from "react";
import UnsubscribeConfirmation from "./UnsubscribeConfirmation";

export default class EmailPreferences extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  onClickHandler = () => {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>Unsubscribe</button>
        {this.state.isOpen && <UnsubscribeConfirmation />}
        <label>
          Marketing Emails:
          <label> Yes
            <input type="checkbox"/>
          </label>
          
          <label> No
          <input type="checkbox"/>
        </label>

        </label>
        <label>
          Promo Emails:
          <label> Yes
            <input type="checkbox"/>
          </label>
          
          <label> No
          <input type="checkbox"/>
        </label>
        </label>
      </div>
    );
  }
}
