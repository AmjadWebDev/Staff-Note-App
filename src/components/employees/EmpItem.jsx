import React from "react";
//import PropTypes from 'prop-types';
//import M from 'materialize-css/dist/js/materialize.min.js';

const EmpItem = ({ staf }) => {
  // const onDelete = () => {
  //   deleteTech(id);
  //   M.toast({ html: 'Technician deleted' });
  // };

  return (
    <li className="collection-item">
      <div>
        {staf.firstName} {staf.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

// EmpItem.propTypes = {
//   tech: PropTypes.object.isRequired,
//   deleteTech: PropTypes.func.isRequired
// };

export default EmpItem;
