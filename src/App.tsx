import React from 'react';
import ReactMarkdown from 'react-markdown';
import logo from './logo.svg';
import './App.css';

const content = ' ```ruby\nhoge\nfuga\n```\n';

function App() {
  return (
    <div className="App">
      <ReactMarkdown children={
        content
      } />
    </div>
  );
}

export default App;
