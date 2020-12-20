import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EmpItem from "./EmpItem";
import { getStaff } from "../../actions/staffActions";

const EmpListModal = ({ staff: { stafs, loading }, getStaff }) => {
  useEffect(() => {
    getStaff();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="list" className="modal">
      <div className="modal-content">
        <h4>Staff List</h4>
        <ul className="collection">{!loading && stafs !== null && stafs.map((staf) => <EmpItem staf={staf} key={staf.id} />)}</ul>
      </div>
    </div>
  );
};

EmpListModal.propTypes = {
  staff: PropTypes.object.isRequired,
  getStaff: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  staff: state.staff,
});
export default connect(mapStateToProps, { getStaff })(EmpListModal);
