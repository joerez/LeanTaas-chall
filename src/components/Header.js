import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <div className="container">
            <h1>{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
          </div>
        </div>
      );
    }
}

export default Header;