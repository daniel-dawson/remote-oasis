import React, { useEffect } from "react";
import { connect } from "react-redux";

import Cafe from "./Cafe";

import { usePreviouslyMountedEffect } from "../../hooks/usePreviouslyMountedEffect";
import { fetchCafes } from "./cafesSlice";

function CafesListContainer({
  showCafe,
  fetchCafes,
  location,
  isLoading,
  error,
  cafes
}) {
  usePreviouslyMountedEffect(() => {
    if (location.trim().length !== 0) {
      fetchCafes(location);
    }
    // eslint-disable-next-line
  }, [location]);

  let content;

  if (isLoading === true) {
    content = <div>Loading...</div>;
  } else if (error !== null) {
    content = <div>Error. Try again.</div>;
  } else if (cafes.length === 0 || location.trim().length === 0) {
    content = <div>Enter a location to get started</div>;
  } else {
    // TODO Replace with CafeList component
    content = cafes.map(cafe => (
      <Cafe key={cafe.id} showCafe={showCafe} cafe={cafe} />
    ));
  }

  return <div>{content}</div>;
}

const actions = {
  fetchCafes
};

const mapStateToProps = state => {
  // console.log("TCL: state", state.cafes);

  const { isLoading, error, cafes } = state.cafes;
  return { isLoading, error, cafes };
  // return {};
};

export default connect(
  mapStateToProps,
  actions
)(React.memo(CafesListContainer));
