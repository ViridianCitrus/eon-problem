import React from 'react';
import './VideoCardPreview.css';
export const VideoCardPreview = ({
  title,
  author,
  thumbnailSrc,
  width,
  height,
  onClick
}) => {

  return (
    <div
      className='tw-cursor-pointer tw-flex tw-flex-col tw-p-2.5 tw-border-2 tw-rounded-xl tw-border-solid tw-border-white video-card-preview'
      onClick={onClick}
      style={{
        width: width || '20rem',
        height: height || '20rem',
      }}
    >
      <img src={thumbnailSrc} alt='thumbnail' />
      <h2 className='tw-text-3xl'>{title}</h2>
      <h2
        className='tw-text-xl'
        style={{
          color: 'grey',
        }}
      >
        {author}
      </h2>
    </div>
  );
};