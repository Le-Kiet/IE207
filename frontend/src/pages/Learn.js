import { useState } from "react";
import Button from "../components/Button";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, useNavigate } from "react-router-dom";

import "./Learn.css";

function Learn() {
  //mutilchoice function
  const [currentQuestion, setCurrenQuestion] = useState(1);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const courseDetailsData = JSON.parse(searchParams.get("data"));
  const wrongAnser = [
    {
      kanji: "zxczxc",
      word: "稼ぐ",
    },
    {
      kanji: "zxczxc",
      word: "解雇",
    },
    {
      kanji: "zxczxc",
      word: "解雇",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(2); // Giả sử đáp án đúng là câu số 2
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const handleAnswerClick = (index, course) => {
    console.log(course, "=", courseDetailsData.content[index].kanji);
    if (course === courseDetailsData.content[index].kanji) {
      console.log("true");
      setCurrenQuestion(currentQuestion + 1);
      setSelectedAnswer(index + 1);
      setScore(score + 1);
      setAnswered(true);
    } else {
      console.log("wrong");
      setSelectedAnswer(index + 1);
      setCurrenQuestion(currentQuestion + 1);
      setAnswered(true);
      setWrongAnswers([...wrongAnswers, courseDetailsData.content[index]]);
    }
  };

  const onMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  console.log(courseDetailsData);
  return (
    <div className="App">
      <div className="learn-header">
        <Button iconType="book" content="Học" onClick={onMenuClick}></Button>
        {openMenu && (
          <Paper sx={{ width: 320, maxWidth: "100%" }} className="menu">
            <MenuList>
              <MenuItem>
                <Button content="Thẻ ghi nhớ" iconType="stickynote" />
              </MenuItem>
              <MenuItem>
                <Button content="Kiểm tra" iconType="check" />
              </MenuItem>
              <MenuItem>
                <Button content="Ghép thẻ" iconType="link" />
              </MenuItem>
            </MenuList>
          </Paper>
        )}
        {currentQuestion + 1 <= courseDetailsData.content.length ? (
          <span>
            Câu hỏi thứ: {currentQuestion} / {courseDetailsData.content.length}
          </span>
        ) : (
          <span>
            Câu hỏi thứ: {currentQuestion} / {courseDetailsData.content.length}
          </span>
        )}

        <Button content="Tùy chọn"></Button>
      </div>
      {currentQuestion + 1 <= courseDetailsData.content.length ? (
        <div style={{ height: "100vh" }}>
          {courseDetailsData.content.map((course, index) => (
            <>
              {currentQuestion === index && (
                <div className={`question-container`}>
                  <div>
                    <div className="question-options">
                      <div>
                        <span>Định nghĩa</span>
                      </div>
                      <Button iconType="volumeup"></Button>
                    </div>
                    <div className="question-content">{course.word}</div>
                    <p className="question-demand">Chọn thuật ngữ đúng</p>
                    <div className="question-multiple-choice-answer">
                      <div
                        className={`answer-option`}
                        onClick={() => handleAnswerClick(index, course.kanji)}
                      >
                        <div>1</div>
                        <span>{course.kanji}</span>
                      </div>
                      <div
                        className={`answer-option`}
                        onClick={() =>
                          handleAnswerClick(index, wrongAnser[0].word)
                        }
                      >
                        <div>2</div>
                        <span>{wrongAnser[0].word}</span>
                      </div>
                      <div
                        className={`answer-option`}
                        onClick={() =>
                          handleAnswerClick(index, wrongAnser[1].word)
                        }
                      >
                        <div>3</div>
                        <span>{wrongAnser[1].word}</span>
                      </div>
                      <div
                        className={`answer-option`}
                        onClick={() =>
                          handleAnswerClick(index, wrongAnser[2].word)
                        }
                      >
                        <div>4</div>
                        <span>{wrongAnser[2].word}</span>
                      </div>
                    </div>
                    <div className="question-give-up">
                      Bạn không biết câu trả lời?
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      ) : (
        <div style={{ height: "100vh" }}>
          <div
            className={`question-container`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              Điểm số của bạn là: {score}/{courseDetailsData.content.length}
            </div>
            <br />
            <div>Các thuật ngữ trả lời sai:</div>
            <ul>
              {wrongAnswers.map((answer, index) => (
                <li key={index}>{answer.word}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Learn;
