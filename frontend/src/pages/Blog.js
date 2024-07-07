import "./Blog.css";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import BlogCard from "../components/BlogCard.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.js";
import BookCard from "../components/BookCard.js";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosInstance.js";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
function Blog() {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(1);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [userInfo, setUserInfo] = useState(null);
  const categories = ["N1", "N2", "N3", "N4", "N5"];
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory, "selectedCategory");
    handleSort(category);
  };
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(data.length / booksPerPage); i++) {
  //   pageNumbers.push(i);
  // }
  const [uniqueTags, setUniqueTags] = useState([]);
  // const totalPages = Math.ceil(data.length / booksPerPage);

  const getAllBlogs = async () => {
    try {
      const response = await axiosInstance.get("/get-all-blog");
      if (response.data && response.data.blog) {
        setAllBlogs(response.data.blog);
      }
    } catch (error) {
      console.log("An unexpected error occurred");
    }
  };
  const onSearchBlog = async (query) => {
    try {
      const response = await axiosInstance.get("/search-blogs", {
        params: { query },
      });
      if (response.data && response.data.blogs) {
        setIsSearch(true);
        setAllBlogs(response.data.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onSortBlog = async (query) => {
    try {
      const response = await axiosInstance.get("/sort-blogs", {
        params: { query },
      });
      if (response.data && response.data.blogs) {
        setIsSearch(true);
        setAllBlogs(response.data.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = () => {
    console.log(searchQuery, "searchQuery");
    if (searchQuery) {
      onSearchBlog(searchQuery);
      console.log(allBlogs, "allBlogs");
    }
    console.log(searchQuery, "searchQuery");
  };
  const handleSort = (category) => {
    console.log(searchQuery, "sort");
    if (selectedCategory) {
      onSortBlog(selectedCategory);
      console.log(allBlogs, "allBlogs");
    }
    console.log(searchQuery, "sort");
  };
  const onView = async (courseDetails) => {
    console.log(1, courseDetails, 2);
    navigate("/blog-details", { state: courseDetails });
    console.log("courseDetails", courseDetails);
  };

  useEffect(() => {
    if (!isSearch && selectedCategory === null) {
      getAllBlogs();
    }
    getUserInfo();
    const allTags = allBlogs.flatMap((book) => book.tag);
    const uniqueTagsSet = new Set(allTags);
    setUniqueTags([...uniqueTagsSet]);
    // console.log(getUserInfo(), 1);
  }, [
    isSearch,
    // allBlogs
  ]);
  console.log(searchQuery, allBlogs, "allBlogs");
  return (
    <div>
      <Navbar userInfo={userInfo} />
      <div className="blog-page-container">
        <div className="search-input-container">
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "#f1f5f9",
              borderRadius: "0.375rem",
            }}
          >
            <input
              type="text"
              placeholder="Search Blogs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                fontSize: "0.75rem",
                backgroundColor: "transparent",
                paddingTop: "11px",
                paddingBottom: "11px",
                outline: "none",
                border: "none",
              }}
            ></input>
            <FaMagnifyingGlass
              style={{
                color: "#94a3b8",
                cursor: "pointer",
                ":hover": {
                  color: "#000000",
                },
              }}
              onClick={handleSearch}
            />
          </div>
        </div>

        <div className="book-page-container">
          <h2>Blog</h2>
          <div className="book-container">
            <div>
              {isSearch
                ? allBlogs.map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      onView={() => onView(book.content)}
                    />
                  ))
                : allBlogs.map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      onView={() => onView(book)}
                    />
                  ))}
              <nav>
                <ul className="pagination">
                  {currentPage !== 1 && (
                    <li key={1} className="page-item">
                      <a onClick={() => paginate(1)} className="page-link">
                        1
                      </a>
                    </li>
                  )}

                  {currentPage - 2 > 1 && (
                    <li key={currentPage - 2} className="page-item">
                      <a
                        onClick={() => paginate(currentPage - 2)}
                        className="page-link"
                      >
                        {currentPage - 2}
                      </a>
                    </li>
                  )}

                  {currentPage - 1 > 1 && (
                    <li key={currentPage - 1} className="page-item">
                      <a
                        onClick={() => paginate(currentPage - 1)}
                        className="page-link"
                      >
                        {currentPage - 1}
                      </a>
                    </li>
                  )}

                  <li key={currentPage} className="page-item active">
                    <a
                      onClick={() => paginate(currentPage)}
                      className="page-link"
                    >
                      {currentPage}
                    </a>
                  </li>

                  {/* {currentPage + 1 < totalPages && (
                    <li key={currentPage + 1} className="page-item">
                      <a
                        onClick={() => paginate(currentPage + 1)}
                        className="page-link"
                      >
                        {currentPage + 1}
                      </a>
                    </li>
                  )}

                  {currentPage + 2 < totalPages && (
                    <li key={currentPage + 2} className="page-item">
                      <a
                        onClick={() => paginate(currentPage + 2)}
                        className="page-link"
                      >
                        {currentPage + 2}
                      </a>
                    </li>
                  )}

                  {currentPage !== totalPages && (
                    <li key={totalPages} className="page-item">
                      <a
                        onClick={() => paginate(totalPages)}
                        className="page-link"
                      >
                        {totalPages}
                      </a>
                    </li>
                  )} */}
                </ul>
              </nav>
            </div>
            <div className="sort-book">
              Tìm kiếm theo thể loại:
              <ListGroup className="sort-container">
                {categories.map((tag) => (
                  <ListGroup.Item
                    key={tag}
                    className={`sort-name ${
                      selectedCategory === tag ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(tag)}
                  >
                    {tag}
                  </ListGroup.Item>
                ))}

                {selectedCategory && (
                  <p className="sort-name ">
                    Selected category: {selectedCategory}
                  </p>
                )}
              </ListGroup>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
