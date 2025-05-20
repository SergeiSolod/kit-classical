import "./assets/scss/style.scss";
import "./kit/style.scss";
import Kit from "./Kit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
