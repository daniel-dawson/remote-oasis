import React, { useEffect } from "react";
import { connect } from "react-redux";
import { startPolling, stopPolling } from "../favorites/favorites";
import { postFavorite } from "../../api/api";

import Cafe from "./Cafe";

import { usePreviouslyMountedEffect } from "../../hooks/usePreviouslyMountedEffect";
import { fetchCafes } from "./cafesSlice";

function CafesListContainer({
  showCafe,
  fetchCafes,
  cafeLocation,
  isLoading,
  error,
  cafes,
  favoritesById,
  startPolling,
  stopPolling
}) {
  let trimmedCafeLocation = cafeLocation.trim();
  useEffect(() => {
    startPolling();
    return () => {
      stopPolling();
    };
  }, []);
  // Will not run on first render/mount
  usePreviouslyMountedEffect(() => {
    if (trimmedCafeLocation.length !== 0) {
      fetchCafes(trimmedCafeLocation);
    }
    // eslint-disable-next-line
  }, [trimmedCafeLocation]);

  function handleRecommendation(e, data) {
    e.preventDefault();
    postFavorite(data);
  }

  let content;

  // TODO Separate these into functions
  if (isLoading === true) {
    content = <div>Loading...</div>;
  } else if (error !== null) {
    content = <div>{error}</div>;
  } else if (cafes.length === 0 || cafeLocation.trim().length === 0) {
    content = <div>Enter a location to get started</div>;
  } else {
    // TODO Replace with CafeList component
    content = (
      <>
        {cafes.map(cafe => (
          <Cafe
            key={cafe.id}
            showCafe={showCafe}
            cafe={cafe}
            favoritesById={favoritesById}
            recommendCafe={handleRecommendation}
          />
        ))}
      </>
    );
  }

  return <div>{content}</div>;
}

const actions = {
  fetchCafes,
  startPolling,
  stopPolling
};

const mapStateToProps = state => {
  const { isLoading, error, cafes } = state.cafes;
  const { favoritesById } = state.favorites;
  return { isLoading, error, cafes, favoritesById };
};

export default connect(mapStateToProps, actions)(CafesListContainer);
