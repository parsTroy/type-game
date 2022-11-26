import React, { useState } from 'react';
import Timer from './Timer';

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

const Quote = () => {
  const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';

  const [activeWord, setActiveWord] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  const [startCounting, setStartCounting] = useState(false);
  const [userInput, setUserInput] = useState();

  async function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
      .then((response) => response.json())
      .then((data) => data.content);
  }

  const quotesArr = [];

  async function renderNewQuote() {
    let quote = await getRandomQuote();
    quotesArr.push(quote.split(' '));
    console.log(quotesArr[0]);
  }

  Word = React.memo(Word);

  function processInput(value) {
    if (activeWord === quotesArr[0].length) {
      // Stop Program on Last Word
      return;
    }

    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(' ')) {
      if (activeWord === quotesArr[0].length - 1) {
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
        newResult[activeWord] = word === quotesArr[0][activeWord];
        return newResult;
      });
    } else {
      setUserInput(value);
    }
  }

  return (
    <div>
      <Timer startCounting={startCounting} correctWords={correctWordArray.filter(Boolean).length} />
      <p>
        {'Loading...' ||
          quotesArr[0]?.map((word, index) => {
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
      <div className="mt-8">
        <button className="border p-4 px-6 rounded-md bg-[#191919]">New Quote</button>
      </div>
    </div>
  );
};

export default Quote;
