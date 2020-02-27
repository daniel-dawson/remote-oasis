import React, { useEffect } from "react";
import { connect } from "react-redux";
import { startPolling, stopPolling } from "./favorites";
import FavoritesList from "./FavoritesList";

function FavoritesContainer({
  startPolling,
  stopPolling,
  favorites,
  favoritesById
}) {
  useEffect(() => {
    startPolling();
    return () => {
      stopPolling();
    };
  }, []);
  return (
    <div>
      <FavoritesList favorites={favorites} favoritesById={favoritesById} />
    </div>
  );
}

const actions = {
  startPolling,
  stopPolling
};

const mapStateToProps = state => {
  const { favorites, favoritesById } = state.favorites;
  return { favorites, favoritesById };
};

export default connect(mapStateToProps, actions)(FavoritesContainer);
