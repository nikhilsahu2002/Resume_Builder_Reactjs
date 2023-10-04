import React, { useEffect, useState } from "react";
import "../Editor/Editor.css";
import InputControl from "../InputControl/InputControl";

const Editor = (props) => {
  const sections = props.sections;
  const Information = props.Information;
  const [activeKey, setActiveKey] = useState(Object.keys(sections)[0]); // Fixed variable naming

  const initialActiveInfo = Information[Object.keys(sections)[0]]; // Fixed variable naming
  const [ActiveInfo, setActiveInfo] = useState(initialActiveInfo);

  const [sectionTitle, setsectionTitle] = useState("");
  const [values, setvalues] = useState({
    name: "",
    linkedin: "",
    github: "",
    email: "",
    title: "",
  });
  const WorkExpBody = (
    <div className="details">
      <div className="row">
        <InputControl label="Title" placeholder="Enter Title" />
        <InputControl label="Company Name" placeholder="Enter Company Name" />
      </div>
      <div className="row">
        <InputControl
          label="Certificate link"
          placeholder="Enter Certificate Link "
        />
        <InputControl label="Location" placeholder="Enter Location" />
      </div>
      <div className="row">
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter Start Date "
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter End Date"
        />
      </div>
      <div className="coloumn">
        <label htmlFor="">Enter Work Description</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
      </div>
    </div>
  );

  const ProjectBody = (
    <div className="detail">
      <div className="row">
        <InputControl label="Title" placeholder="Enter Title" />
      </div>
      <InputControl label="Overview" placeholder="Enter Overview of Project" />

      <div className="row">
        <InputControl label="Deploy Link" placeholder="Enter The Deploy Link" />
      </div>
      <InputControl label="Github Link" placeholder="Enter The Git Link" />

      <div className="coloumn">
        <label htmlFor="">Enter Description</label>
        <InputControl placeholder="line 1" />
        <InputControl placeholder="line 2" />
        <InputControl placeholder="line 3" />
        <InputControl placeholder="line 4" />
      </div>
    </div>
  );

  const EducationBody = (
    <div className="detail">
      <div className="row">
        <InputControl label="Title" placeholder="Enter Your Education " />

        <InputControl
          label="College/School Name"
          placeholder="Enter The College/School Name"
        />
      </div>
      <div className="row">
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter The Start Date For This Education"
        />

        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter The End Date For This Education"
        />
      </div>
    </div>
  );

  const BasicInfoBody = (
    <div className="detail">
      <div className="row">
        <InputControl label="Name" placeholder="Enter Your name " />

        <InputControl
          label="Title"
          placeholder="Enter The Title Like Front End "
        />
      </div>
      <div className="row">
        <InputControl label="LinkedIn" placeholder="Enter Linkedin Id" />

        <InputControl label="Github" placeholder="Enter Github Profile " />
      </div>
      <div className="row">
        <InputControl
          label="Email"
          placeholder="Enter Email like xyz@gmail.com"
        />

        <InputControl
          label="Enter Phone Number"
          placeholder="Enter Phone Number Here "
        />
      </div>
    </div>
  );

  const AchievementBody = (
    <div className="detail">
      <div className="coloumn">
        <label htmlFor="">List Your Achievements</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );

  const SummaryBody = (
    <div className="detail">
      <InputControl
        label="Summary"
        placeholder="Enter Your Objective/Summary"
      />
    </div>
  );

  const OtherBody = (
    <div className="detail">
      <InputControl label="Other" placeholder="Enter Something" />
    </div>
  );

  const generateBody = (activeKey) => {
    switch (activeKey) {
      case "WorkExp":
        return WorkExpBody;
      case "Project":
        return ProjectBody;
      case "Education":
        return EducationBody;
      case "BasicInfo":
        return BasicInfoBody;
      case "Achievements":
        return AchievementBody;
      case "Summary":
        return SummaryBody;
      case "Other":
        return OtherBody;
      default:
        return null; // Return null for unsupported sections
    }
  };

  useEffect(() => {
    setActiveInfo(Information[sections[activeKey]]);
    setsectionTitle([sections[activeKey]]);
  }, [activeKey]);

  return (
    <div className="container2">
      <div className="header2">
        {Object.keys(sections).map((key) => (
          <div
            className={`section2 ${key === activeKey ? "active" : ""}`}
            key={key}
            onClick={() => setActiveKey(key)}>
            {sections[key]}
          </div>
        ))}
      </div>
      <div className="body1">
        <InputControl
          label="Title"
          onChange={(event) => setsectionTitle(event.target.value)}
          value={sectionTitle}
          placeholder="Enter Section Title"
        />
        <div className="chips">
          {Array.isArray(ActiveInfo?.detail)
            ? ActiveInfo?.detail.map((item, index) => (
                <div className="chip" key={item.title + index}>
                  <x />
                  <p>
                    {sections[activeKey]}
                    {index + 1}
                  </p>
                </div>
              ))
            : ""}
        </div>

        {generateBody(activeKey)}

        <button>Save</button>
      </div>
    </div>
  );
};

export default Editor;
