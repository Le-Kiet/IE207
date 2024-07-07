import "./BookCard.css";
import banner from "../assets/images/banner1.jpg";
import { useNavigate } from "react-router-dom";
function BookCard({ book, onView }) {
  const navigate = useNavigate;
  // const onView = async (courseDetails) => {
  //   const data = JSON.stringify(courseDetails, (key, value) => {
  //     if (key === "__reactFiber$cymnvi6m67p" || key === "stateNode") {
  //       return undefined;
  //     }
  //     return value;
  //   });
  //   navigate(`/blog-details?data=${encodeURIComponent(data)}`);
  // };
  console.log(book, "book");
  return (
    <div className="book-card-container" onClick={onView}>
      <h1 className="book-header">{book.title}</h1>
      <div className="book-image-container">
        <img src={book.image.url} alt="zxc" className="book-image"></img>
      </div>
      <div className="book-content">
        <p className="description">{book.content[0].contentHeader}</p>
      </div>
      <div className="book-footer">
        <div className="avatar"></div>
        <div>
          <div className="name">ABC</div>
          <div className="description-context">
            <div className="book-description">ABC</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
