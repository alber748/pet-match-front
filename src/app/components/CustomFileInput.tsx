import React, { useState } from 'react';

interface CustomFileInputProps {
  onChange: (nombreArchivo: string, nuevaImagen: File | null, url : string) => void;
  currentFile: File | null;
  url : string;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({ onChange, currentFile, url }) => {
  const [fileName, setFileName] = useState<string | null>(currentFile ? currentFile.name : null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFileName(file.name);
      onChange(file.name, file, url);
    }
  };

  const handleClearFile = () => {
    setFileName(null);
    onChange('', null, url);
  };

  return (
    <div>
      <input type="text" value={fileName || ''} readOnly />
      <label className="custom-file-upload">
        <input type="file" onChange={handleFileChange} style={{ display: 'none' }}/>
        Subir archivo
      </label>
      {fileName && (
        <button onClick={handleClearFile}>Eliminar</button>
      )}
    </div>
  );
};

export default CustomFileInput;
