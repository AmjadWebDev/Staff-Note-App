import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Notes from "./components/notes/Notes";
import AddBtn from "./components/layout/AddBtn";
import AddNoteModal from "./components/notes/AddNoteModal";
import EditNoteModal from "./components/notes/EditNoteModal";
import AddEmpModal from "./components/employees/AddEmpModal";
import EmpListModal from "./components/employees/EmpListModal";

const App = () => {
  useEffect(() => {
    // init Materialize js
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddNoteModal />
        <EditNoteModal />
        <AddEmpModal />
        <EmpListModal />
        <Notes />
      </div>
    </Fragment>
  );
};

export default App;
