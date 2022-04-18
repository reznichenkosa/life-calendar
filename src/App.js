import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LayoutMain from './components/LayoutMain/LayoutMain';
import RequireAuth from "./HOC/RequireAuth";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <LayoutMain>
              <HomePage />
            </LayoutMain>
          </RequireAuth>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
  );
}

export default App;
