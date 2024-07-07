// File: App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import Learn from "./pages/Learn";
import NewCourse from "./pages/NewCourse";
import Dictionary from "./pages/Dictionary";
import Blog from "./pages/Blog";
import BookDetail from "./pages/BookDetail.js";
import MatchCard from "./pages/MatchCard.js";
import AuthContextProvider from "./contexts/AuthContext.js";
import UserProfile from "./pages/UserProfile.js";
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/match-card" element={<MatchCard />} />
            <Route path="/create" element={<NewCourse />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details" element={<BookDetail />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
