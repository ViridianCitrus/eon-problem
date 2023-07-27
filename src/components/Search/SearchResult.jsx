import React from 'react';

export const SearchResult = ({ title, author, thumbnailSrc }) => {
  return (
    <div className='tw-flex tw-flex-row tw-gap-2.5'>
      <span className='tw-text-black'>{title}</span>
      <span className='tw-text-gray-500'>{author}</span>
    </div>
  );
};