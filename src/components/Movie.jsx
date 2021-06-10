import React from 'react';
function Movie(props) {
  const {
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
    Title: title,
  } = props;

  const image =
    poster === 'N/A'
      ? `https://via.placeholder.com/468x400?text=${title}`
      : poster;

  return (
    <div className="row" id={id}>
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={image} alt={title} />
            <span className="card-title">{title}</span>
          </div>
          <div className="card-content">
            <p>
              {year} <span className="right">{type}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Movie };
