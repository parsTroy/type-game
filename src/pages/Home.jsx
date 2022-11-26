import React, { useRef } from 'react';
import { useState } from 'react';
import Keyboards from '../components/Keyboards';
import Quote from '../components/Quote';

const wordCloud = () => {
  `the quick brown fox jumped over the lazy dog`
    .split(' ')
    .sort(() => (Math.random() > 0.5 ? 1 : -1));
};

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

  return (
    <div>
      <h1 className="text-center text-xl font-bold py-8 mt-12">Start typing...</h1>
      <div className="m-auto bg-slate-800 rounded-md w-[40vw] text-center text-xl font-bold py-8 mt-4">
        <Quote />
      </div>
      <div>
        <Keyboards />
      </div>
    </div>
  );
};

export default Home;
