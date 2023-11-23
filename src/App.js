import { Routes, Route } from "react-router";
import Header from "./shared/components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
