import React, { useState } from "react";
import "./Body.css";
import Arrow from "../../Assets/Arrow.png";
import Editor from "../Editor/Editor";

const Body = () => {
  const colors = ["black", "yellow", "green", "purple", "blue"];
  const sections = {
    BasicInfo: "Basic Information",
    WorkExp: "Working Experience",
    Project: "Projects",
    Education: "Education",
    Achievements: "Achievements",
    Summary: "Summary",
    Other: "Others",
  };

  const [ResumeInfo,setResumeInfo]=useState({
    [sections.BasicInfo]:{
      id : sections.BasicInfo,
      title : sections.BasicInfo,
      detail:{},
    },

    [sections.WorkExp] : {
      id : sections.WorkExp,
      title : sections.WorkExp,
      detail:[],
    },
    [sections.Achievements]:{
      id : sections.Achievements,
      title : sections.Achievements,
      Points: [],
    },
    [sections.Education]:{
      id:sections.Education,
      title:sections.Education,
      detail:[],
    },
    [sections.Project]:{
      id:sections.Project,
      title:sections.Project,
      detail:[],
  },
  [sections.Summary]:{
    id: sections.Summary,
    title:sections.Summary,
    detail:"",
  },
  [sections.Other]:{
    id: sections.Other,
    title:sections.Other,
    detail:"",
  },

  })
  

  return (
    <div className="container1">
      <p className="heading1">Resume Builder</p>
      <div className="toolbar">
        <div className="colors">
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className="color"></span>
          ))}
        </div>
        <button>
          Download{" "}
          <img style={{ height: "20px", width: "20px" }} src={Arrow} alt="" />
        </button>
      </div>
      <div className="main"> 
            <Editor sections={sections} Information={ResumeInfo} />
      </div>
    </div>
  );
};

export default Body;
