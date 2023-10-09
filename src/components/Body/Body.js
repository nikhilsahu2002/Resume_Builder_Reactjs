import React, { useEffect, useState } from "react";
import "./Body.css";
import Arrow from "../../Assets/Arrow.png";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

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
      sectionTitle : sections.BasicInfo,
      detail:{},
    },

    [sections.WorkExp] : {
      id : sections.WorkExp,
      sectionTitle : sections.WorkExp,
      detail:[],
    },
    [sections.Achievements]:{
      id : sections.Achievements,
      sectionTitle : sections.Achievements,
      Points: [],
    },
    [sections.Education]:{
      id:sections.Education,
      sectionTitle:sections.Education,
      detail:[],
    },
    [sections.Project]:{
      id:sections.Project,
      sectionTitle:sections.Project,
      detail:[],
  },
  [sections.Summary]:{
    id: sections.Summary,
    sectionTitle:sections.Summary,
    detail:"",
  },
  [sections.Other]:{
    id: sections.Other,
    sectionTitle:sections.Other,
    detail:"",
  },

  })
  useEffect(()=>{
    // console.log(ResumeInfo);
  },[ResumeInfo]);
  

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
          <Editor sections={sections} Information={ResumeInfo} setInformation={setResumeInfo} />
          <Resume />
      </div>
    </div>
  );
};

export default Body;
