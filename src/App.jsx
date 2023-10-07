import MeetClientPrincipalForm from "./pages/MeetClientForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/GlobalStyles.css";

function App() {
  return (
    <div className="globalApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MeetClientPrincipalForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
