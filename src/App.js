import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LayoutMain from './components/LayoutMain/LayoutMain';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={
          <LayoutMain>
            <HomePage />
          </LayoutMain>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
  );
}

export default App;
