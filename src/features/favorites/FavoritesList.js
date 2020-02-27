import React from "react";
import Favorite from "./Favorite";

export default function FavoritesList({ favorites }) {
  return (
    <div>
      <h1>Recommendations</h1>
      {favorites.length > 0 ? (
        favorites.map(favorite => (
          <Favorite key={favorite.id} favorite={favorite} />
        ))
      ) : (
        <p>No recommendations. Explore and recommend something!</p>
      )}
    </div>
  );
}
