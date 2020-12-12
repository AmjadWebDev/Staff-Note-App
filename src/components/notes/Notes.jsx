import React, { useEffect } from "react";
import { connect } from "react-redux";
import NoteItem from "./NoteItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getNotes } from "../../actions/noteActions";

const Notes = ({ note: { notes, loading }, getNotes }) => {
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  if (loading || notes === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Staff Notes</h4>
      </li>
      {!loading && notes.length === 0 ? <p className="center">No Notes to Show...</p> : notes.map((note) => <NoteItem note={note} key={note.id} />)}
    </ul>
  );
};

Notes.propTypes = {
  note: PropTypes.object.isRequired,
  getNotes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  note: state.note,
});

export default connect(mapStateToProps, { getNotes })(Notes);
