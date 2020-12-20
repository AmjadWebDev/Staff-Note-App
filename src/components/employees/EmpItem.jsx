import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteStaff } from "../../actions/staffActions";
import M from "materialize-css/dist/js/materialize.min.js";

const EmpItem = ({ staf, deleteStaff }) => {
  const onDelete = () => {
    deleteStaff(staf.id);
    M.toast({ html: "Employee deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        {staf.firstName} {staf.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

EmpItem.propTypes = {
  staf: PropTypes.object.isRequired,
  deleteStaff: PropTypes.func.isRequired,
};

export default connect(null, { deleteStaff })(EmpItem);
