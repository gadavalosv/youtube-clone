import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
            <div class="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div class="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
