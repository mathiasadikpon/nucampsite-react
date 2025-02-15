import Header from "./components/Header";

import "./App.css";

import CampsitesList from "./features/campsites/CampsitesList";

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
    </div>
  );
}

export default App;
