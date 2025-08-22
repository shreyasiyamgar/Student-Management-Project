// src/components/ui/button.jsx
import React from 'react';

export  function Button({ children, className = '', onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold shadow hover:shadow-md transition ${className}`}
    >
      {children}
    </button>
  );
}