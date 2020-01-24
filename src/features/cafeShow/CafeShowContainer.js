import React, { useEffect } from "react";
import { connect } from "react-redux";

function CafeShowContainer({ showCafesList, cafeId, cafe }) {
  useEffect(() => {
    console.log(cafe);
    // cleanup interval here
    return () => {};
  }, [cafe]);
  return (
    <div>
      <button onClick={() => showCafesList()}>Go Back</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { cafesById } = state.cafes;
  const { cafeId } = ownProps;
  return { cafe: cafesById[cafeId] };
};

export default connect(mapStateToProps)(CafeShowContainer);
