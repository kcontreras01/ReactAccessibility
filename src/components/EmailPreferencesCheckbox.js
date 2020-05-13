import React, { Fragment } from "react";

const EmailPreferencesCheckbox = ({ labelName }) => {
  return (
    <Fragment>
      <label>
        {labelName}:
        <label>
          Yes
          <input type="checkbox" />
        </label>
        <label>
          No
          <input type="checkbox" />
        </label>
      </label>
    </Fragment>
  );
};

export default EmailPreferencesCheckbox;