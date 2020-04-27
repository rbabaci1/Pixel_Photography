import React from 'react';

export default function ImageCard({ imageUrl }) {
  return (
    <div className='image-card'>
      <a rel='noopener noreferrer' target='_blank' href={imageUrl}>
        <img src={imageUrl} alt='gallery' />
      </a>
    </div>
  );
}
