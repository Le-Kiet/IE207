// import logo from "./logo.svg";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Button from "../components/Button.js";
import { useState, useEffect } from "react";
import "./NewCourse.css";
import TextArea from "../components/TextArea.js";
import { FaTrash } from "react-icons/fa";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import Chat from "../components/Chat.js";
// import NewCourse from "../components/Login.js";
function NewCourse() {
  //Get all notes
  const [userInfo, setUserInfo] = useState(null);
  const [allNotes, setAllNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [word, setWord] = useState([]);
  const [kanji, setKanji] = useState([]);
  const [translate, setTranslate] = useState([]);
  const [tag, setTag] = useState("");
  const [total, setTotal] = useState(1);
  const [content, setContent] = useState([
    {
      word: "",
      kanji: "",
      translate: "",
    },
  ]);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-all-notes");
      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
      console.log(response, 0);
    } catch (error) {
      console.log("Error occured");
    }
  };
  useEffect(() => {
    getAllNotes();
    // getUserInfo();
    // console.log(getUserInfo(), 1);
    return () => {};
  }, []);
  const handleAddContent = () => {
    setTotal(total + 1);
    setContent([
      ...content,
      {
        word: "",
        kanji: "",
        translate: "",
      },
    ]);
  };
  const handleChangeWord = (index, value) => {
    const newWord = [...word];
    newWord[index] = value;
    setWord(newWord);
    // console.log(word, "word");
    const newContent = [...content];
    newContent[index].word = value;
    setContent(newContent);
    console.log(content, "contentword");
  };
  const handleChangeKanji = (index, value) => {
    const newKanji = [...kanji];
    newKanji[index] = value;
    setKanji(newKanji);
    // console.log(kanji, "kanji");
    const newContent = [...content];
    newContent[index].kanji = value;
    setContent(newContent);
    console.log(content, "contentkanji");
  };
  const handleChangeTranslate = (index, value) => {
    const newTranslate = [...translate];
    newTranslate[index] = value;
    setTranslate(newTranslate);
    // console.log(translate, "translate");
    const newContent = [...content];
    newContent[index].translate = value;
    setContent(newContent);
    console.log(content, "contenttranslate");
  };
  const handleSave = () => {
    // Ở đây bạn có thể lưu trữ hoặc xử lý mảng `words`
    // for (i = 0; i <= total; i++) {
    //   content;
    // }
  };
  // Add note
  const addNewCourse = async () => {
    try {
      const response = await axiosInstance.post("/create", {
        title,
        content,
        tag,
      });
      if (response.data && response.data.note) {
        // getAllNotes();
        // onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again");
      }
    }
  };
  return (
    <div className="App">
      <Navbar />
      <div className="body-container">
        <div className="body-header">
          <span className="create-text">Tạo học phần mới</span>
          <button type="submit" onClick={addNewCourse}>
            Tạo
          </button>
        </div>
        <form className="course-info">
          <div className="input-title">
            <input
              type="text"
              placeholder="Nhập tiêu đề"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            ></input>
            <input
              type="text"
              placeholder="Nhập tag"
              value={tag}
              onChange={({ target }) => setTag(target.value)}
            ></input>
          </div>
          {/* <TextArea
            width="100%"
            height="20px"
            outline="bottom 2px black"
            placeholder='Nhập tiêu đề, ví dụ "Sinh học - Chương 22: Tiến hóa"'
            label="Thông tin học phần"
          /> */}
          {[...Array(total).keys()].map((index) => (
            <div className="course-content-container">
              <div className="course-words">
                <div>
                  <div key={index}>
                    <div className="course-content">
                      <div className="content-header">
                        <span style={{ fontSize: "20px", fontWeight: "700" }}>
                          {index + 1}
                        </span>
                        <div className="delete">
                          <FaTrash />
                        </div>
                      </div>
                    </div>
                    <div style={{ width: "100%" }}>
                      <div className="input-container">
                        <input
                          type="text"
                          placeholder="Thêm thuật ngữ..."
                          value={word[index] || ""}
                          onChange={(event) =>
                            handleChangeWord(index, event.target.value)
                          }
                        />
                        <span> Thuật ngữ</span>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          placeholder="Thêm kanji..."
                          value={kanji[index] || ""}
                          onChange={(event) =>
                            handleChangeKanji(index, event.target.value)
                          }
                        />
                        <span> Kanji</span>
                      </div>
                      <div className="input-container">
                        <input
                          key={index}
                          type="text"
                          placeholder="Thêm thuật ngữ..."
                          value={translate[index] || ""}
                          onChange={(event) =>
                            handleChangeTranslate(index, event.target.value)
                          }
                        />
                        <span> Định nghĩa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
            className="course-content-container-add-button"
            onClick={handleAddContent}
          >
            <span>+ Thêm thẻ</span>
          </div>
        </form>
        <Chat></Chat>
      </div>
      <Footer />
    </div>
  );
}

export default NewCourse;
