import React from 'react';
import { Page } from '../components/Page';

import './index.css';

export const WatchVideo = () => {
  return (
    <Page icon='/home.svg' iconDest={'/'}>
      <div className='tw-flex tw-flex-col tw-w-full tw-items-center tw-p-20'>
        <div
        >
          <video controls autoPlay style={{
            maxWidth: 1200,
            maxHeight: 600,
          }}>
            <source src='/video.mp4' type='video/mp4' />
          </video>
        </div>
        <h2 className='tw-text-2xl tw-mb-2.5'>Comments:</h2>
      </div>
    </Page>
  );
};