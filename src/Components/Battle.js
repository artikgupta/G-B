import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import UsersDataOne from './UserDataOne';
import UsersDataTwo from './UserDataTwo';
const initialData = {
  playerOne: '',
  playerTwo: '',
};

const toggleData = {
  playerOne: false,
  playerTwo: false,
};

function Battle() {
  const [githubUserDataOne, setGitHubUserDataOne] = useState('');
  const [githubUserDataTwo, setGitHubUserDataTwo] = useState('');

  const [players, setPlayers] = useState(initialData);

  const [isToggle, setIstoggle] = useState(toggleData);

  const toggleInput = (name) => {
    // console.log(name);
    let toggleCloneOne = { ...isToggle };
    let toggleCloneTwo = { ...isToggle };
    toggleCloneOne['playerOne'] = !isToggle.playerOne;
    toggleCloneTwo['playerTwo'] = !isToggle.playerTwo;

    if (name === players.playerOne) {
      console.log(players.playerOne);
      setIstoggle(toggleCloneOne);
    }

    if (name === players.playerTwo) {
      console.log(players.playerTwo);

      setIstoggle(toggleCloneTwo);
    }
  };

  const setPlayersData = (e) => {
    const { name, value } = e.target;
    let playersClone = { ...players };
    playersClone[name] = value;
    setPlayers(playersClone);
  };

  const fetchUserData = (e, playerName) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${players[playerName]}`)
      .then((res) => res.json())
      .then((data) => {
        if (players[playerName] === players.playerOne) {
          setGitHubUserDataOne(data);
          toggleInput(players[playerName]);
        }
        if (players[playerName] === players.playerTwo) {
          setGitHubUserDataTwo(data);
          toggleInput(players[playerName]);
        }
      });
    let playersClone = { ...players };
    playersClone[playerName] = '';
    setPlayers(playersClone);
  };

  return (
    <div>
      <h1>Instructions</h1>

      <div>
        <div>
          Enter two Github users
          <span>
            <i class="fas fa-user-friends"></i>
          </span>
        </div>
        <div>
          Battle
          <span>
            <i class="fas fa-fighter-jet"></i>
          </span>
        </div>
        <div>
          See the winner
          <span>
            <i class="fas fa-trophy"></i>
          </span>
        </div>
      </div>
      <div>
        <form>
          {isToggle.playerOne ? (
            <UsersDataOne
              githubUserDataOne={githubUserDataOne}
              toggleInput={toggleInput}
            />
          ) : (
            <div>
              <input
                type="text"
                placeholder="github username"
                name="playerOne"
                value={players.playerOne}
                onChange={(e) => setPlayersData(e)}
              />
              <button
                type="submit"
                onClick={(e) => fetchUserData(e, 'playerOne')}
              >
                Submit
              </button>
            </div>
          )}

          {isToggle.playerTwo ? (
            <UsersDataTwo
              githubUserDataTwo={githubUserDataTwo}
              toggleInput={toggleInput}
            />
          ) : (
            <div>
              <input
                type="text"
                placeholder="github username"
                name="playerTwo"
                value={players.playerTwo}
                onChange={(e) => setPlayersData(e)}
              />
              <button
                type="submit"
                onClick={(e) => fetchUserData(e, 'playerTwo')}
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Battle;
