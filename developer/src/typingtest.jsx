import React, { useState, useEffect } from "react";
import "./typing.css";
import beginnerSentences from "./sentences";
import intermediateSentences from "./intermediate";
import advancedSentences from "./advanced";

const sentenceMap = {
  Beginner: beginnerSentences,
  Intermediate: intermediateSentences,
  Advanced: advancedSentences,
};

function TypingSpeedTest() {
  const [level, setLevel] = useState("Beginner");
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [finished, setFinished] = useState(false);

  const getRandomSentence = (selectedLevel) => {
    const list = sentenceMap[selectedLevel];
    const sentence = list[Math.floor(Math.random() * list.length)];
    setText(sentence);
    setInput("");
    setStartTime(null);
    setFinished(false);
    setWpm(0);
    setAccuracy(0);
  };

  useEffect(() => {
    getRandomSentence(level);
  }, [level]);

  const handleChange = (e) => {
    const val = e.target.value;
    if (!startTime) setStartTime(Date.now());
    if (val.length > text.length) return;
    setInput(val);

    if (val.length === text.length) {
      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000 / 60;
      const wordCount = text.trim().split(" ").length;
      const correctChars = text
        .split("")
        .filter((char, i) => char === val[i]).length;

      setWpm(Math.round(wordCount / timeTaken));
      setAccuracy(Math.round((correctChars / val.length) * 100));
      setFinished(true);
    }
  };

  const renderColoredText = () => {
    return text.split("").map((char, index) => {
      let className = "";
      if (index < input.length) {
        className = char === input[index] ? "correct" : "incorrect";
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="typing-container">
      <h2>Typing Speed Test</h2>

      <div className="level-selector">
        <label>
          Choose Level:
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            disabled={finished === false && input.length > 0}
          >
            {Object.keys(sentenceMap).map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text">{renderColoredText()}</p>

      <textarea
        className="input"
        value={input}
        onChange={handleChange}
        placeholder="Start typing here..."
        rows="4"
        disabled={finished}
      />

      <button className="clear-btn" onClick={() => getRandomSentence(level)}>
        Restart
      </button>

      {finished && (
        <div className="result">
          <p>WPM: {wpm}</p>
          <p>Accuracy: {accuracy}%</p>
          <p>
            Mistakes:{" "}
            {text.split("").filter((char, i) => char !== input[i]).length}
          </p>
        </div>
      )}
    </div>
  );
}

export default TypingSpeedTest;
