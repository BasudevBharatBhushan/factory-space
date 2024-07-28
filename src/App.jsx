import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Connect from "./pages/Connect";
import AdminSignIn from "./pages/AdminSignIn";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./auth/PrivateRoutes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminSignIn />} />
          <Route path="/connect" element={<Connect />} />
          <Route exact path="/admin-dashboard" element={<PrivateRoute />}>
            <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
