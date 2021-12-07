import React from 'react';

function AllItems({ otherLanguageData }) {
  const ITEMS = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <div>
      {ITEMS.map((item) => {
        return <button onClick={() => otherLanguageData(item)}>{item}</button>;
      })}
    </div>
  );
}

export default AllItems;
