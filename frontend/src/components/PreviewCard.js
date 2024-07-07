import { Link } from "react-router-dom";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";
import "./PreviewCard.css";
import CourseDetails from "../pages/CourseDetails";
import { useState } from "react";
function PreviewCard({
  course,
  title,
  amount,
  subject,
  level,
  onEdit,
  tag,
  onDelete,
  onPinNote,
  isPinned,
  onView,
}) {
  console.log(course?.content, "tag");
  const [courseLength, setCourseLength] = useState(course?.content.length);
  return (
    <div
      className="preview-card-container"
      style={{
        border: "1px solid black",
        borderRadius: "12px",
        padding: "4px",
        backgroundColor: "white",
        hover: "shadow 2px",
      }}
    >
      {/* <Link to="/course-details"> */}
      <div className="preview-card-content" onClick={onView}>
        <h1 class="title">{title}</h1>
        {/* {course?.content.length ? <h2></h2> : <h2>{course.length} thuật ngữ</h2>} */}
        <h2>{courseLength} thuật ngữ</h2>
        {/* <MdOutlinePushPin /> */}
        <div>
          <span className="subject">{subject}</span>
          <span className="level">{level}</span>
          <MdCreate onClick={onEdit} />
          <MdDelete onClick={onDelete} />
        </div>
      </div>
      {/* <CourseDetails
        course={course}
        style={{ display: "none" }}
      ></CourseDetails> */}
      {/* </Link> */}
    </div>
  );
}

export default PreviewCard;
