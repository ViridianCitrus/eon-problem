import React, { useState } from 'react';

const VALID_FILE_TYPES = ['mp4', 'mov'];

export const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (
        !VALID_FILE_TYPES.includes(file.name.split('.').pop().toLowerCase())
      ) {
        setErrorMessage('Error: Please select an MP4 or MOV file.');
        setSelectedFile(null);
        return;
      }
      setErrorMessage('');
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploading(true);
      setTimeout(() => {
        alert(`File "${selectedFile.name}" uploaded successfully!`);
        setSelectedFile(null);
        setUploading(false);
      }, 100);
    }
  };

  return (
    <div>
      <input
        type='file'
        accept='.mp4,.mov'
        onChange={handleFileChange}
      />
      {errorMessage && <p>{errorMessage}</p>}
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      {selectedFile && (
        <button
          type='button'
          className='tw-text-white tw-p-1'
          style={{
            border: '2px solid red',
            borderRadius: '5px',
            backgroundColor: 'rgb(156, 10, 0)',
          }}
          onClick={handleUpload}
        >
          Upload
        </button>
      )}
    </div>
  );
};