
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/script.js/Navbar';
import Profile from './Components/script.js/Profile';
import SignUpPage from './Components/script.js/Signup';
import Home from './Components/script.js/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
