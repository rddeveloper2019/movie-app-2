import { Movie } from '../components/Movie';

import React from 'react';

function Movies({ films = [] }) {
  return (
    <div className="container movies">
      {films.length ? (
        films.map((filmCard) => {
          return <Movie {...filmCard} key={filmCard.imdbID} />;
        })
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export { Movies };
