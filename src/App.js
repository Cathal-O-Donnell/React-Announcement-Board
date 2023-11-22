import React from 'react';

import Announcements from './components/Announcements';
import Header from './components/Header';
import './App.css';

// Hardcoded data for test
const data = [
  {
    id: 1,
    title: "XXX",
    date: "08/24/2023 12:45 UTC+02",
    name: "Cathal O Donnell",
    role: "Production coordinator",
    message: "Lorem ipsum dolor sit amet consectetur. Morbi cras amet phasellus diam tincidunt vivamus aliquam laoreet. Fames tincidunt sit fames lorem. Nibh vel posuere dis sit eu. Lorem ipsum dolor sit amet consectetur. Morbi cras amet phasellus diam tincidunt vivamus aliquam laoreet. Fames tincidunt sit fames lorem. Nibh vel posuere dis sit eu. Lorem ipsum dolor sit amet consectetur...",
    isConfirmed: true
  },
  {
    id: 2,
    title: "YYY",
    date: "08/24/2023 12:45 UTC+02",
    name: "Cathal O Donnell",
    role: "Production coordinator",
    message: "Lorem ipsum dolor sit amet consectetur. Morbi cras amet phasellus diam tincidunt vivamus aliquam laoreet. Fames tincidunt sit fames lorem. Nibh vel posuere dis sit eu. Lorem ipsum dolor sit amet consectetur. Morbi cras amet phasellus diam tincidunt vivamus aliquam laoreet. Fames tincidunt sit fames lorem. Nibh vel posuere dis sit eu. Lorem ipsum dolor sit amet consectetur...",
    isConfirmed: false
  },
  {
    id: 3,
    title: "ZZZ",
    date: "08/24/2023 12:45 UTC+02",
    name: "Cathal O Donnell",
    role: "Production coordinator",
    message: "Lorem ipsum dolor sit amet consectetur. Morbi cras amet phasellus diam tincidunt vivamus aliquam laoreet. Fames tincidunt sit fames lorem. Nibh vel posuere dis sit eu. Lorem ipsum dolor sit amet consectetur. Morbi cras amet phasellus diam tincidunt vivamus aliquam laoreet. Fames tincidunt sit fames lorem. Nibh vel posuere dis sit eu. Lorem ipsum dolor sit amet consectetur...",
    isConfirmed: false
  }
];

const App = () => {

  return (
    <div className='main-container'>
      <Header></Header>
      <Announcements announcements={data}></Announcements>
    </div>
  );
}

export default App;