import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import Preloader from "../layout/Preloader";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const getNotes = async () => {
    setLoading(true);
    const res = await fetch("/notes");
    const data = await res.json();

    setNotes(data);
    setLoading(false);
  };
  if (loading) {
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

export default Notes;
