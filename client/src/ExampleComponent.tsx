import React from 'react';

interface IExampleComponentProps {
  title: string;
  content: string;
  backgroundColor: string;
}


const ExampleComponent: React.FC<IExampleComponentProps> = ({ title, content, backgroundColor }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor }}>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default ExampleComponent;