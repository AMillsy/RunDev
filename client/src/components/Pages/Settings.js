import { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [formState, setFormState] = useState({
    username: "",
    file: "",
    location: "",
  });

  const onFormChange = (e) => {
    const { value, name } = e.target;

    setFormState({ ...formState, [name]: value });
    console.log(formState);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="settings-title-con">
        <h2 className="settings-title">Settings</h2>
      </div>
      <div className="settings-container">
        <form className="settings-form" onSubmit={handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={onFormChange}
          ></input>
          <label>Profile Image:</label>
          <input type="file" name="file" onChange={onFormChange} />
          <label>Location:</label>
          <input
            type="text"
            id="location"
            placeholder="London"
            name="location"
            onChange={onFormChange}
          ></input>
          <label>Job or Hobby:</label>
          <input name="job" placeholder="Web developer"></input>
          <label>Skills</label>
          <div className="skills-submit">
            <p className="skills-warning">
              Click the <b>+</b> to add new skills
            </p>
            <input type="text" placeholder="skill"></input>
            <button className="settings-submit skills-btn">+</button>
          </div>
          <button className="settings-submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Settings;
