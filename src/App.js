import React from "react";
import MovieList from "./pages/movie/MovieList";
import MoviePage from "./pages/movie/MoviePage";
import PeopleList from "./pages/people/PeopleList";
import PeoplePage from "./pages/people/PeoplePage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <SearchProvider>
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
      </SearchProvider>
    </Provider>
  );
}
export default App;
