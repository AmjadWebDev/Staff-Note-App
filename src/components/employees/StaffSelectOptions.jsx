import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getStaff } from "../../actions/staffActions";

const StaffSelectOptions = ({ staff: { stafs, loading }, getStaff }) => {
  useEffect(() => {
    getStaff();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    stafs !== null &&
    stafs.map((staf) => (
      <option key={staf.id} value={`${staf.firstName} ${staf.lastName}`}>
        {staf.firstName} {staf.lastName}
      </option>
    ))
  );
};

StaffSelectOptions.propTypes = {
  staff: PropTypes.object.isRequired,
  getStaff: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  staff: state.staff,
});

export default connect(mapStateToProps, { getStaff })(StaffSelectOptions);
