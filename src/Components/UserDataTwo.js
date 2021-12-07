import React from 'react';

function UsersDataTwo({ githubUserDataTwo, toggleInput }) {
  return (
    <div>
      <p>{githubUserDataTwo.login}</p>
      <button onClick={() => toggleInput(githubUserDataTwo.login)}>X</button>
    </div>
  );
}

export default UsersDataTwo;
