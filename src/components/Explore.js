import React from "react";
import CafeSearchForm from "../features/cafeSearch/CafeSearchForm";
import CafesListContainer from "../features/cafesList/CafesListContainer";
import CafeShowContainer from "../features/cafeShow/CafeShowContainer";
import { connect } from "react-redux";

import {
  setCafe,
  setDisplayType
} from "../features/displayCafes/cafesDisplaySlice";

function Explore({ setCafe, setDisplayType, displayType, cafeId, location }) {
  const showCafesList = () => {
    setDisplayType({ displayType: "index" });
  };

  const showCafe = id => {
    setDisplayType({ displayType: "show", cafeId: id });
  };

  let content;
  if (displayType === "index") {
    content = (
      <>
        <CafeSearchForm setCafe={setCafe} location={location} />
        <CafesListContainer showCafe={showCafe} location={location} />
      </>
    );
  } else if (cafeId !== null) {
    content = (
      <CafeShowContainer showCafesList={showCafesList} cafeId={cafeId} />
    );
  }

  return (
    <div>
      <h1>Explore</h1>
      {content}
    </div>
  );
}

const actions = {
  setCafe,
  setDisplayType
};

const mapStateToProps = state => {
  const { displayType, cafeId, location } = state.cafesDisplay;
  return { displayType, cafeId, location };
};

export default connect(mapStateToProps, actions)(Explore);
