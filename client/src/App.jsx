import "./App.css";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OTPverification from "./pages/OTPverification";
import UserInfoCollege from "./pages/UserInfoCollege";

function App() {
  return (
    <div className={`flex flex-col h-[100vh] overflow-x-hidden`}>
      <Navbar />
      <div className="flex grow">
        <Aside />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={<ProblemPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify" element={<OTPverification />} />
          <Route path="/userinfo/collage" element={<UserInfoCollege />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
