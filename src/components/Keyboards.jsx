import React from 'react';
import { useEffect } from 'react';

const Keyboards = () => {
  const keys = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'backspace',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    'space',
  ];

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  }, []);

  const detectKeyDown = (event) => {
    console.log('Clicked Key: ' + event.key);
    if (event.key === ' ') {
      console.log('Clicked: Spacebar');
    }
  };

  return (
    <div className="text-center text-3xl font-bold py-8 mt-12">
      {keys.map((key) => {
        <div>{key}</div>;
      })}
    </div>
  );
};

export default Keyboards;
