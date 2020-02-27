import React from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import Cafe from "./Cafe";

function CafeShowContainer({ cafesById }) {
  let history = useHistory();
  let { cafeId } = useParams();

  const cafe = cafesById[cafeId];

  const handleClick = e => {
    e.preventDefault();
    history.push("/explore/cafes");
  };
  return (
    <div>
      <button onClick={e => handleClick(e)}>Go Back</button>
      <Cafe cafe={cafe} />
    </div>
  );
}

const mapStateToProps = state => {
  const { cafesById } = state.cafes;
  return { cafesById };
};

export default connect(mapStateToProps)(CafeShowContainer);
