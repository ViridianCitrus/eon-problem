import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Page = ({ children, icon, iconDest }) => {
  const navigate = useNavigate();

  return (
    <div
      className='tw-flex tw-flex-col tw-relative tw-w-screen tw-h-screen tw-p-5 tw-pr-0 tw-overflow-hidden'
      style={{
        background:
          'linear-gradient(0deg, rgba(10,0,0,1) 0%, rgba(10,0,0,1) 80%, rgba(90,0,0,1) 90%)',
      }}
    >
      <div className='tw-flex tw-flex-row tw-pr-5 tw-w-full tw-justify-between'>
        <h1 className='tw-text-5xl tw-relative m-5'>U-TOOB-FLIX</h1>
        <img
          className='tw-w-12 tw-h-12 tw-cursor-pointer'
          src={icon}
          alt='account'
          onClick={() => {
            navigate(iconDest);
          }}
        />
      </div>
      <div className='tw-flex tw-flex-col tw-w-full tw-h-full'>{children}</div>
    </div>
  );
};