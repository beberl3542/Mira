// src/App.js
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetcher';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Counter />
      <DataFetcher />  {/* DataFetcherコンポーネントの追加 */}
      <Footer />
    </div>
  );
}

export default App;
