import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { deleteNote, setCurrent } from "../../actions/noteActions";
import { connect } from "react-redux";

import M from "materialize-css/dist/js/materialize.min.js";

const NoteItem = ({ note, deleteNote, setCurrent }) => {
  const onDelete = () => {
    deleteNote(note.id);
    M.toast({ html: "Note Deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a href="#edit-note-modal" className={`modal-trigger ${note.attention ? "red-text" : "blue-text"}`} onClick={() => setCurrent(note)}>
          {note.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{note.id}</span> last updated by <span className="black-text">{note.employee} </span>
          <Moment format="MMMM Do YYYY, h:mm:ss a">{note.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};
export default connect(null, { deleteNote, setCurrent })(NoteItem);
