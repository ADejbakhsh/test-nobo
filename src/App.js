import React from 'react';
import './App.css';
import './components/layouts/Layout.js'
import Layout from './components/layouts/Layout.js';
import Searchbar from './components/Searchbar.js';
import FilmPage from'./components/FilmsPage.js';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout></Layout>
      <Route exact path="/" component={Searchbar} />
      <Route path="/:id" component={FilmPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
