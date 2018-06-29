import React from 'react';
import "./styles.css"

class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        </nav>
    );
  }
}

export default Header;