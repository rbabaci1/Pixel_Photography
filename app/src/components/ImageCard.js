import React from 'react';

export default function ImageCard({ imageUrl }) {
  return (
    <div className='image-card'>
      <img src={imageUrl} alt='gallery' />
    </div>
  );
}
