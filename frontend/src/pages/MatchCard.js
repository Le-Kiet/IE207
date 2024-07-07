import React from "react";
import { useState, useRef, useEffect } from "react";
import Button from "../components/Button";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import "./MatchCard.css";
const seedrandom = require("seedrandom");
const MatchCard = () => {
  const [currentQuestion, setCurrenQuestion] = useState(0);
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
  const [data, setData] = useState([]);
  const [isSelected, setSelected] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [cardQuantitySelected, setCardQuantitySelected] = useState(0);
  const [cardBeingSelecting, setCardBeingSelecting] = useState("");

  const onMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  const shuffledContent = courseDetailsData.content.sort(
    () => Math.random() - 0.5
  );
  // console.log(courseDetailsData.content, data);
  // console.log(data, "data");
  const [cards, setCards] = useState(courseDetailsData.content);
  const [cardsKanji, setCardsKanji] = useState(courseDetailsData.content);

  console.log(cards);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [shuffledCardsKanji, setShuffledCardsKanji] = useState([]);
  useEffect(() => {
    const shuffled = sortArrayByWord(cards);
    setShuffledCards(shuffled);
    const shuffledKanji = sortArrayByKanji(cards);
    setShuffledCardsKanji(shuffledKanji);
    console.log(shuffledCards, shuffledCardsKanji);
  }, [cards]);

  function sortArrayByWord(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function sortArrayByKanji(array) {
    return array.sort((a, b) => a.kanji.localeCompare(b.kanji));
  }
  function handleCardClick(card, index) {
    console.log("Clicked card:", card, "index", index);

    if (cardQuantitySelected === 0) {
      setShuffledCards((prevCards) =>
        prevCards.map((c, i) => {
          console.log(i, "=", index);
          return i === index
            ? { ...c, selected: true }
            : { ...c, selected: false };
        })
      );
      setCardQuantitySelected(1);
      setCardBeingSelecting(card);
      console.log(cardQuantitySelected, "cardQuantitySelected");
    } else if (cardQuantitySelected === 1) {
      setCardQuantitySelected(0);
      if (card.word === cardBeingSelecting.word) {
        console.log("true");
        setShuffledCards((prevCards) =>
          prevCards.map((c) =>
            c.word === card.word ? { ...c, hidden: true } : c
          )
        );
        setShuffledCardsKanji((prevCardsKanji) =>
          prevCardsKanji.map((c) =>
            c.word === card.word ? { ...c, hidden: true } : c
          )
        );
      } else {
        console.log("false");
        setShuffledCards((prevCards) =>
          prevCards.map((c, i) =>
            i === index ? { ...c, selected: true } : { ...c, selected: false }
          )
        );
      }
      console.log(index, "index");
      setCardBeingSelecting(null);
      console.log(cardQuantitySelected, "cardQuantitySelected");
    }
  }
  return (
    <div className="App">
      <div className="learn-header">
        <Button
          iconType="book"
          content="Thẻ ghi nhớ"
          onClick={onMenuClick}
        ></Button>
        {openMenu && (
          <Paper sx={{ width: 320, maxWidth: "100%" }} className="menu">
            <MenuList>
              <MenuItem>
                <Button content="Học" iconType="stickynote" />
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
        <span></span>
        <Button content="Tùy chọn"></Button>
      </div>
      <div className="match-card-container grid-container">
        {shuffledCardsKanji.map((card, index) => (
          <div
            key={card.word}
            className={`card ${card.hidden ? "hidden" : ""} ${
              card.selected ? "blue" : ""
            }`}
            onClick={() => handleCardClick(card, index)}
          >
            {card.word}
          </div>
        ))}
      </div>
      <div className="match-card-container grid-container">
        {shuffledCardsKanji.map((card, index) => (
          <div
            key={card.kanji}
            className={`card ${card.hidden ? "hidden" : ""}`}
            onClick={() => handleCardClick(card, index)}
          >
            {card.kanji}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MatchCard;
