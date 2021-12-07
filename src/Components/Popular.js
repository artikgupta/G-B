import React from 'react';

function Popular({ data }) {
  return (
    <div>
      {data &&
        data.items.map((item) => {
          return (
            <ul>
              <li>{item.full_name}</li>
              <li>
                {item.stargazers_count}
                <span>stars</span>
              </li>
              <li>
                {item.forks_count} <span>forks</span>
              </li>
              <li>
                {item.open_issues_count} <span>open issues</span>
              </li>
            </ul>
          );
        })}
    </div>
  );
}

export default Popular;
