import React, { useEffect } from "react";
import { connect } from "react-redux";

import Cafe from "./Cafe";

function CafeShowContainer({ showCafesList, cafe }) {
  useEffect(() => {
    console.log(cafe);
    // cleanup interval here
    return () => {};
  }, [cafe]);
  return (
    <div>
      <button onClick={() => showCafesList()}>Go Back</button>
      <Cafe cafe={cafe} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { cafesById } = state.cafes;
  const { cafeId } = ownProps;
  return { cafe: cafesById[cafeId] };
};

export default connect(mapStateToProps)(CafeShowContainer);
