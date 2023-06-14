
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import $ from 'jquery';


// import DatePicker from "react-datepicker";  
  
import "react-datepicker/dist/react-datepicker.css";  

import '../styles/regStyles.css';


export default function Registration() {
  const [activeContent, setActiveContent] = useState('home');

  const contentOrder = ['1', '2', '3', '4','5']; // Define the order of the content

  const [formValid, setFormValid] = useState(false);


  function showContent(contentId){
    setActiveContent(contentId);
  };

  useEffect(() => {
    $(document).ready(function() {
      $('input[type="radio"]').click(function() {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".selectt").not(targetBox).hide();
        $(targetBox).show();
      });
    });
  }, []);

  function goToNextContent() {
    // if (!checkFormValidity()) {
    //   alert('Please fill in all the required fields.');
    //   return;
    // }
    
    const currentIndex = contentOrder.indexOf(activeContent);
    if (currentIndex < contentOrder.length - 1) {
      const nextContent = contentOrder[currentIndex + 1];
      setActiveContent(nextContent);
    }
  }

  function goToPreviousContent() {
    // if (!checkFormValidity()) {
    //   alert('Please fill in all the required fields.');
    //   return;
    // }
    
    const currentIndex = contentOrder.indexOf(activeContent);
    if (currentIndex < contentOrder.length - 1) {
      const previousContent = contentOrder[currentIndex - 1];
      setActiveContent(previousContent);
    }
  }
  

  function checkFormValidity() {
    const formInputs = document.querySelectorAll('.formReg input');
    for (let i = 0; i < formInputs.length; i++) {
      if (formInputs[i].hasAttribute('required') && formInputs[i].value.trim() === '') {
        return false;
      }
    }
    return true;
  }
  
  function onSubmitHandler() {
    alert('Form submitted successfully!');

  }

 
  
  
  
  return (
<div className="box">

    <div>
    <div> <header><h1>COLLEGE OF FAST TRACK LEARNING</h1>
    <hr className='hr1' /> 
    <div className='side'>
    <h2>APPLICATION FOR NEW ADMISSION</h2>
    <p>Fill all the mandatory fields shown in * to go to next step</p></div>
    </header>
    </div>
    
      <nav className="slidemenu">
        {/* Item 1 */}
        <input
          type="radio"
          name="slideItem"
          id="slide-item-1"
          className="slide-toggle"
          checked={activeContent === '1'}
          onChange={() => showContent('1')}
        />
        <label htmlFor="slide-item-1">
          <p className="icon">🏫</p>
          <span>School Selection</span>
        </label>

        {/* Item 2 */}
        <input
          type="radio"
          name="slideItem"
          id="slide-item-2"
          className="slide-toggle"
          checked={activeContent === '2'}
          onChange={() => showContent('2')}
        />
        <label htmlFor="slide-item-2">
          <p className="icon">📜</p>
          <span>Instructions</span>
        </label>

        {/* Item 3 */}
        <input
          type="radio"
          name="slideItem"
          id="slide-item-3"
          className="slide-toggle"
          checked={activeContent === '3'}
          onChange={() => showContent('3')}
        />
        <label htmlFor="slide-item-3">
          <p className="icon">👪</p>
          <span>Parents</span>
        </label>

        {/* Item 4 */}
        <input
          type="radio"
          name="slideItem"
          id="slide-item-4"
          className="slide-toggle"
          checked={activeContent === '4'}
          onChange={() => showContent('4')}
        />
        <label htmlFor="slide-item-4">
          <p className="icon">★</p>
          <span>Terms and conditions</span>
        </label>

        {/* Item 5 */}
        <input
          type="radio"
          name="slideItem"
          id="slide-item-5"
          className="slide-toggle"
          checked={activeContent === '5'}
          onChange={() => showContent('5')}
        />
        <label htmlFor="slide-item-5">
          <p className="icon">🏫</p>
          <span>Students</span>
        </label>

        <div className="clear"></div>

        {/* Bar */}
        <div className="slider">
          <div className="bar"></div>
        </div>
      </nav>
      <hr className='hr2' /> 

      <div id="content">
        {/* Content for 1*/}
        <div id="1" style={{ display: activeContent === '1' ? 'block' : 'none' }}>
          <h1>School Selection</h1>
          <div>
          <form className ="formReg" action="/action_page.php">
          <label htmlFor="country">Select School: </label>
        <select id="country" name="country">
          <option value="australia">Piliyandala</option>
          <option value="canada">Pelawatte</option>
          <option value="usa">Thalawathugoda</option>
        </select>
<h1></h1>
<h1></h1>
        <label style={{ marginBottom: '10px' }} htmlFor="country">Select Syllabus: </label><br/>
        <select id="country" name="country">
          <option value="australia">Advanced Level</option>
          <option value="canada">Ordinary Level</option>
          <option value="usa">Primary</option>
        </select>
        <h1></h1>
        <h1></h1>
        <label>Medium</label>
  <div>
    <input type="radio" id="male" name="gender" value="male" />
    <label style={{ marginLeft: '10px' }} htmlFor="male">English</label>
    <input style={{ marginLeft: '30px' }} type="radio" id="female" name="gender" value="female" />
    <label style={{ marginLeft: '10px' }} htmlFor="female">Sinhala</label>
   
  </div>
  <h1></h1>
        <h1></h1>
        <label htmlFor="country">Select Academic Year: </label>
        <select id="country" name="country">
          <option value="australia">2022 - 2023</option>
          <option value="canada">2023 - 2024</option>
         
        </select>
</form>
      
        <input id='next' type="submit" value="Next" onClick={goToNextContent} />
     
    </div>
          
        </div>
        {/* Content for 2 */}
        <div id="2" style={{ display: activeContent === '2' ? 'block' : 'none' }}>
          <h1>Instructions</h1>
          <p>Please read this carefully before filling the Information Sheet / Application</p>
          <hr className='hr1' />
          <p>Follow the below mentioned guidelines carefully prior to filling up the "Information Sheet" and the Application. Please take care to fill in all the mandatory fields. The initial selection process will be based on the information provided by you in the "Information Sheet". Therefore, please ensure that you provide us with clear and accurate information. You will be requested to submit scanned documents to support all information provided at a later stage. Applications without the relevant supporting documents, will be rejected.</p>
          <br/>
          <ol>
          <li><p><b>Name :</b> entering the name ensure it is spelt correctly. The name you enter now would be the name that would be used throughout your child's school career (Reports, Certificates, Examination Entries Etc). Please enter the name as per child's Birth Certificate. The common name of the child should be a name that is in the Birth Certificate. Common name is the name by which your child would be addressed in school.</p></li>
          <br/>
          <li><p><b>Contact Information</b> Please ensure to fill the address and telephone numbers accurately. It is compulsory to enter an email address that is checked by you frequently as we would be corresponding with you only via email. All payment vouchers too will be emailed.</p></li>
          <br/>
          <li><p><b>Occupation & Income</b> Please mention the current working place only. If it is a self-owned business, mention the name of company. Only the net income should be entered as the monthly income. (not salary before deductions). The mentioned income should be supported by last 3 months salary slips if you are working for a company or last 3 months current account statements if it is a business. If income is via a rent or lease of a property it should be supported with a legal lease/rent agreement.</p></li>
          <br/>
          <li><p><b>Parent are Overseas</b> In the event of mother or father working overseas or being out of country, a no objection letter from that parent should be provided and it should be further supported with an employment confirmation letter or service contract, a visa document and a valid passport copy.</p></li>
          <br/>
          <li><p><b>Documents to be uploaded and submitted</b></p>
          <br/>
          <ul style={{ marginLeft:'10% '}}>
            <li>All the documents should be submitted in PDF format except student’s photograph.</li>
            <li>Photograph should be submitted in JPG format.</li>
            <li>Multiple copies of a document should be scanned to one PDF document and submitted. (Eg : 3 months salary slips should be compiled into one PDF document, Not 3 individual documents).</li>
          </ul>
          </li>
          </ol>
          
          

<h1></h1>
<div className="btn-group">
<input id='next' type="submit" value="Previous" onClick={goToPreviousContent} />
<input id='next' type="submit" value="Next" onClick={goToNextContent} /> 
        </div>
        </div>

        {/* Content for 3 */}
        <div id="3" style={{ display: activeContent === '3' ? 'block' : 'none' }}>
          <h1>Parent information</h1>
          
          <form className ="formReg" action="/action_page.php">

{/* /*geeks*/ }
<label>Are you an</label>
        <div style={{ marginBottom: '50px' }}>
            <label style={{ marginLeft: '10px' }}>
                <input style={{ marginLeft: '30px' }} type="radio" name="colorRadio" 
                       value="C"/>Existing Parent</label>
            <label style={{ marginLeft: '10px' }}>
                <input  style={{ marginLeft: '30px' }} type="radio" name="colorRadio" 
                       value="Cplus"/>New Parent</label>
           
        </div>

        <div style={{ backgroundColor: '#E3F6F5', marginLeft:'10px' }} class="C selectt">
        <form className ="formReg" action="/action_page.php">

        <label htmlFor="fname">Full Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." /> </form>
        {/* <div style={{ backgroundColor: '#E3F6F5' }} className="btn-group">
<input id='next' type="submit" value="Previous" onClick={goToPreviousContent} />
<input id='next' type="submit" value="Next" onClick={goToNextContent} /> 
        </div> */}
        </div>

        <div style={{ backgroundColor: '#E3F6F5' , marginLeft:'10px' }} class="Cplus selectt"> 
        <form className ="formReg" action="/action_page.php">
   
        <label htmlFor="fname">Full Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Address</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        <label htmlFor="country">Occupation</label>
        <select id="country" name="country">
          <option value="australia">Doctor</option>
          <option value="canada">Lawyer</option>
          <option value="usa">Other</option>
        </select>

        <label>Gurdian</label>
  <div>
    <input type="radio" id="male" name="gender" value="male" />
    <label style={{ marginLeft: '10px' }} htmlFor="male">Mother</label>
    <input style={{ marginLeft: '30px' }} type="radio" id="female" name="gender" value="female" />
    <label style={{ marginLeft: '10px' }} htmlFor="female">Father</label>
    <input style={{ marginLeft: '30px' }} type="radio" id="other" name="gender" value="other" />
    <label style={{ marginLeft: '10px' }} htmlFor="other">Gurdian</label>
  </div>

  <label>Language Proficiency</label>
  <div>
    <input type="checkbox" id="male" name="gender" value="male" />
    <label style={{ marginLeft: '10px' }} htmlFor="male">Sinhala</label>
    <input style={{ marginLeft: '30px' }} type="checkbox" id="female" name="gender" value="female" />
    <label style={{ marginLeft: '10px' }} htmlFor="female">English</label>
    <input style={{ marginLeft: '30px' }} type="checkbox" id="other" name="gender" value="other" />
    <label style={{ marginLeft: '10px' }} htmlFor="other">Tamil</label>
  </div>

  <label>Gender</label>
  <div>
    <input type="radio" id="male" name="gender" value="male" required/>
    <label style={{ marginLeft: '10px' }} htmlFor="male">Male</label>
    <input style={{ marginLeft: '30px' }} type="radio" id="female" name="gender" value="female" />
    <label style={{ marginLeft: '10px' }} htmlFor="female">Female</label>
    <input style={{ marginLeft: '30px' }} type="radio" id="other" name="gender" value="other" />
    <label style={{ marginLeft: '10px' }} htmlFor="other">Other</label>
  </div> </form>
 
        {/* <div style={{ backgroundColor: '#E3F6F5' }} className="btn-group">
<input style={{ margin: '40px 0' }}  id='next' type="submit" value="Previous" onClick={goToPreviousContent} />  
<input id='next' type="submit" value="Next" onClick={goToNextContent} /> 
        </div> */}
</div>
       
        {/* <div className="clear"></div> */}
  
</form>
 <div style={{ backgroundColor: '#E3F6F5' }} className="btn-group">
<input id='next' type="submit" value="Previous" onClick={goToPreviousContent} />
<input id='next' type="submit" value="Next" onClick={goToNextContent} /> 
        </div>

      
        </div>

        {/* Content for 4 */}
        <div id="4" style={{ display: activeContent === '4' ? 'block' : 'none' }}>
          <h1>Contact Information</h1>
          
          <form className ="formReg" action="/action_page.php">
        <label htmlFor="fname">Contact Number - Home</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="fname">Contact Number - Office</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Email</label>
        <input type="email" id="lname" name="lastname" placeholder="Your last name.." />

    
        
      </form>
      <div className="btn-group">
<input id='next' type="submit" value="Previous" onClick={goToPreviousContent} />
<input id='next' type="submit" value="Next" onClick={goToNextContent} /> 
        </div>
      
        </div>

         {/* Content for 5 */}
         <div id="5" style={{ display: activeContent === '5' ? 'block' : 'none' }}>
          <h1>Contact Information</h1>
          
          <form className ="formReg" action="/action_page.php">
        <label htmlFor="fname">Contact Number - Home</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="fname">Contact Number - Office</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Email</label>
        <input type="email" id="lname" name="lastname" placeholder="Your last name.." />
       
      </form>
      <div className="btn-group">
<input id='next' type="submit" value="Previous" onClick={goToPreviousContent} />
<Link to="/homepage"><input id='next' type="submit" value="Submit"  /> </Link> 
        </div>

      

        </div>


      </div>
    </div>
    </div>
  );
};




