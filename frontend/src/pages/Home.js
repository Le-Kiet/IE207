import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import banner from "../assets/images/banner2.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "../components/Button.js";
import Chat from "../components/Chat.js";
import PreviewCardArea from "../components/PreviewCardArea/PreviewCardArea.js";
// import AddCourseAnimate from "../assets/images/AddCourseButtonAnimate.png";
import "./Home.css";
import axiosInstance from "../utils/axiosInstance";
function Home() {
  //Get all courses
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("login");
      }
    }
  };
  const getAllCourses = async () => {
    try {
      const response = await axiosInstance.get("/get-all-courses");
      if (response.data && response.data.course) {
        console.log(response.data, -3);
        console.log(response.data.course, -2);
        setAllCourses(response.data.course);
        console.log(allCourses, 0);
      }
    } catch (error) {
      console.log("Error occured");
    }
  };
  const deleteCourse = async (data) => {
    const courseId = data._id;
    // console.log(courseId);
    try {
      const response = await axiosInstance.delete("/delete-course/" + courseId);
      if (response.data && !response.data.error) {
        console.log("Course deleted successfully", "delete");
        getAllCourses();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log("An unexpected error occurred");
      }
    }
  };
  const onView = async (courseDetails) => {
    navigate(`/course-details?data=${JSON.stringify(courseDetails)}`);
    console.log("courseDetails", courseDetails);
  };
  const handleEdit = async (courseDetails) => {
    navigate("/learn");
    const course_Id = courseDetails._id;
  };
  useEffect(() => {
    getAllCourses();
    getUserInfo();
    return () => {};
  }, []);
  return (
    <div className="App">
      <Navbar userInfo={userInfo} />
      <div style={{ margin: "auto", width: "60%" }}>
        <img
          src={banner}
          alt="banner"
          width="900"
          style={{ margin: "auto" }}
        ></img>
      </div>
      <div className="add-course-container">
        {/* <Button className="create-course-button" content="Tạo lộ trình học" /> */}
        {/* <img src={AddCourseAnimate} alt="add course animate" width="150"></img> */}
      </div>
      <div className="preview-card-area-title">Gần đây</div>
      <div className="preview-card-area">
        {allCourses.map((course, index) => (
          <div className="preview-card-wrapper">
            <PreviewCardArea
              key={course._id}
              course={course}
              title={course.title}
              content={course.content}
              tag={course.tags}
              isPinned={course.isPinned}
              onView={() => onView(course)}
              onEdit={() => handleEdit(course)}
              onDelete={() => deleteCourse(course)}
              onPinNote={() => {}}
            ></PreviewCardArea>
          </div>
        ))}
      </div>
      {/* <div className="preview-card-area-title">Gần đây</div>
      <div className="preview-card-area">
        <div>
          <PreviewCardArea allCourses={allCourses}></PreviewCardArea>
        </div>
      </div> */}

      <Chat></Chat>

      <Footer />
    </div>
  );
}

export default Home;
