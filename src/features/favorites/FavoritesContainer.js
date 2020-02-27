import React, { useEffect } from "react";
import { connect } from "react-redux";
import { startPolling, stopPolling } from "./favorites";
import FavoritesList from "./FavoritesList";

function FavoritesContainer({ startPolling, stopPolling, favorites }) {
  useEffect(() => {
    startPolling();
    return () => {
      stopPolling();
    };
  }, []);
  return (
    <div>
      <FavoritesList favorites={favorites} />
    </div>
  );
}

const actions = {
  startPolling,
  stopPolling
};

const mapStateToProps = state => {
  const { favorites } = state.favorites;
  return { favorites };
};

export default connect(mapStateToProps, actions)(FavoritesContainer);
