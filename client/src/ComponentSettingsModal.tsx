import React, { useState } from 'react';

const ComponentSettingsModal = ({ onSave, onCancel }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleSave = () => {
    onSave({ backgroundColor });
  };

  return (
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ComponentSettingsModal;