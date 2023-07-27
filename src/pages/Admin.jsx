import React from 'react';
import { Page } from '../components/Page';
import { FileUploader } from '../components/VideoUpload';
import { EXAMPLE_VIDEO_DATA } from '../services/search_svc';
import { VideoCardPreview } from '../components/VideoCardPreview/VideoCardPreview';

import './index.css';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
  const randomVideos = EXAMPLE_VIDEO_DATA.slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  const navigate = useNavigate();

  return (
    <Page icon='home.svg' iconDest={'/'}>
      <div className='tw-mt-20 tw-overflow-y-auto tw-overflow-x-hidden '>
        <div className='tw-flex tw-flex-col tw-gap-1'>
          <h2 className='tw-text-2xl tw-mb-2.5'>My Videos</h2>
          <div className='tw-flex tw-flex-row tw-flex-wrap tw-gap-10'>
            {randomVideos.map((video) => {
              return (
                <VideoCardPreview
                  title={video.title}
                  author={video.author}
                  thumbnailSrc={video.thumbnailSrc}
                  id={video.uuid}
                  width={'15rem'}
                  height={'15rem'}
                  onClick={() => {
                    navigate(`/video/${video.uuid}`);
                  }}
                />
              );
            })}
          </div>
          <h2 className='tw-text-2xl tw-mb-2.5 tw-mt-10'>Upload a Video</h2>
          <FileUploader />
        </div>
      </div>
    </Page>
  );
};