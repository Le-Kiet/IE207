import "./CourseDetails.css";
import { useState } from "react";
import * as React from "react";
import Button from "../components/Button";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import PreviewCardArea from "../components/PreviewCardArea/PreviewCardArea";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Combobox from "../components/Combobox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.js";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Chat from "../components/Chat.js";
function CourseDetails() {
  const [revealKanji, setRevealKanji] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const handleLeftClick = () => {
    if (wordIndex === 0) {
    } else {
      setWordIndex(wordIndex - 1);
      console.log(wordIndex, courseDetailsData.content[wordIndex].kanji);
      if (revealKanji === true) {
        setRevealKanji(!revealKanji);
      }
    }
  };
  const handleRightClick = () => {
    if (wordIndex === courseDetailsData.content.length - 1) {
    } else {
      setWordIndex(wordIndex + 1);
      console.log(wordIndex, courseDetailsData.content[wordIndex].kanji);
      if (revealKanji === true) {
        setRevealKanji(!revealKanji);
      }
    }
  };
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const courseDetailsData = JSON.parse(searchParams.get("data"));
  const onView = async (courseDetails) => {
    navigate(
      `/learn?data=${encodeURIComponent(JSON.stringify(courseDetails))}`
    );
  };
  const onViewMatchCard = async (courseDetails) => {
    navigate(
      `/match-card?data=${encodeURIComponent(JSON.stringify(courseDetails))}`
    );
  };
  const [toggleStar, setToggleStar] = useState(false);
  const [iconType, setIconType] = useState("star");
  const onStarClick = () => {
    setToggleStar(!toggleStar);
    if (toggleStar === true) {
      setIconType("star");
    } else {
      setIconType("starborder");
    }
    console.log("onStarClick", iconType);
  };
  const [openMenu, setOpenMenu] = useState(false);
  const onMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const data = [
    {
      title: "NIJ Unit6 Lecture漢字",
    },
  ];
  return (
    <div className="page-container">
      <Navbar />
      <div className="course-container">
        {/* <p>{course}</p> */}
        <h1>{data[0].title}</h1>
        <div className="course-options">
          <Button
            content="Thẻ ghi nhớ"
            iconType="stickynote"
            onClick={() => onViewMatchCard(courseDetailsData)}
          />
          <Button
            content="Học"
            iconType="book"
            onClick={() => onView(courseDetailsData)}
          />

          <Button content="Kiểm tra" iconType="check" />
          <Button content="Ghép thẻ" iconType="link" />
        </div>
        {/* {courseDetailsData.content.map((course, index) => (
          <div key={index}> */}
        {revealKanji ? (
          <div className="card-container">
            <div className="card-content">
              <div
                className="card-header-left"
                onClick={() => setRevealKanji(!revealKanji)}
              >
                <Button iconType="lightbulb" className="none-border"></Button>
                <p>Hiển thị gợi ý</p>
              </div>
              <div className="card-header-right">
                <Button iconType="volumeup" className="none-border"></Button>
                <Button iconType="star" className="none-border"></Button>
              </div>
            </div>
            <div className="content">
              {courseDetailsData.content[wordIndex].word}
            </div>
          </div>
        ) : (
          <div className="card-container">
            <div className="card-content">
              <div
                className="card-header-left"
                onClick={() => setRevealKanji(!revealKanji)}
              >
                <Button iconType="lightbulb" className="none-border"></Button>
                <p>Hiển thị gợi ý</p>
              </div>
              <div className="card-header-right">
                <Button iconType="volumeup" className="none-border"></Button>
                <Button iconType="star" className="none-border"></Button>
              </div>
            </div>
            <div className="content">
              {courseDetailsData.content[wordIndex].kanji}
            </div>
          </div>
        )}
        {/* </div>
        ))} */}
        <div className="card-footer">
          <div className="footer-group">
            <Button iconType="play"></Button>
            <Button iconType="random"></Button>
          </div>
          <div className="footer-group">
            <FaArrowLeft
              onClick={() => handleLeftClick()}
              style={{ cursor: "pointer", marginRight: "12px" }}
            ></FaArrowLeft>
            <i className="fas fa-chevron-left"></i>
            <div>
              <p>
                {wordIndex + 1}/{courseDetailsData.content.length}
              </p>
            </div>
            <FaArrowRight
              onClick={() => handleRightClick()}
              style={{ cursor: "pointer", marginLeft: "12px" }}
            ></FaArrowRight>
          </div>
          <div className="footer-group">
            <Button iconType="cog"></Button>
            <Button iconType="expand" className="none-border"></Button>
          </div>
        </div>
        {/* <div className="other-options">
          <Button iconType="share"></Button>
          <Button iconType="copy"></Button>
          <Button iconType="ellipsisv" onClick={onMenuClick}></Button>
          {openMenu && (
            <Paper sx={{ width: 320, maxWidth: "100%" }} className="menu">
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          )}
        </div> */}
        <div className="all-terms-content">
          <div className="all-terms-content-header">
            <span>Thuật ngữ học trong phần này</span>
          </div>
          <div className="learning">
            <div className="learning-div">
              <span>Đang học</span>
              <p>
                Bạn đã bắt đầu học những thuật ngữ này. Tiếp tục phát huy nhé
              </p>
            </div>
            <div className="">
              <Button
                iconType={iconType}
                content={`Chọn ${courseDetailsData.content.length}`}
                onClick={onStarClick}
              />
            </div>
          </div>

          {courseDetailsData.content.map((course, index) => {
            return (
              <div className="term-container">
                <div className="term-content" key={index}>
                  <span>{course.word}</span>
                  <span>{course.kanji}</span>
                  <div>
                    <Button iconType="star"></Button>
                    <Button iconType="volumeup"></Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Chat />
      <Footer />
    </div>
  );
}

export default CourseDetails;
