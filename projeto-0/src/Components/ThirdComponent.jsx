// src/components/ThirdComponent.jsx
import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

const ThirdComponent = () => {
  return (
    <div>
      <h1>Componentes</h1>
      <FirstComponent />
      <SecondComponent />
    </div>
  );
};

export default ThirdComponent;
