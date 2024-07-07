import "./Navbar.css";
import { FaSearch, FaPlusCircle, FaBell } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo.js";
function Navbar({ userInfo }) {
  const navigate = useNavigate;
  const [isFocused, setIsFocused] = useState(false);
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const onView = async (courseDetails) => {
    console.log(1, courseDetails, 2);
    navigate("/user-profile", { state: courseDetails });
    console.log("courseDetails", courseDetails);
  };
  return (
    <div className="App">
      <div class="navbar">
        <div class="brand-section">
          <div class="brand">Quizlet</div>
        </div>
        <div class="navigation-section">
          <ul class="navigation">
            <li>
              <Link to="/home">
                <a href="null">Home</a>
              </Link>
            </li>
            <li>
              <a href="/create">Thêm course</a>
            </li>
            {/* <li>
              <a href="null">Thư viện</a>
            </li> */}
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className={`search-section ${isFocused ? "focused" : ""}`}>
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Hỏi Quizlet bất cứ điều gì"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <div class="user-section">
          <FaPlusCircle className="create-course-button" />
          <FaBell className="bell" />
          <Link to="/user-profile">
            <ProfileInfo
              class="avatar"
              userInfo={userInfo}
              onLogout={onLogout}
              onView={() => onView(userInfo)}
            >
              {userInfo}
            </ProfileInfo>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
