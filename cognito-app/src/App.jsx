import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";

function App() {
  const auth = useAuth();

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage auth={auth} />} />
        <Route path="/admin" element={<AdminPage auth={auth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

