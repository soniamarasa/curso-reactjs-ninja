import React from 'react';

const Files = ({ files, handleOpenFile }) => (
  <div className="files-list-container">
    <h1>FILES</h1>

    <ul>
      {Object.keys(files).map((fileId) => (
        <li key={fileId}>
          <button className="button" onClick={handleOpenFile(fileId)}>
            {files[fileId].title} 
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Files;
