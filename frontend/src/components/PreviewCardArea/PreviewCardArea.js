import "./PreviewCardArea.css";
import PreviewCard from "../PreviewCard.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";
function PreviewCardArea({
  title,
  allCourses,
  isPinned,
  content,
  tag,
  onDelete,
  onEdit,
  onView,
  course,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);
  console.log(content);
  const showCount = 3;
  const data = [
    {
      title: "Từ vựng N1",
      amount: "20 thuật ngữ",
      subject: "Tiếng Nhật",
      level: "N3",
    },
    {
      title: "Từ vựng N2",
      amount: "20 thuật ngữ",
      subject: "Tiếng Nhật",
      level: "N3",
    },
    {
      title: "Từ vựng N3",
      amount: "20 thuật ngữ",
      subject: "Tiếng Nhật",
      level: "N3",
    },
    {
      title: "Từ vựng N4",
      amount: "20 thuật ngữ",
      subject: "Tiếng Nhật",
      level: "N3",
    },
    {
      title: "Từ vựng N5",
      amount: "20 thuật ngữ",
      subject: "Tiếng Nhật",
      level: "N3",
    },
  ];
  const handleNext = () => {
    const lastIndex = data.length - 1;
    const newIndex = currentIndex + showCount;
    if (newIndex <= lastIndex) {
      setCurrentIndex(newIndex);
    }
    setShowLeftChevron(true);
    if (newIndex + 3 >= lastIndex) {
      setShowRightChevron(false);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex - showCount;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
    // eslint-disable-next-line
    if (newIndex === 0) {
      setShowLeftChevron(false);
    }
    setShowRightChevron(true);
  };
  const visiblePreviewCards = data.slice(
    currentIndex,
    currentIndex + showCount
  );

  return (
    <div className="preview-card-area">
      {/* {showLeftChevron && (
        <button className="chervon-left" onClick={handlePrevious}>
          <FaChevronLeft />
        </button>
      )} */}
      <PreviewCard
        title={title}
        course={course}
        subject="Tiếng Nhật"
        onView={onView}
        level={tag}
        onDelete={onDelete}
        onEdit={onEdit}
      />

      {/* {showRightChevron && (
        <div className="test">
          <button className="chervon-right" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      )} */}
    </div>
  );
}

export default PreviewCardArea;
