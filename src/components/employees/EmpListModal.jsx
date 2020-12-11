import React, { useState, useEffect } from "react";
import EmpItem from "./EmpItem";

const EmpListModal = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line
  }, []);

  const getEmployees = async () => {
    setLoading(true);
    const res = await fetch("/staff");
    const data = await res.json();

    setEmployees(data);
    setLoading(false);
  };

  return (
    <div id="list" className="modal">
      <div className="modal-content">
        <h4>Staff List</h4>
        <ul className="collection">{!loading && employees.map((staf) => <EmpItem staf={staf} key={staf.id} />)}</ul>
      </div>
    </div>
  );
};

export default EmpListModal;
