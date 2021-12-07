import React from 'react';
import './styles/style.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <Link to="/">
              <li>Popular</li>
            </Link>
            <Link to="/battle">
              <li>Battle</li>
            </Link>
          </ul>
          <div>🔦</div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
