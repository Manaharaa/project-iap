import React, { useRef } from 'react';
import anime from 'animejs';
import '../styles/loginX.css';

const LoginPage = () => {
  const currentRef = useRef(null);

  const handleFocus = (id, offset, arrayValue) => {
    if (currentRef.current) currentRef.current.pause();
    currentRef.current = anime({
      targets: 'path',
      strokeDashoffset: {
        value: offset,
        duration: 700,
        easing: 'easeOutQuart',
      },
      strokeDasharray: {
        value: arrayValue,
        duration: 700,
        easing: 'easeOutQuart',
      },
    });
  };

  return (
    <div className="page">
      <div className="container">
        <div className="left">
          <div className="login">Login</div>
          <div className="eula">
            By logging in you agree to the ridiculously long terms that you didn't bother to read
          </div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop style={{ stopColor: '#ff00ff' }} offset="0" id="stop876" />
                <stop style={{ stopColor: '#ff0000' }} offset="1" id="stop878" />
              </linearGradient>
            </defs>
            <path
              d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
            />
          </svg>
          <div className="form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onFocus={() => handleFocus('#email', 0, '240 1386')}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onFocus={() => handleFocus('#password', -336, '240 1386')}
            />
            <input
              type="submit"
              id="submit"
              value="Submit"
              onFocus={() => handleFocus('#submit', -730, '530 1386')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
