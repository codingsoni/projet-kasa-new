import React from 'react';
import '../Styles/Stars.scss';

const arrayStars = [1, 2, 3, 4, 5];

function Stars({ rating }) {
  return (
    <div className="stars">
      {arrayStars.map((element) => {
        return (
          <span key={`star-${element}`} className={element <= rating ? 'span1' : 'span2'}>
            ★
          </span>
        );
      })}
    </div>
  );
}

export default Stars;
