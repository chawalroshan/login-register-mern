import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={user && user._id ? <Homepage /> : <Login setLoginUser={setLoginUser} />}
          />
          <Route 
            path="/login" 
            element={<Login setLoginUser={setLoginUser} />} 
          />
          <Route 
            path="/register" 
            element={<Register />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
