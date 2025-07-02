import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MovieList from "./pages/movie/MovieList";
import MoviePage from "./pages/movie/MoviePage";
import PeopleList from "./pages/people/PeopleList";
import PeoplePage from "./pages/people/PeoplePage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/peoplelist" element={<PeopleList />} />
          <Route path="/people/:id" element={<PeoplePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
