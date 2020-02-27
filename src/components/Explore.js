import React from "react";
import CafeSearchForm from "../features/cafeSearch/CafeSearchForm";
import CafesListContainer from "../features/cafesList/CafesListContainer";
import CafeShowContainer from "../features/cafeShow/CafeShowContainer";
import { connect } from "react-redux";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import {
  setCafe,
  setDisplayType
} from "../features/displayCafes/cafesDisplaySlice";

function Explore({ setCafe, setDisplayType, cafeId, cafeLocation }) {
  const match = useRouteMatch();

  const showCafe = id => {
    setDisplayType({ displayType: "show", cafeId: id });
  };

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:cafeId`}>
          <CafeShowContainer cafeId={cafeId} />
        </Route>
        <Route path={match.path}>
          <h1>Explore</h1>
          <CafeSearchForm setCafe={setCafe} cafeLocation={cafeLocation} />
          <CafesListContainer showCafe={showCafe} cafeLocation={cafeLocation} />
        </Route>
      </Switch>
    </div>
  );
}

const actions = {
  setCafe,
  setDisplayType
};

const mapStateToProps = state => {
  const { displayType, cafeId, cafeLocation } = state.cafesDisplay;
  return { displayType, cafeId, cafeLocation };
};

export default connect(mapStateToProps, actions)(Explore);
