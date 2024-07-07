import "./BookDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.js";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { getInitials } from "../utils/helper";

import ProfileInfo from "../components/ProfileInfo.js";
function BookDetail() {
  const [userInfo, setUserInfo] = useState(null);
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {}
  };
  const { state } = useLocation();
  console.log("courseDetails", state);
  const createOn = state.createOn;
  const createDate = new Date(createOn);
  const formattedCreateDate = `${createDate.getFullYear()}-${(
    createDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${createDate.getDate()}`;
  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);
  return (
    <div>
      <Navbar />
      <section className="book-detail">
        <div className="book-content1">
          <div className="book-header">
            <div className="icon-link">
              <a className="icon-back" href="/blog">
                &#8249; Back
              </a>
            </div>
            <h1 className="title-header">{state.title}</h1>
            <p>
              Được đăng bởi {state.userName} vào ngày {formattedCreateDate}
            </p>
          </div>
          <div className="book-image-container">
            <img src={state.image.url} alt="zxc" className="book-image"></img>
          </div>
          {state.content.map((item) => (
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <h3 style={{ marginTop: 0, marginRight: "10px" }}>
                {item.header}
              </h3>
              <p style={{ marginBottom: 0 }}>{item.contentHeader}</p>
            </div>
          ))}
        </div>
        <aside className="book-auth">
          <div
            style={{
              width: "48px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(123, 120, 120, 0.5)",
              borderRadius: "50%",
              color: "#333",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {getInitials(state.userName)}
          </div>
          <h3>{state.userName}</h3>
          <h3> Recent posts by {state.userName} </h3>
          <ul>
            <li>
              <a href="!#">Learn whit JapaneseLearning</a>
            </li>
            <li>
              <a href="!#">Learn whit JapaneseLearning</a>
            </li>
            <li>
              <a href="!#">Learn whit JapaneseLearning</a>
            </li>
          </ul>
        </aside>
      </section>
      <Footer />
    </div>
  );
}

export default BookDetail;
