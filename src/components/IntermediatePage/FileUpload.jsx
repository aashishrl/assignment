import React from 'react';

const FileUpload = ({
  selectedFile,
  isDragging,
  handleDrop,
  handleDragOver,
  handleDragLeave,
  handleInputFileChange,
  id,  // Accept the unique id
}) => (
  <div
    className={`form-row drag-drop ${isDragging ? 'dragging' : ''}`}
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
  >
    {selectedFile ? (
      <p>{selectedFile.name}</p>
    ) : (
      <div>
        <img src="../../Logo/file-logo.png" className='file-logo' alt="" />
        <p className='file-upload-label'>
          <label htmlFor={id}>Click to upload </label> or drag and drop<br />
          Maximum file size 50 MB
        </p>
      </div>
    )}
    <input
      type="file"
      onChange={handleInputFileChange}
      accept="image/*"
      style={{ display: "none" }}
      id={id}  // Use the unique id for each input
    />
  </div>
);

export default FileUpload;
