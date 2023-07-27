import React, { useEffect, useState } from 'react';

import './Search.css';
import classNames from 'classnames';
import { useSearchVideos } from '../../hooks/useSearchVideos';
import { SearchResult } from './SearchResult';
import { LoadingSpinner } from '../LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(id);
  }, [value, delay]);

  return debounceValue;
};

export const Search = ({ onActiveChange }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const debounceSearchValue = useDebounce(searchValue, 500);
  const { data, fetch, isLoading } = useSearchVideos();
  const navigate = useNavigate();

  useEffect(() => {
    if (debounceSearchValue) {
      fetch(debounceSearchValue);
    }
  }, [debounceSearchValue, fetch]);

  const onFocusChange = (focus) => {
    setIsFocus(focus);
    onActiveChange(focus);
  };

  return (
    <div className='tw-absolute tw-inset-x-5 tw-flex tw-flex-col tw-p-2.5' tabIndex={0} onFocus={() => onFocusChange(true)} onBlur={() => onFocusChange(false)}>
      <div
        className={classNames(
          'tw-w-full tw-flex tw-gap-2 tw-p-2 tw-items-center search-bar',
          isLoading ||
            (data && data.length) ||
            (debounceSearchValue && !data.length)
            ? 'tw-rounded-t'
            : 'tw-rounded',
          isFocus ? 'selected' : ''
        )}
      >
        <img
          src='/search.svg'
          alt='search'
          className={classNames(
            'tw-w-8 tw-h-8 search-icon',
            isFocus ? 'selected' : ''
          )}
        />
        <input
          type='text'
          className='tw-rounded tw-w-full tw-text-xl'

          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className='tw-z-10 search-results-container'>
        {isLoading && isFocus && debounceSearchValue && (
          <div className='tw-bg-white tw-flex tw-items-center tw-justify-center tw-p-5'>
            <LoadingSpinner />
          </div>
        )}
        {!isLoading &&
          isFocus &&
          data.length > 0 &&
          data.map((video) => {
            return (
              <div
                className={classNames('tw-py-1 tw-px-2 search-result-row')}
                style={{
                  borderWidth: '1px 0 0 0',
                  borderColor: 'lightgray',
                }}
                key={video.title + video.author}
                onMouseDown={(e) => {
                  e.preventDefault();
                  navigate(`/v/${video.uuid}`);
                }}
              >
                <SearchResult
                  title={video.title}
                  author={video.author}
                  thumbnailSrc={video.thumbnailSrc}
                />
              </div>
            );
          })}
        {!isLoading &&
          isFocus &&
          data.length === 0 &&
          !!debounceSearchValue && (
            <div className='tw-bg-white tw-flex tw-items-center tw-justify-center tw-p-5'>
              <h1 className='tw-text-xl tw-text-black'>No Videos Found</h1>
            </div>
          )}
      </div>
    </div>
  );
};