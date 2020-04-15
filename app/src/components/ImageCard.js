import React from 'react';

export default function ImageCard({ imageUrl }) {
  return (
    <div className='image-card'>
      <a target='_blank' href={imageUrl}>
        <img src={imageUrl} alt='gallery' />
      </a>
    </div>
  );
}
