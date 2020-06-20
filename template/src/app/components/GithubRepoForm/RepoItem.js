import React from 'react';

export function RepoItem({ name, starCount, url }) {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <h5>
          {starCount}
        </h5>
        <a href={url} target="_blank" rel="noopener noreferrer">
          open
        </a>
      </div>
    </div>
  );
}
