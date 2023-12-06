import React from "react";
import Navbar from "./StickyNavbar";
import "../App.css";



const Education = () => {
  return (
    <div className="forms">
      <Navbar />
      

      <div className="container">
      <div className="heading">
            <p>EDUCATION</p>
            <span>Add information about your educational background.</span>
          </div>
        <form>

          <div className="inputboxes">
            <div className="left-side">
              <label for="schoolName">School Name:</label>
              <input type="text" id="schoolName" name="schoolName" required placeholder="e.g., Your last school name"></input>
            </div>
            <div>
              <label for="city">City:</label>
              <input type="text" id="city" name="city" required placeholder="e.g., school city name"></input>
            </div>
          </div>

          <div className="inputboxes">
            <div className="left-side">
              <label for="state">State:</label>
              <input type="text" id="state" name="state" required placeholder="e.g., sate name of your school"></input>
            </div>
            <div>
              <label for="degree">Select a Degree:</label>
              <select id="degree" name="degree" required>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>
          </div>

          <div className="inputboxes">
            <div className="left-side">
              <label for="fieldOfStudy">Field of Study:</label>
              <input type="text" id="fieldOfStudy" name="fieldOfStudy" required placeholder="e.g., Computer Science"></input>
            </div>
            <div>
              <label for="graduationDate">Graduation Date:</label>
              <input type="date" id="graduationDate" name="graduationDate" required></input>
            </div>
          </div>
          <div className="exp-btns">
              <button type="back" className="btn-back" id="back-btn">Back</button>
              <button type="save" className="btn-save" id="save-btn">SAVE & NEXT</button>
            </div>
        </form>
      </div>
    </div>
  )
};
export default Education;