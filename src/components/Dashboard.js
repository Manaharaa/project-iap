import React from 'react';
import '../styles/dashboard.scss';

const Navbar = () => {
  return (
    <div data-component="navbar">
      <nav className="navbar p-0 fixed-top">
        <button className="navbar-toggler navbar-toggler-left rounded-0 border-0" type="button" data-toggle="collapse" data-target="#megamenu-dropdown" aria-controls="megamenu-dropdown" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i><span className="ml-3">Advanced</span>
        </button>
        {/* Rest of the navbar content */}
      </nav>
    </div>
  );
};

const Megamenu = () => {
  return (
    <div className="megamenu">
      <div className="collapse navbar-collapse" id="megamenu-dropdown">
        <div className="megamenu-links">
          {/* Megamenu content */}
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div data-component="sidebar">
      <div className="sidebar">
        <ul className="list-group flex-column d-inline-block first-menu">
          <li className="list-group-item pl-3 py-2">
            <a href="#"><i className="fa fa-user-o" aria-hidden="true"><span className="ml-2 align-middle">Reporting</span></i></a>
            {/* Sidebar submenu */}
          </li>
          {/* Rest of the sidebar content */}
        </ul>
      </div>
    </div>
  );
};

const Apps = () => {
  return (
    <div>
      <Navbar />
      <Megamenu />
      <Sidebar />
    </div>
  );
};

export default Apps;
