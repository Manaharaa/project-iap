// import React from 'react';
import React, { useState } from 'react';

import '../styles/styles.css';


export default function Registration() {
  const [activeContent, setActiveContent] = useState('home');

  function showContent(contentId){
    setActiveContent(contentId);
  };

  return (
    <div>
      <nav className="slidemenu">
        {/* Item 1 */}
        <input
          type="radio"
          name="slideItem"
          id="slide-item-1"
          className="slide-toggle"
          checked={activeContent === 'home'}
          onChange={() => showContent('home')}
        />
        <label htmlFor="slide-item-1">
          <p className="icon">♬</p>
          <span>Home</span>
        </label>

        {/* Item 2 */}
        <input
          type="radio"
          name="slideItem"
          id="slide-item-2"
          className="slide-toggle"
          checked={activeContent === 'about'}
          onChange={() => showContent('about')}
        />
        <label htmlFor="slide-item-2">
          <p className="icon">★</p>
          <span>About</span>
        </label>

        {/* Item 3 */}
        <input
          type="radio"
          name="slideItem"
          id="slide-item-3"
          className="slide-toggle"
          checked={activeContent === 'folio'}
          onChange={() => showContent('folio')}
        />
        <label htmlFor="slide-item-3">
          <p className="icon">✈</p>
          <span>Folio</span>
        </label>

        {/* Item 4 */}
        <input
          type="radio"
          name="slideItem"
          id="slide-item-4"
          className="slide-toggle"
          checked={activeContent === 'blog'}
          onChange={() => showContent('blog')}
        />
        <label htmlFor="slide-item-4">
          <p className="icon">✎</p>
          <span>Blog</span>
        </label>

        <div className="clear"></div>

        {/* Bar */}
        <div className="slider">
          <div className="bar"></div>
        </div>
      </nav>

      <div id="content">
        {/* Content for Home */}
        <div id="home" style={{ display: activeContent === 'home' ? 'block' : 'none' }}>
          <h1>Welcome to the Home Page!</h1>
          <div>
      <form className ="formReg" action="/action_page.php">
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    </div>
          
        </div>
        {/* Content for About */}
        <div id="about" style={{ display: activeContent === 'about' ? 'block' : 'none' }}>
          <h1>About Us</h1>
          <p>Some information about our company.</p>
          <form className ="formReg" action="/action_page.php">
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
        </div>

        {/* Content for Folio */}
        <div id="folio" style={{ display: activeContent === 'folio' ? 'block' : 'none' }}>
          <h1>Our Portfolio</h1>
          <p>View our collection of projects.</p>
          <form className ="formReg" action="/action_page.php">
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
        </div>

        {/* Content for Blog */}
        <div id="blog" style={{ display: activeContent === 'blog' ? 'block' : 'none' }}>
          <h1>Blog</h1>
          <p>Read our latest blog posts.</p>
          <form className ="formReg" action="/action_page.php">
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
        </div>
      </div>
    </div>
  );
};




