import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const NoteItem = ({ note }) => {
  return (
    <li className="collection-item">
      <div>
        <a href="#edit-note-modal" className={`modal-trigger ${note.attention ? "red-text" : "blue-text"}`}>
          {note.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{note.id}</span> last updated by <span className="black-text">{note.employee} </span>
          <Moment format="MMMM Do YYYY, h:mm:ss a">{note.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
};
export default NoteItem;
