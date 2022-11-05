import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Timer from '../components/Timer';

const wordCloud = () =>
  `the quick brown fox jumped over the lazy dog`
    .split(' ')
    .sort(() => (Math.random() > 0.5 ? 1 : -1));

function Word(props) {
  const { text, active, correct } = props;

  if (correct === true) {
    return <span className="text-green-400">{text} </span>;
  }

  if (correct === false) {
    return <span className="text-rose-400">{text} </span>;
  }

  if (active) {
    return <span className="text-sky-600">{text} </span>;
  }

  return <span>{text} </span>;
}

Word = React.memo(Word);

const Home = () => {
  const [userInput, setUserInput] = useState();

  const cloud = useRef(wordCloud());

  const [activeWord, setActiveWord] = useState(0);

  const [correctWordArray, setCorrectWordArray] = useState([]);

  const [startCounting, setStartCounting] = useState(false);

  function processInput(value) {
    if (activeWord === cloud.current.length) {
      // Stop Program on Last Word
      return;
    }

    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(' ')) {
      if (activeWord === cloud.current.length - 1) {
        setStartCounting(false);
        setUserInput('Complete');
      } else {
        setUserInput('');
      }

      // Word Completed
      setActiveWord((index) => index + 1);

      // Correct Word
      setCorrectWordArray((data) => {
        const word = value.trim();
        const newResult = [...data];
        newResult[activeWord] = word === cloud.current[activeWord];
        return newResult;
      });
    } else {
      setUserInput(value);
    }
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-8">Start typing...</h1>
      <Timer startCounting={startCounting} correctWords={correctWordArray.filter(Boolean).length} />
      <div className="text-center text-3xl font-bold py-8">
        <p>
          {cloud.current.map((word, index) => {
            return (
              <Word text={word} active={index === activeWord} correct={correctWordArray[index]} />
            );
          })}
        </p>
        <input
          className="text-center p-2 mt-6 m-2"
          placeholder="type here..."
          type="text"
          value={userInput}
          onChange={(e) => {
            processInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Home;
