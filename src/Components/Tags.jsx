import React from 'react';
import '../Styles/Tags.scss';

function Tags({ tags }) {
  return (
    <div className="div-tags">
      {tags.map((tag, index) => (
        <p className="tags" key={`tag-${index}`}>
          {tag}
        </p>
      ))}
    </div>
  );
}

export default Tags;
