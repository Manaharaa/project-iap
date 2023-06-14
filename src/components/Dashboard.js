import React from 'react';

export default function Dashboard() {
  return (
    <React.Fragment>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </head>
      <body>
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="title">Fullscreen Overlay Navigation Bar</div>
          <p>(Hamburger Menu-2)</p>
        </div>
      </body>
    </React.Fragment>
  );
};