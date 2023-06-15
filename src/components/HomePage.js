import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/homeHeader.css';
import '../styles/homeSidebar.css';
import '../styles/gallery.css';
import 'w3-css/w3.css'; // Import the w3.css file


export default function HomePage() {


  return (
  
    <body>
    <div className='headBar'>
    <header id="header">
	<nav className="links" style={{ '--items': 5 }} >
		<a href="#gallery">Gallery</a>
		<a href="#">Link 2</a>
		<a href="#">Link 3</a>
		<a href="#">Link 4</a>
		<a href="#">Link 5</a>
		<span className="line"></span>
	</nav>
</header>
<React.Fragment>
      <head className='sideBar'>
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
    
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
          <Link to="/login"><li>
              <a href="#">Home</a>
            </li></Link>
            <Link to="/LoginPage">  <li>
              <a href="#">About</a>
            </li></Link>
            <Link to="/dashboardApp"><li>
              <a href="#">Services</a>
            </li></Link>
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
          
        </div>
        
    
    </React.Fragment>
    <section className="hero bg-no-repeat bg-cover bg-center h-screen text-center" style={{ marginTop: 0 , paddingTop: '250px'}}>
      <h1 className="text-grey-lightest font-hairline uppercase">COLLEGE OF FAST TRACK LEARNING</h1>
      <a href="#lyrics" className="bg-transparent hover:bg-pink-light text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
      <Link to="/registration"> <button style={{  marginLeft: '50%',
    marginRight: '50px',
    width: '118.2px',
    height: '83.2px',
    paddingRight: '20px',
    marginTop: '0px',
    marginBottom: '200px',
    fontSize: '20px'}}>Apply now</button> </Link> 
      </a>
    </section>
    </div>
    <div id = "gallery" className='gallery'>
    <div className="demo-description">
      <h1 className="demo-description__title">Full Course Dinner</h1>
      <p className="demo-description__p">Resize the browser to see the &lt;picture&gt; effect.</p>
    </div>

    <div className="demo coursemeal">
      {/* APPETIZERS */}
      <div className="coursemeal__div">
        <picture className="responsive-img">
          <source media="(min-width: 992px)" srcSet="https://i.postimg.cc/jSTZmp8H/appetizer-img-1.jpg" />
          <source media="(min-width: 767px)" srcSet="https://i.postimg.cc/1RTdCYhB/appetizer-img-2.jpg" />
          <source srcSet="https://i.postimg.cc/TwnctQr7/appetizer-img-3.jpg" />
          <img src="https://i.postimg.cc/jSTZmp8H/appetizer-img-1.jpg" alt="Appetizer" />
        </picture>

        <div className="coursemeal-info">
          <a href="#" className="coursemeal-info__link">Appetizer</a>
        </div>
      </div>

      {/* MAIN COURSE */}
      <div className="coursemeal__div">
        <picture className="responsive-img">
          <source media="(min-width: 992px)" srcSet="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg" />
          <source media="(min-width: 767px)" srcSet="https://i.postimg.cc/9XYj186s/maindish-img-2.jpg" />
          <source srcSet="https://i.postimg.cc/pLY8dt4q/maindish-img-3.jpg" />
          <img src="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg" alt="Main Course" />
        </picture>

        <div className="coursemeal-info">
          <a href="#" className="coursemeal-info__link">Main Course</a>
        </div>
      </div>

      {/* DESSERTS */}
      <div className="coursemeal__div">
        <picture className="responsive-img">
          <source media="(min-width: 992px)" srcSet="https://i.postimg.cc/9FfLh6ZZ/dessert-img-1.jpg" />
          <source media="(min-width: 767px)" srcSet="https://i.postimg.cc/FsRXBnKn/dessert-img-2.jpg" />
          <source srcSet="https://i.postimg.cc/ZKcFCVFZ/dessert-img-3.jpg" />
          <img src="https://i.postimg.cc/ZKcFCVFZ/dessert-img-1.jpg" alt="Desserts" />
        </picture>

        <div className="coursemeal-info">
          <a href="#" className="coursemeal-info__link">Dessert</a>
        </div>
      </div>
    </div>
    </div>
  </body>
  );
};


