import React from 'react';

function UsersDataOne({ githubUserDataOne, toggleInput }) {
  return (
    <div>
      <p>{githubUserDataOne.login}</p>
      <button onClick={() => toggleInput(githubUserDataOne.login)}>X</button>
    </div>
  );
}

export default UsersDataOne;
