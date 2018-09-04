import React, { Component } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <GalleryItem />
        </div>
      </div>
    );
  }
}

export default App;