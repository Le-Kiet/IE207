import "./BlogCard.css";
import banner from "../assets/images/banner1.jpg";

function Blog() {
  return (
    <div className="blog-card-container">
      <div className="blog-image-container">
        <img src={banner} alt="zxc" className="blog-image"></img>
      </div>
      <div className="blog-content">
        <h2>Chemistry: The Central Science</h2>
        <span>14th Edition</span>
        <p>
          Bruce Edward Bursten, Catherine J. Murphy, H. Eugene Lemay, Matthew E.
          Stoltzfus, Patrick Woodward, Theodore E. Brown
        </p>
      </div>
    </div>
  );
}

export default Blog;
