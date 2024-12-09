import { useState } from 'react';

const useFileUpload = (initialFile = null, initialPreview = null) => {
  const [selectedFile, setSelectedFile] = useState(initialFile);
  const [preview, setPreview] = useState(initialPreview);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file) => {
    setSelectedFile(file);
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleInputFileChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFileChange(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return {
    selectedFile,
    preview,
    isDragging,
    handleInputFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    setSelectedFile,
    setPreview
  };
};

export default useFileUpload;
