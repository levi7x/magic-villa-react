import { BrowserRouter, Route, Routes } from "react-router-dom";
import VillasListing from "./components/VillasListing";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

/* fetch("https://localhost:7169/api/VillaAPI")
.then((res) => res.json())
.then((data) => {
  console.log(data);
}); */

function App() {
  return (
    <div className="App">
      <h1>REACT VILLAS</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VillasListing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
