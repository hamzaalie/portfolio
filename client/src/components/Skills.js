import React from "react";
import Navbar from "./StickyNavbar";
import "../App.css";


const Skills = () =>{
    return(
      <div className="forms">
        <Navbar />

        

        
      <div className="container">
      <div className="heading">
            <p>SKILLS</p>
            <span>Highlight 6-8 of your top skills.</span>
          </div>
        <form>
    <div className="inputboxes">      
    <div className="left-skil">      
    <label for="skill1">Skill</label>
    <input type="text" id="skill1" name="skill1" placeholder="e.g., Project Management" required></input>
      </div>
      <div>
    <label for="level1">Level</label>
    <select id="level1" name="level1" required>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>
    </div>
    </div>

   <div className="inputboxes">
   <div className="left-skil">

    <label for="skill2">Skill</label>
    <input type="text" id="skill2" name="skill2" placeholder="e.g., Online Marketing" ></input>
    </div>
    <div>
    <label for="level2">Level</label>
    <select id="level2" name="level2" required>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>
    </div>
    </div>

    <div className="inputboxes">
    <div className="left-skil">
    <label for="skill3">Skill</label>
    <input type="text" id="skill3" name="skill3" placeholder="e.g., HTML" ></input>
    </div>
    <div>
    <label for="level3">Level</label>
    <select id="level3" name="level3" required>
    <option value="beginner">Beginner</option>
    <option value="intermediate">Intermediate</option>
    <option value="advanced">Advanced</option>
    </select>
    </div>
    </div>
    <div className="exp-btns">
              <button type="back" className="btn btn-back" id="back-btn">Back</button>
              <button type="back" className="addmore" id="add-btn">+ ADD MORE SKILLS</button>
              <button type="save" className="btn-save" id="save-btn">SAVE & NEXT</button>
            </div>
  </form>
  </div>
  </div>
    )
};

export default Skills;