import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
          <App/>
      </DndProvider>
  </React.StrictMode>
);
