import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import AllItems from './AllItems';
import Popular from './Popular';

import Battle from './Battle';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    otherLanguageData();
  }, []);

  const otherLanguageData = (language) => {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      <Header />
      <AllItems otherLanguageData={otherLanguageData} />
      <Routes>
        <Route path="/" element={<Popular data={data} />} />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </div>
  );
}

export default App;
