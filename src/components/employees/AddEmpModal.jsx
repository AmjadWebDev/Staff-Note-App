import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addStaff } from "../../actions/staffActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddEmpModal = ({ addStaff }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      addStaff({ firstName, lastName });
      M.toast({ html: `${firstName} ${lastName} was added as a new employee` });
      //clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-emp-modal" className="modal">
      <div className="modal-content">
        <h4>New Employee</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <label htmlFor="firstname" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input type="text" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label htmlFor="lastname" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">
          Enter
        </a>
      </div>
    </div>
  );
};

AddEmpModal.propTypes = {
  addStaff: PropTypes.func.isRequired,
};

export default connect(null, { addStaff })(AddEmpModal);
