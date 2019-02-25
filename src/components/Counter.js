import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="container mt-5">
      <div className="jumbotron d-flex justify-content-center align-items-center">
        <div className="wrapper">
          <h1 className="display-1 text-center">{counter}</h1>
          <button className="btn btn-primary btn-lg mr-3" onClick={dec}>
            Decrement
          </button>
          <button className="btn btn-primary btn-lg mr-3" onClick={rnd}>
            <strong>+ / -</strong>&nbsp;random value
          </button>
          <button className="btn btn-primary btn-lg" onClick={inc}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actions, dispatch);
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);

export default connect(
  mapStateToProps,
  actions
)(Counter);
