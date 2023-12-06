import React from "react";
import "../App.css";

const Navbar = () => {
    return (
        <div className="toparea">
            
            <div className="check-boxes">
                <div className="mybcheckbox">
                    <input type="checkbox" id="chooseTemplate" name="chooseTemplate"></input><p>CHOOSE TEMPLATE</p>

                </div>

                <div className="mybcheckbox">
                    <input type="checkbox" id="personalInfo" name="personalInfo"></input><p>PERSONAL INFO</p>

                </div>
                <div className="mybcheckbox">
                    <input type="checkbox" id="experience" name="experience"></input><p>EXPERIENCE</p>

                </div>
                <div className="mybcheckbox">
                    <input type="checkbox" id="education" name="education"></input><p>EDUCATION</p>

                </div>
                <div className="mybcheckbox">
                    <input type="checkbox" id="skills" name="skills"></input><p>SKILLS</p>

                </div>
                <div className="mybcheckbox">
                    <input type="checkbox" id="summary" name="summary"></input><p>SUMMARY</p>

                </div>
                <div className="mybcheckbox">
                    <input type="checkbox" id="reviewDownload" name="reviewDownload"></input><p>REVIEW & DOWNLOAD</p>

                </div>
            </div>
        </div>
    )
};

export default Navbar;