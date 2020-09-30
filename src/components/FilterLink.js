import { connect } from "react-redux";
import { setVisibilityFilter } from "../redux/actionCreators";
import Link from "./Link";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
