import React from "react";
import UnsubscribeConfirmation from "./UnsubscribeConfirmation";
import EmailPreferencesCheckbox from "./EmailPreferencesCheckbox";

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
      <div className="unsubscribe-settings">
        <div id="unsubscribe-content">
        <button onClick={this.onClickHandler}>Unsubscribe</button>
        {this.state.isOpen && <UnsubscribeConfirmation />}

        <EmailPreferencesCheckbox labelName="Marketing Emails"/>
        <EmailPreferencesCheckbox labelName="Promo Emails"/>
      </div>
      </div>
    );
  }
}
