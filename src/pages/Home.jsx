import React, { useState } from 'react';
import { Page } from '../components/Page';
import { VideoCardPreview } from '../components/VideoCardPreview/VideoCardPreview';
import { Search } from '../components/Search/Search';

import './index.css';
import { EXAMPLE_VIDEO_DATA } from '../services/search_svc';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();

  return (
    <Page icon='account.svg' iconDest={'/admin'}>
      <Search onActiveChange={setIsSearchActive} />

      <div className={`page-overlay ${isSearchActive ? 'active' : ''}`}></div>

      <div className='tw-mt-20 tw-overflow-y-auto tw-overflow-x-hidden'>
        <div className='tw-flex tw-flex-col'>
          <h2 className='tw-text-2xl tw-mb-2.5'>Recommendations</h2>
          <div className='tw-flex tw-flex-row tw-flex-wrap tw-gap-10 tw-mb-24'>
            {EXAMPLE_VIDEO_DATA.map((video, index) => {
              return (
                <VideoCardPreview
                  title={video.title}
                  author={video.author}
                  thumbnailSrc={video.thumbnailSrc}
                  onClick={() => {
                    navigate(`/video/${video.uuid}`);
                  }}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
};