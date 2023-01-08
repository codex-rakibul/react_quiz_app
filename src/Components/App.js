import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Signup from "../pages/Signup";
import Result from "../pages/Result";
import "../styles/App.css";
import Layout from "./Layout";
import { AuthProvider } from "../Contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<PublicRoute />}>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/quiz" element={<Quiz />} />
                <Route path="result" element={<Result />} />
              </Route>
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
