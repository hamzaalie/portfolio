import React from "react";
import Navbar from './StickyNavbar';
import "../App.css";

const InfoForm = () => {
  return (
    <div className="forms">
      <form
        action="submit_form.php"
        method="post"
        enctype="multipart/form-data"
      >
        
        <Navbar />
       
        <div className="container">
          <div className="heading">
            <span>Employers will use this information to contact you.</span>
          </div>

          <div className="picturearea">
            <div className="photo" id="picture">
              {/* <img src="images\profile.jpg"></img> */}
            </div>
            <button type="upload" className="upload-btn">UPLOAD PHOTO</button>
          </div>

          <div className="inputboxes">
            <div className="left-side">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder="e.g., your first name" required></input>
            </div>
            <div>
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder="e.g., your last name" required></input>
            </div>
          </div>

          <div className="myaddress">
            <label for="address">Address</label>
            <input type="text" id="address" name="address" placeholder="e.g., street, coloney" required></input>
          </div>

          <div className="inputboxes">
            <div className="left-side">
              <label for="city">City</label>
              <input type="text" id="city" name="city" placeholder="e.g., Islamabad" required></input>
            </div>
            <div>
              <label for="country">Country</label>
              <input type="text" id="country" name="country" placeholder="e.g., Pakistan" required></input>
            </div>
          </div>

          <div className="inputboxes">
            <div className="left-side">
              <label for="phone">Phone</label>
              <input type="text" id="phone" name="phone" placeholder="e.g., 123456789" required></input>
            </div>
            <div>
              <label for="email">Email Address</label>
              <input type="text" id="email" name="email" placeholder="e.g., myname@gmail.com" required></input>
            </div>
          </div>
          <div className="btns">
          <button type="upload" className="btn-back" id="back-btn">Back</button>
          <button type="upload" className="btn-save" id="save-btn">SAVE & NEXT</button>
          </div>
        </div>

        
      </form>
      </div>
    
  );
};

export default InfoForm;
