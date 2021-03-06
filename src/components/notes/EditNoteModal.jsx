import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditNoteModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [employee, setEmployee] = useState("");

  const onSubmit = () => {
    if (message === "" || employee === "") {
      M.toast({ html: "Please enter a message and employee" });
    } else {
      console.log(message, employee, attention);
      //clear fields
      setMessage("");
      setEmployee("");
      setAttention(false);
    }
  };

  return (
    <div id="edit-note-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter Staff Note</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <label htmlFor="message" className="active">
              Note Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select name="employee" value={employee} className="browser-default" onChange={(e) => setEmployee(e.target.value)}>
              <option value="" disabled>
                Select Employee
              </option>
              <option value="Thomas X">Thomas X</option>
              <option value="Alex Z">Alex Z</option>
              <option value="Maria H">Maria H</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={(e) => setAttention(!attention)} />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default EditNoteModal;
